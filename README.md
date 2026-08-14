# 🎭 Mastering Playwright: Step-by-Step Guide to Building a Scalable Testing Framework with AI and Codegen

## 📋 Overview

Welcome! This comprehensive guide will help you set up your environment before the workshop begins.

Please complete the prerequisites steps **before the workshop** to fully participate in the hands-on exercises.

> **💡 Tip:** If you already have some of the tools installed, you can skip those sections.

---

## 🧰 Prerequisites Setup Guide

### 1️⃣ Git

**Download and install Git:**  
👉 https://git-scm.com/install

**Verify installation:**

```bash
git --version
```

---

### 2️⃣ Node.js (LTS) and npm

**Download and install Node.js (LTS version recommended):**  
👉 https://nodejs.org/en/download

**Verify installation:**

```bash
node -v
npm -v
```

---

### 3️⃣ Clone the Workshop Repository

**Clone the repository that we will use during the workshop:**

```bash
git clone https://github.com/razvanvancea/pw-seetest-workshop
cd pw-seetest-workshop
```

---

### 4️⃣ Install Dependencies & Run a Playwright Test

**Step 1: Install project dependencies**

```bash
npm install
```

**Step 2: Install Playwright browsers**

```bash
npx playwright install --with-deps
```

**Step 3: Run a test to verify everything works**

```bash
npm run test:check
```

**Expected result:**

- ✅ Tests should run successfully

---

### 5️⃣ Visual Studio Code (IDE)

**Download and install Visual Studio Code:**  
👉 https://code.visualstudio.com/download

---

### 6️⃣ VS Code Extensions (Required)

Install the following extensions inside VS Code:

- 🎭 **Playwright Test for VSCode**
- 🤖 **GitHub Copilot** (in newer VSCode versions it comes preinstalled; please double check, you might already have it)
- 💬 **GitHub Copilot Chat** (in newer VSCode versions it comes preinstalled; please double check, you might already have it)

---

### 7️⃣ GitHub Account

**Create a GitHub account (if you don't already have one):**  
👉 https://github.com/

> ℹ️ Make sure you are logged in to GitHub inside VS Code.

---

### 8️⃣ GitHub Copilot Setup

This workshop includes hands-on exercises using AI agents powered by:

- 🤖 **GitHub Copilot**
- 💬 **GitHub Copilot Chat**

**Please ensure the following:**

- ✅ Copilot is enabled in VS Code
- ✅ Copilot Chat is working
- ✅ You have available monthly chat usage (free plan or paid subscription)

---

## ⚠️ Important Requirements

### System Requirements

Please use a **personal laptop without corporate network or security restrictions**.

During the workshop, we will:

- 📦 Install packages locally
- 🧪 Run Playwright tests
- 🤖 Use AI tools (Copilot Chat & agents)
- 💻 Execute commands in terminal

To ensure everything works smoothly, you will need:

- ✅ **Active internet connection**
- ✅ **Permission to install software**
- ✅ **No corporate proxies/firewalls blocking tools**

---

## 🧪 Pre-Workshop Checklist (Highly Recommended)

Before joining the workshop, make sure:

- ✅ You can run `npm run test:check` successfully
- ✅ VS Code is installed and working
- ✅ Copilot Chat responds to prompts
- ✅ You can open and navigate the project

---

## 💡 Optional (Nice to Have)

Not required, but helpful to have some basic knowledge about:

- 📘 JavaScript or TypeScript fundamentals
- 🧪 Automated testing concepts

---

## ❗ If Something Doesn't Work

Don't worry! Here are your options:

- 🙋 You can still follow the workshop
- 👥 You can pair with another participant
- 🆘 I will help troubleshoot during the session

---

## 🙌 Ready to Go?

Looking forward to seeing you at the workshop! If you have any questions before we start, feel free to reach out.

**Let's build amazing tests together!** ✨
