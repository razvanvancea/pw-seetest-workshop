---
name: ci-test-optimization
description: Reviews and optimizes Playwright CI pipelines for scalability, reliability, execution speed, and efficient resource usage.
---

# Purpose

Use this skill to optimize Playwright test execution in CI environments.

Focus on:
- execution speed
- stability
- scalability
- parallelization
- infrastructure efficiency
- pipeline reliability

---

# When To Use

Use this skill when:
- CI pipelines become slow
- flaky tests impact deployments
- parallel execution issues appear
- Playwright suites scale significantly
- retry counts increase
- browser installation becomes inefficient
- GitHub Actions optimization is needed

---

# Optimization Areas

## Parallelization

Review:
- worker configuration
- sharding strategy
- test balancing
- serial bottlenecks

Recommend:
- optimal worker counts
- balanced suite distribution
- removal of unnecessary serial execution

---

## Retry Strategy

Detect:
- retry abuse
- retries masking instability
- excessive global retries

Recommend:
- root-cause fixes before retry increases
- targeted retries only when justified

---

## Browser Optimization

Review:
- browser installation strategy
- dependency caching
- unnecessary browser downloads
- cross-browser execution cost

Recommend:
- caching improvements
- optimized browser matrices
- minimal install overhead

---

## Test Architecture Risks

Detect:
- oversized beforeAll usage
- shared state dependencies
- non-isolated tests
- environment pollution
- order-dependent execution

---

## GitHub Actions Optimization

Review:
- workflow structure
- caching usage
- artifact handling
- matrix configuration
- job parallelization
- unnecessary pipeline steps

---

# Important Rules

- Prioritize reliability before speed
- Avoid optimizations that reduce determinism
- Prefer isolated tests over shared setup complexity
- Minimize unnecessary retries
- Reduce CI cost without sacrificing coverage

---

# CI Best Practices

Encourage:
- test independence
- deterministic execution
- trace collection on failure
- artifact retention policies
- balanced sharding
- selective test execution where appropriate

---

# Output Expectations

Provide:

1. Bottleneck analysis
2. Scalability risks
3. Stability risks
4. Recommended optimizations
5. Expected impact
6. Priority level

Recommendations should be practical, measurable, and maintainable.
