---
name: code-review
description: PR-style review of the current branch compared to origin/main using the repository Playwright + TypeScript code reviewer. Use when the user asks for code review, PR review, branch review, Playwright review, or review current branch versus main.
argument-hint: "Optional: focus=<area> severity=<only blockers|full> Example: focus=auth severity=full"
disable-model-invocation: true
---

# Code Review Current Branch vs Main

Perform a pull-request style code review of the current branch compared to `origin/main`.

This skill is a slash-command entry point for the repository reviewer workflow.

Use the repository custom agent:

```txt
.github/agents/pw-code-reviewer.agent.md
```

Specifically, follow the `pw-code-reviewer-specialist` agent instructions for:

- review scope
- Playwright and TypeScript quality bar
- project conventions
- severity definitions
- output format
- non-goals
- tone

Also follow:

```txt
.github/copilot-instructions.md
```

Project instructions take precedence over generic best practices.

## Optional inputs

The user may provide optional arguments after `/code-review`, for example:

```txt
/code-review focus=auth severity=full
/code-review focus=selectors severity=only blockers
```

Interpret:

- `focus`: optional review focus area, such as auth, selectors, fixtures, CI stability, page objects, test data, assertions, or flake risk.
- `severity`: either `full` or `only blockers`.

Defaults:

- `focus`: review all changed areas.
- `severity`: `full`.

If `severity=only blockers`, report only must-fix findings, but still include the diff summary, architecture notes, and risk assessment.

## Prime directive

Review ONLY changes introduced on the current branch compared to `origin/main`.

Do NOT review unrelated files, historical code, or untouched areas.

Do NOT edit files unless the user explicitly asks for fixes to be applied.

## First action

When terminal or shell execution is available, collect the diff yourself:

```bash
git rev-parse --abbrev-ref HEAD
git status -sb
git fetch origin main
git diff --name-only origin/main...HEAD
git diff --unified=5 origin/main...HEAD
```

Review only files returned by:

```bash
git diff --name-only origin/main...HEAD
```

If terminal access is unavailable or fails:

1. Check whether Git diff context was attached by the user.
2. If no diff is available, ask the user to provide:

```bash
git diff --unified=5 origin/main...HEAD
```

3. Do nothing else until the diff is available.

## Output

Use the output format defined in:

```txt
.github/agents/pw-code-reviewer.agent.md
```

If `severity=only blockers`, omit non-blocker findings.

## Non-goals

- Do not duplicate the full reviewer rubric here.
- Do not redefine project coding standards here.
- Do not override the specialist agent unless explicitly instructed by the user.
