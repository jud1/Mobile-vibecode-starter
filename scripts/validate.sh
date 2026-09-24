#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "${repo_root}"

npm run lint
npm run typecheck
npm run doctor

if [[ "${1:-}" == "--bundle" ]]; then
  rm -rf "${repo_root}/.artifacts/export"
  npx expo export --platform all --output-dir .artifacts/export --clear
fi

echo "Validación completada."
