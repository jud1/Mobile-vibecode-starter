#!/usr/bin/env bash
set -u

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
source "${repo_root}/scripts/mobile-env.sh"
cd "${repo_root}"

timestamp="$(date +%Y%m%d-%H%M%S)"
output_dir="${repo_root}/.artifacts/diagnostics/${timestamp}"
report="${output_dir}/environment.txt"
mkdir -p "${output_dir}"

run_section() {
  title="$1"
  shift
  {
    printf '\n## %s\n' "${title}"
    "$@"
  } >>"${report}" 2>&1
}

printf '# Mobile diagnostic evidence\nGenerated: %s\n' "$(date -Iseconds)" >"${report}"
run_section "System" sh -c 'sw_vers; uname -m'
run_section "Node and npm" sh -c 'command -v node; node --version; command -v npm; npm --version'
run_section "Project packages" npm ls --depth=0
run_section "Expo doctor" npx expo-doctor
run_section "Expo config" npx expo config --type public
run_section "Xcode" sh -c 'command -v xcodebuild; xcodebuild -version; xcode-select -p'
run_section "iOS simulators" xcrun simctl list devices available
run_section "Java" sh -c 'command -v java; java -version'
run_section "Android SDK" sh -c 'printf "ANDROID_HOME=%s\n" "$ANDROID_HOME"; command -v adb; adb version; command -v emulator; emulator -version; emulator -list-avds'
run_section "Android devices" adb devices -l
run_section "Git state" git status --short

echo "Diagnóstico guardado en ${report}"
echo "Comparte solo las secciones relacionadas con el fallo; revisa que no contengan datos sensibles."
