---
name: review-branch-vs-main
description: 'PR-style review: current branch vs main (TypeScript + Playwright standards, reliability, maintainability)'
argument-hint: 'Optional: focus=<area> severity=<only blockers|full> (Example: focus=auth severity=full)'
agent: 'pw-code-reviewer-specialist'
model: ['Claude Sonnet 4.6', 'Claude Haiku 4.5']
---

## Task

Perform a **pull-request style code review** of the **current branch compared to `main`** (base branch).

### Optional inputs (if provided in the chat input)
- `focus`: ${input:focus:optional focus area (e.g., auth, selectors, fixtures, CI stability)}
- `severity`: ${input:severity:full|only blockers}

## First action

1. Use `execute` to run `git diff --name-only origin/main...HEAD` to identify changed files, then `git diff --unified=5 origin/main...HEAD` for full context.
2. If terminal access is unavailable, check if Git diff context was attached (user can attach via **Add Context (@)** → **Git → Branch (Diff with Main Branch)**).
3. If neither is available, ask me to provide the diff and do nothing else.
4. Once the diff is available, proceed with the review using the quality bar and output format defined in your agent instructions.
