#!/usr/bin/env bash
set -euo pipefail

platform="${1:-}"
if [[ "${platform}" != "android" && "${platform}" != "ios" ]]; then
  echo "Uso: ./scripts/run-native.sh android|ios" >&2
  exit 2
fi
shift

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
source "${repo_root}/scripts/mobile-env.sh"
cd "${repo_root}"

if [[ "${platform}" == "android" ]]; then
  [[ -x "${ANDROID_HOME}/platform-tools/adb" ]] || {
    echo "No se encontró adb. Ejecuta npm run diagnose." >&2
    exit 1
  }
  java -version >/dev/null
else
  command -v xcodebuild >/dev/null
  xcodebuild -version
fi

args=("$@")
has_port=false
for arg in "${args[@]}"; do
  if [[ "${arg}" == "--port" || "${arg}" == --port=* ]]; then
    has_port=true
    break
  fi
done

if [[ "${has_port}" == "false" ]]; then
  args+=(--port "${EXPO_PORT:-8083}")
fi

exec npx expo "run:${platform}" "${args[@]}"
