# TAI Shop — Playwright Test Plan

## Overview and scope

Cover the three essential purchase-journey flows observed on [tai-shop.razvanvancea.ro](https://tai-shop.razvanvancea.ro): sign in, select and cart a product, and complete checkout. The site identifies itself as a QA sandbox; no real orders or payments are processed.

**Assumptions:** The displayed admin test account is available. Start each scenario in the state listed; use a fresh cart for catalog and checkout scenarios. Checkout uses the default payment option.

## Scenarios

### 1. Sign in to access the shop

**Priority:** P0  
**Type:** Functional  
**Starting state:** Sign-in page; use the sandbox credentials displayed there.

**Risk rationale:** Signing in is the gate to all shopping workflows; failure blocks every customer from proceeding.

**Risk factors:** Business impact—high; user impact—high (shopping is inaccessible); technical complexity—medium (authentication/session); failure likelihood—medium; recovery cost—medium (users can retry, but remain blocked).

**Steps and expected results:**
1. Enter the displayed email and password, then select **Sign In**.
2. Verify the product catalog is shown and **Log Out** is available.

**Success:** The account reaches the authenticated catalog.  
**Failure:** Sign-in is rejected or the catalog remains inaccessible.

### 2. Inspect a product and add it to the cart

**Priority:** P1  
**Type:** Functional  
**Starting state:** Signed in on the catalog with an empty cart.

**Risk rationale:** Product selection and cart updates are required for purchase, but users can retry or choose another item if this recoverable flow fails.

**Risk factors:** Business impact—high; user impact—high; technical complexity—medium (catalog rendering and cart state); failure likelihood—medium; recovery cost—low (the user can retry).

**Steps and expected results:**
1. Open the first product and verify its name, price, stock status, and details.
2. Return to the catalog and select **ADD TO CART** for that product.
3. Verify the cart contains the selected product, the total matches its price, and **PROCEED TO CHECKOUT** is enabled.

**Success:** The selected product and accurate total appear in the cart.  
**Failure:** Product details are unavailable, the item is missing, or the total/action state is incorrect.

### 3. Validate shipping details and place a sandbox order

**Priority:** P0  
**Type:** Functional / Negative  
**Starting state:** Signed in with one $9.99 item in the cart.

**Risk rationale:** Checkout is the purchase-completion workflow; a failure prevents order placement. Missing-field validation protects against incomplete submissions.

**Risk factors:** Business impact—high; user impact—high; technical complexity—high (cart state, required form fields, and order confirmation); failure likelihood—medium; recovery cost—medium (sandbox orders are recoverable, but real checkout failures can lose or duplicate an order).

**Steps and expected results:**
1. Select **PROCEED TO CHECKOUT** and submit with shipping fields empty. Verify checkout remains on the shipping step and no confirmation appears.
2. Fill phone, street, city, and country; keep the default payment option and select **Place Order**.
3. Verify **Order Confirmed!** and the confirmation’s shipping address, phone, and amount. For the observed $9.99 item, the total is $24.99 including $15 shipping.

**Success:** Required details block an empty submission, and valid details produce a confirmation with the expected order data.  
**Failure:** Incomplete details advance to confirmation, or valid details fail to produce an accurate confirmation.

## Coverage

- **P0:** Sign-in/access; checkout, required-field validation, and order confirmation.
- **P1:** Product details and cart update.
- **P2/P3:** None; limited to the three highest-value observed flows.
- **Automation:** All three flows are repeatable with the visible sandbox account and deterministic product/order data.

## Planning notes

The site disclosed a QA sandbox and showed account credentials on its sign-in page. Product detail pages are separate from the catalog; cart addition is available on the catalog. The tested checkout remained on its shipping step after a blank submission and showed a confirmation after valid shipping details.
