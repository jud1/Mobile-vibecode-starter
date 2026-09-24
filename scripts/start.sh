#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
source "${repo_root}/scripts/mobile-env.sh"
cd "${repo_root}"

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

exec npx expo start "${args[@]}"
