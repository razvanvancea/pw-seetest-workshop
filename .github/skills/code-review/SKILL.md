---
name: code-review
description: PR-style code review of the current branch compared to origin/main using the repository Playwright + TypeScript code review specialist. Use when the user asks for code review, PR review, branch review, Playwright review, or review current branch versus main.
argument-hint: "Optional: focus=<area> severity=<full|only-blockers> Example: focus=auth severity=full"
disable-model-invocation: true
---

# Code Review

Run a pull-request style review of the current branch compared to `origin/main`.

The repository specialist agent is the single source of truth for the review:

```txt
.github/agents/pw-code-reviewer.agent.md
```

Invoke the `pw-code-reviewer-specialist` agent and let it perform the review according to its own instructions.

## Source of Truth
The specialist agent defines and owns:
- review scope
- Git diff collection
- branch comparison rules
- Playwright review criteria
- TypeScript review criteria
- project conventions
- reliability and flake-prevention rules
- locator standards
- test isolation requirements
- diagnostics requirements
- severity definitions
- finding quality
- output format
- architecture assessment
- risk assessment
- non-goals
- reviewer tone

Do not duplicate, reinterpret, or override these rules in this skill.

The agent's existing behavior and criteria are authoritative.

Also follow the repository instructions:

```txt
.github/copilot-instructions.md
```

Project-specific instructions referenced by the specialist agent take precedence over generic best practices.

## Optional Arguments
The user may optionally provide review parameters.
### Focus
Example:

/code-review focus=auth
/code-review focus=selectors
/code-review focus=fixtures
/code-review focus=flake-risk

focus is an additional review emphasis.

It does not change the review scope defined by the specialist agent.

The specialist must still review only the current branch changes compared to origin/main.

If no focus is provided, perform the normal full review defined by the specialist agent.

### Severity
Supported values:

full
only-blockers

Examples:

/code-review severity=full
/code-review severity=only-blockers

Default:

severity=full

When severity=only-blockers is provided, instruct the specialist to report only findings classified as BLOCKER.

The specialist's definitions of BLOCKER, MAJOR, and MINOR remain authoritative.

Do not redefine severity criteria in this skill.

## Execution Rules
1. Invoke pw-code-reviewer-specialist.
2. Pass the user's optional focus and severity values as review context.
3. Do not perform an independent review in parallel with the specialist.
4. Do not duplicate the specialist's review checklist.
5. Do not add additional review criteria unless the user explicitly asks for them.
6. Do not modify files during the review.
7. If the user later explicitly asks to apply fixes, that is a separate action and must follow the specialist's rules for editing.

## Scope
The review scope is entirely controlled by the specialist agent.

The skill must not expand the review to:

- unrelated files
- historical code
- untouched code
- the entire repository
- unrelated project architecture

The specialist may inspect additional context only according to its own scope rules.

## Output
Return the specialist agent's review.

Do not rewrite, summarize, or reinterpret the specialist's findings unless the user explicitly asks for a summary.

Preserve the specialist's:

- findings
- severity
- rationale
- suggested fixes
- architecture notes
- risk assessment
- tone

When severity=only-blockers is requested, return the specialist's blocker-only review.