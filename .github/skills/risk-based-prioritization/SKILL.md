---
name: risk-based-prioritization
description: Prioritizes Playwright test scenarios based on business risk, user impact, technical complexity, and failure likelihood.
---

# Risk-Based Test Prioritization

Use this skill with the Playwright test planner agent to rank discovered user flows and test scenarios by risk.

The goal is to produce more relevant, high-value test plans instead of treating all scenarios equally.

---

# When To Use

Use this skill when:
- creating a test plan for a web application
- exploring a website with Playwright MCP
- deciding which scenarios should be tested first
- identifying critical user journeys
- reducing large test plans into high-value coverage
- prioritizing automation candidates

---

# Core Principle

Prioritize scenarios that combine:

1. High business impact
2. High user impact
3. High likelihood of failure
4. High technical complexity
5. High recovery cost

A scenario is high priority when failure would block users, lose money, corrupt data, expose security risk, or break a critical workflow.

---

# Risk Categories

## P0 — Critical

Use P0 for scenarios where failure would:

- block login or access
- prevent purchase, booking, payment, checkout, or signup
- cause data loss or corruption
- expose sensitive data
- break core application functionality
- affect most users
- create security or compliance risk

Examples:
- user cannot log in
- payment cannot be completed
- order is submitted twice
- saved data disappears after refresh
- unauthorized user can access restricted content

---

## P1 — High

Use P1 for scenarios where failure would:

- significantly degrade an important workflow
- affect a common user journey
- break form submission or validation
- prevent users from completing a key secondary task
- cause incorrect displayed data
- create major usability confusion

Examples:
- search results are incorrect
- filters produce wrong results
- profile update fails
- required validation is missing
- uploaded file is not saved

---

## P2 — Medium

Use P2 for scenarios where failure would:

- affect non-critical functionality
- impact a less frequent workflow
- cause recoverable user inconvenience
- require workaround but does not block the main journey

Examples:
- sorting order is wrong
- optional preference is not saved
- secondary navigation link is broken
- non-critical notification does not appear

---

## P3 — Low

Use P3 for scenarios where failure would:

- be cosmetic
- affect static content
- impact rarely used functionality
- not block user progress
- have easy workaround

Examples:
- minor copy issue
- layout misalignment
- non-critical icon missing
- rarely used footer link broken

---

# Prioritization Heuristics

When ranking scenarios, evaluate:

## Business Impact

Ask:
- Does this flow generate revenue?
- Does it support onboarding, signup, payment, booking, or lead capture?
- Would failure affect business operations?
- Would failure create support tickets?

Higher business impact means higher priority.

---

## User Impact

Ask:
- How many users are affected?
- Is this part of the main user journey?
- Does failure block task completion?
- Can users recover without help?

Higher user impact means higher priority.

---

## Technical Risk

Increase priority when the flow includes:

- authentication
- authorization
- payments
- forms
- multi-step workflows
- file upload/download
- third-party integrations
- API-dependent UI
- async loading
- dynamic rendering
- modals/dialogs
- iframe or shadow DOM
- real-time updates
- state persistence
- browser storage
- session handling

---

## Failure Likelihood

Increase priority when the flow has:

- complex UI state
- conditional rendering
- debounce/throttle behavior
- race conditions
- network dependency
- previous flaky behavior
- multiple validation paths
- frequent recent changes
- many edge cases

---

## Recovery Cost

Increase priority when failure causes:

- lost user data
- duplicate submissions
- irreversible actions
- failed transactions
- user lockout
- manual support intervention
- compliance or audit concerns

---

# Scenario Selection Rules

When creating a test plan:

1. Start with P0 scenarios.
2. Include enough P1 scenarios to cover important user journeys.
3. Add P2 scenarios only after critical paths are covered.
4. Avoid over-prioritizing P3 scenarios unless requested.
5. Do not treat every UI element as equally important.
6. Prefer end-to-end user value over isolated UI coverage.
7. Prioritize workflows over static pages.
8. Prioritize data-changing actions over read-only actions.

---

# Automation Candidate Rules

High-priority automation candidates usually have:

- repeatable steps
- deterministic expected outcomes
- high business value
- high regression risk
- stable test data
- clear assertions

Avoid prioritizing automation for scenarios that are:

- highly visual only
- subjective
- unstable due to external systems
- rarely used
- low business value

---

# Required Output In Test Plans

For each scenario, include:

```md
## Priority

P0 / P1 / P2 / P3

## Risk Rationale

Explain why this scenario has this priority.

## Risk Factors

- Business impact:
- User impact:
- Technical complexity:
- Failure likelihood:
- Recovery cost:
```

---

# Recommended Test Plan Ordering

Order scenarios like this:

1. P0 critical path scenarios
2. P1 high-value regression scenarios
3. P2 supporting scenarios
4. P3 cosmetic or low-risk scenarios

Within each priority group, order by user journey sequence.

---

# Example Scenario Classification

## Scenario: User completes checkout

Priority: P0

Risk rationale:
Checkout directly affects revenue. Failure blocks purchase completion and may cause abandoned orders.

Risk factors:
- Business impact: High
- User impact: High
- Technical complexity: High
- Failure likelihood: Medium
- Recovery cost: High

---

## Scenario: User changes profile avatar

Priority: P2

Risk rationale:
Profile avatar upload is useful but does not block core product usage.

Risk factors:
- Business impact: Low
- User impact: Medium
- Technical complexity: Medium
- Failure likelihood: Medium
- Recovery cost: Low

---

## Scenario: Footer social media link opens correctly

Priority: P3

Risk rationale:
Footer social links are low-risk and do not block core user workflows.

Risk factors:
- Business impact: Low
- User impact: Low
- Technical complexity: Low
- Failure likelihood: Low
- Recovery cost: Low

---

# Important Rules

- Do not assign P0 unless the failure would seriously block users or business value.
- Do not inflate every scenario to P1.
- Always explain the reason for the assigned priority.
- Prefer fewer high-quality critical scenarios over many shallow scenarios.
- Include negative and edge cases when they protect high-risk flows.
- If business context is unknown, infer risk from common web application patterns.
- If uncertainty exists, state the assumption clearly.

---

# Integration With Playwright Planner Agent

When used with the `playwright-test-planner` agent:

- apply this prioritization after exploration
- rank discovered flows before writing the final plan
- include priorities in the saved markdown test plan
- ensure P0 and P1 scenarios are detailed enough for automation
- keep lower-priority scenarios concise

---

# Final Quality Bar

A good risk-based test plan should answer:

1. What should we test first?
2. Why does it matter?
3. What failure would hurt the product most?
4. Which scenarios give the highest confidence for the least effort?
