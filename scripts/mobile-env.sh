#!/usr/bin/env bash

if [[ "$(uname -s)" == "Darwin" ]]; then
  export ANDROID_HOME="${ANDROID_HOME:-${HOME}/Library/Android/sdk}"
  export ANDROID_SDK_ROOT="${ANDROID_SDK_ROOT:-${ANDROID_HOME}}"

  homebrew_java_17_arm="/opt/homebrew/opt/openjdk@17/libexec/openjdk.jdk/Contents/Home"
  homebrew_java_17_intel="/usr/local/opt/openjdk@17/libexec/openjdk.jdk/Contents/Home"
  android_studio_java="/Applications/Android Studio.app/Contents/jbr/Contents/Home"

  if [[ -x "${homebrew_java_17_arm}/bin/java" ]]; then
    export JAVA_HOME="${homebrew_java_17_arm}"
  elif [[ -x "${homebrew_java_17_intel}/bin/java" ]]; then
    export JAVA_HOME="${homebrew_java_17_intel}"
  elif ! command -v java >/dev/null 2>&1 || ! java -version >/dev/null 2>&1; then
    if [[ -x "${android_studio_java}/bin/java" ]]; then
      export JAVA_HOME="${android_studio_java}"
    fi
  fi

  export PATH="${ANDROID_HOME}/platform-tools:${ANDROID_HOME}/emulator:${ANDROID_HOME}/cmdline-tools/latest/bin:${JAVA_HOME:+${JAVA_HOME}/bin:}${PATH}"
fi
