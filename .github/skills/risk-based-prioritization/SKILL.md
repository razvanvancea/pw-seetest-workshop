---
name: risk-based-prioritization
description: 'Prioritize Playwright test scenarios based on business impact, user impact, technical risk, failure likelihood, and recovery cost.'
---

# Risk-Based Test Prioritization

Use this skill after website exploration when test scenarios need to be prioritized by risk.

## Goal

Identify the scenarios that provide the highest confidence and regression value for the least effort.

Prioritization must be based on risk and user/business value rather than the number of UI elements or scenarios discovered.

## Inputs

Use the following information when available:

- Explored user flows
- Observed application behavior
- Business-critical workflows
- User impact
- Technical complexity
- Failure likelihood
- Recovery cost
- Known application context

If business context is unknown, infer risk from common web application patterns and clearly state assumptions.

## Risk Factors

Evaluate each scenario against the following factors.

### Business Impact

Consider:

- Revenue generation
- Signup/onboarding
- Payments
- Booking
- Lead capture
- Business operations
- Support impact
- Security or compliance impact

### User Impact

Consider:

- Number of users affected
- Whether the flow is part of the primary user journey
- Whether failure blocks task completion
- Whether users can recover independently

### Technical Risk

Increase risk for flows involving:

- Authentication
- Authorization
- Payments
- Forms
- Multi-step workflows
- File upload/download
- Third-party integrations
- API-dependent UI
- Async loading
- Dynamic rendering
- Modals/dialogs
- iframe/shadow DOM
- Real-time updates
- State persistence
- Browser storage
- Session handling

### Failure Likelihood

Consider:

- Complex UI state
- Conditional rendering
- Debounce/throttle behavior
- Race conditions
- Network dependencies
- Previous flaky behavior
- Multiple validation paths
- Frequent changes
- Many edge cases

### Recovery Cost

Increase risk when failure can cause:

- Lost data
- Duplicate submissions
- Irreversible actions
- Failed transactions
- User lockout
- Manual support intervention
- Compliance or audit issues

## Priority Levels

### P0 — Critical

Use P0 when failure would seriously block users or business operations.

Examples:

- Login/access failure
- Payment failure
- Checkout failure
- Data loss or corruption
- Unauthorized access
- Core functionality failure

### P1 — High

Use P1 when failure significantly affects an important or common workflow.

Examples:

- Incorrect search results
- Broken filtering
- Profile update failure
- Missing validation
- Important upload failure
- Important secondary workflow failure

### P2 — Medium

Use P2 for useful but non-critical functionality where failure is recoverable.

Examples:

- Sorting
- Optional preferences
- Secondary navigation
- Non-critical notifications

### P3 — Low

Use P3 for low-impact functionality.

Examples:

- Cosmetic issues
- Minor copy issues
- Non-critical icons
- Rarely used links
- Static content

## Prioritization Rules

1. Start with P0 scenarios.
2. Ensure critical user journeys are covered by P0/P1 scenarios.
3. Add P2 scenarios after critical coverage is complete.
4. Avoid unnecessary P3 coverage.
5. Prioritize complete user workflows over individual UI elements.
6. Prioritize data-changing actions over read-only actions.
7. Do not assign P0 without strong justification.
8. Do not inflate scenarios to P1.
9. Prefer fewer high-value scenarios over many shallow scenarios.
10. Include negative and edge cases when they protect high-risk workflows.

## Automation Suitability

Prioritize automation candidates when they have:

- Repeatable steps
- Deterministic outcomes
- High business value
- High regression risk
- Stable test data
- Clear assertions

Do not prioritize automation solely because something is easy to automate.

## Required Output

For every prioritized scenario, provide:

**Priority:** P0 / P1 / P2 / P3

**Risk Rationale:**  
Explain why the scenario received this priority.

**Risk Factors:**

- Business impact:
- User impact:
- Technical complexity:
- Failure likelihood:
- Recovery cost:

## Ordering

Order scenarios:

1. P0
2. P1
3. P2
4. P3

Within each priority group, preserve the natural user journey order.

## Quality Check

Before completing prioritization, verify:

- Critical workflows are P0/P1 where appropriate.
- Every priority has an explicit rationale.
- Risk assumptions are stated.
- P0 is reserved for genuinely critical failures.
- High-value negative and edge cases are included.
- Lower-value scenarios do not crowd out critical coverage.