---
name: mobile-diagnostics
description: Diagnose and repair a difficult Android, iOS, React Native, or Expo failure in this repository when explicitly invoked.
---

# Mobile diagnostics

Investigate one concrete failure to a verified conclusion. Keep raw evidence in
`.artifacts/diagnostics/`; report only a short, redacted summary in the conversation.

1. Restate the failing behavior, platform, expected behavior, and the smallest known reproduction. Do not broaden the task.
2. Run `npm run diagnose` once for the baseline. Inspect only the report sections relevant to the failure.
3. Reproduce with the narrowest command that exposes the problem. Redirect verbose output to a new file under `.artifacts/diagnostics/`; do not paste entire Metro, Gradle, Xcode, simulator, or device logs into the conversation.
4. Form at most three ranked, falsifiable hypotheses. For each, name the evidence that would support or reject it, then perform the cheapest discriminating check first.
5. Change only the demonstrated cause. Preserve Expo-compatible versions and generated-native-directory rules from `AGENTS.md`.
6. Repeat the reproduction and the pertinent validation. Run `npm run validate` after a source or configuration fix; use a native build or device run only when the failure crosses that boundary.
7. Record the outcome as: cause, evidence, change, checks passed, checks not run, and any exact human action still required.

Use a research subagent only when the investigation contains an independent research question that can run in parallel and is likely to shorten the diagnosis. State the concrete benefit before delegating. Never create subagents by routine.

Stop and ask for help only when a credential, physical device action, permission, or product decision is required. Include the exact action the person must take and continue every independent check first.
