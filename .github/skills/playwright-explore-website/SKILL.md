---
name: playwright-explore-website
description: 'Explore a web application with Playwright MCP and return structured findings for test planning.'
---

# Playwright Website Exploration

Use this skill when a calling agent needs to explore a web application before creating or updating tests.

## Goal

Explore the provided website and produce factual, structured findings that the calling agent can use for test planning.

The exploration phase discovers application behavior. It does not create the final test plan or assign test priorities.

## Exploration Procedure

1. Navigate to the provided URL using the available Playwright MCP/browser tools.
   - If no URL is provided, ask the user for one.
   - Start from the provided URL and follow the application's normal navigation flow.

2. Inspect the initial page and identify:
   - Primary navigation
   - Important interactive elements
   - Forms and inputs
   - Buttons and links
   - Important page states
   - Authentication or setup requirements
   - User-facing messages
   - Data-changing actions

3. Explore 3–5 important user flows.
   - Prioritize flows that appear central to the application's purpose.
   - Follow realistic user interactions.
   - Include meaningful alternative or error states when practical.
   - Avoid spending time on low-value or purely cosmetic interactions.

4. For each explored flow, record:
   - Flow name
   - Starting state
   - User actions
   - Relevant UI elements
   - Stable, user-facing locator information where available
   - Resulting page or application state
   - Expected observable outcome
   - Validation or error behavior discovered
   - Important dependencies or assumptions

5. Prefer Playwright snapshots and DOM/accessibility information over screenshots.
   - Take screenshots only when they provide information that cannot reasonably be obtained from the DOM or accessibility snapshot.

6. Keep exploration factual.
   - Do not assign P0–P3 priorities.
   - Do not decide final test coverage.
   - Do not create the final test plan.
   - Do not implement Playwright tests.
   - Do not create or modify Page Objects.
   - Do not modify application source code.

7. Close the browser context when exploration is complete.

## Output

Return concise, structured exploration findings.

### Application Overview

Briefly describe the application and the areas explored.

### Explored User Flows

For each flow provide:

- **Flow:** Name
- **Starting State:** Initial state
- **Steps:** User actions performed
- **UI Elements:** Relevant elements and locator information
- **Observed Result:** What happened
- **Expected Outcome:** Expected user-visible result
- **Validation/Error Behavior:** Relevant behavior discovered
- **Dependencies/Assumptions:** Anything important for testing

### Additional Observations

Document important application states, dependencies, limitations, or areas that may require further investigation.

The calling agent is responsible for converting these findings into test scenarios, prioritizing them, and saving the final test plan.