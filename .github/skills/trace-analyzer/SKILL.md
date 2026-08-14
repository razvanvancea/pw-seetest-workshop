---
name: trace-analyzer
description: Analyzes Playwright traces, screenshots, logs, and failures to identify root causes and explain test instability patterns.
---

# Purpose

Use this skill to investigate failing Playwright tests using:
- traces
- screenshots
- console logs
- network logs
- stack traces
- timeout failures

The goal is to identify the true root cause of failures and provide actionable remediation guidance.

---

# When To Use

Use this skill when:
- tests fail in CI
- flaky behavior appears
- Playwright traces are available
- screenshots need investigation
- network failures occur
- timeouts are difficult to diagnose
- intermittent failures occur

---

# Diagnostic Priorities

Always investigate in this order:

1. First failing user action
2. Locator validity
3. Element visibility/state
4. Navigation timing
5. Network/API failures
6. Race conditions
7. Environment instability
8. Parallel execution conflicts

---

# Common Failure Categories

## Selector Failures

Detect:
- stale selectors
- hidden elements
- detached elements
- incorrect locator assumptions

---

## Timing Failures

Detect:
- premature assertions
- incomplete page loads
- async rendering issues
- missing waits for application state

---

## Network Failures

Detect:
- failed API responses
- slow backend responses
- request interception problems
- authentication/session failures

---

## Test Design Issues

Detect:
- shared state leakage
- order dependency
- retry masking
- beforeAll misuse
- non-isolated tests

---

# Important Rules

- Never recommend arbitrary waitForTimeout() unless explicitly justified
- Prefer deterministic synchronization strategies
- Explain WHY the failure occurred
- Distinguish symptom from root cause
- Prioritize stable architectural fixes over temporary workarounds

---

# Preferred Recommendations

Prefer:
- locator improvements
- assertion stabilization
- state-based waiting
- network synchronization
- fixture isolation
- test independence
- resilient retry strategies

---

# Output Expectations

Provide:

1. Root cause summary
2. Failure category
3. Evidence from trace/logs
4. Recommended fix
5. Prevention guidance
6. Severity assessment

Keep explanations concise, technical, and actionable.
