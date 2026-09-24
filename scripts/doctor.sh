#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
source "${repo_root}/scripts/mobile-env.sh"
cd "${repo_root}"

echo "Node: $(node --version)"
echo "npm: $(npm --version)"
echo "Expo SDK: $(node -p "require('./package.json').dependencies.expo")"
npx expo-doctor
