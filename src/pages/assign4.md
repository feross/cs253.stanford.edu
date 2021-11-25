## Assignment 4 – Swiss Cheese Security 🧀

- **Points:** 45
- **Due:** Friday, December 3 at 11:59pm

Welcome to Assignment 4 for [CS 253: Web Security](https://cs253.stanford.edu). ✨

## Prepare

### Check your Node.js version

You should already have Node.js installed from previous assignments. For this assignment, it's highly recommended to use Node.js 16. Open your terminal and run this command to confirm you're running some version 16.x.x:

```sh
node --version
```

If not, you can install [Node.js](https://nodejs.org/en/) from the official site.

### Get the starter code

Run this command to clone the code with `git`:

```sh
git clone https://github.com/stanford-web-security/assign4.git
```

Enter the folder you just created:

```sh
cd assign4
```

Install the necessary local dependencies with `npm`:

```sh
npm install
```

## Background

In this assignment, you will learn how web application vulnerabilities can be exploited and how to defend against these attacks. This assignment has a bit of overlap with the XSS challenges in [Assignment 2](/assign2), but goes beyond XSS and offers you the chance to try a variety of other attacks.

The best way to learn things is by doing, so you'll get a chance to do some real [penetration testing](https://en.wikipedia.org/wiki/Penetration_test), actually exploiting a real application. Specifically, you'll learn the following:

- How an application can be attacked using common web security vulnerabilities, like cross-site scripting vulnerabilities (XSS) and cross-site request forgery (XSRF).
- How to find, fix, and avoid these common vulnerabilities and other bugs that have a security impact, such as denial-of-service, information disclosure, or remote code execution.

This assignment is built around **Gruyere** /ɡruːˈjɛər/ - a small, cheesy web application that allows its users to publish snippets of text and store assorted files. "Unfortunately", Gruyere has multiple security bugs ranging from cross-site scripting and cross-site request forgery, to information disclosure, denial of service, and remote code execution. The goal of this assignment is to guide you through discovering some of these bugs and learning ways to fix them both in Gruyere and in general.

## Types of vulnerabilities

The assignment is organized by types of vulnerabilities. In each section, you'll find a brief description of a vulnerability and a task to find an instance of that vulnerability in Gruyere. Your job is to play the role of a malicious hacker and find and exploit the security bugs. In this assignment, you'll use both black-box hacking and white-box hacking.

In **black-box hacking**, you try to find security bugs by experimenting with the application and manipulating input fields and URL parameters, trying to cause application errors, and looking at the HTTP requests and responses to guess server behavior. You do not have access to the source code, although understanding how to view source and being able to view http headers is valuable. Using a web proxy like Burp or ZAP may be helpful in creating or modifying requests.

In **white-box hacking**, you have access to the source code and can use automated or manual analysis to identify bugs. You can treat Gruyere as if it's open source: you can read through the source code to try to find bugs. Gruyere is written in Python, so some familiarity with Python can be helpful. However, the security vulnerabilities covered are not Python-specific and you can do most of the assignment without even looking at the code. You can run a local instance of Gruyere to assist in your hacking: for example, you can create an administrator account on your local instance to learn how administrative features work and then apply that knowledge to the instance you want to hack, though again, this is not required.

Security researchers use both hacking techniques, often in combination, in real life.

## Part 1: Hacking (42 points)

The assignment is split into sections for each type of attack. For each section, you'll learn about a new type of attack and try using it against the Gruyere web server.

Each section has one or more challenges. If you get stuck on a challenge, there are hints provided inline. If you get stuck for **more than 10 minutes** on a particular challenge, then you are free to expand the solution (under the title "Exploit and Fix") which is provided for you inline.

When coming up with an attack, there's usually an amazing aha moment when you finally figure out the "trick"; if you look at the solution before you've figured it out yourself you'll be robbed of the best part. But we also don't want you to get stuck forever, so **you are free to look at the solution after you've been stuck on a given challenge for 10 minutes**.

Once you've come up with a solution that works, read the official solution and compare with yours. There's lots of useful information about defense techniques discussed along with the solution (under the title "Exploit and Fix") and throughout the Gruyere codelab.

### Access the assignment

To access Gruyere, go to [https://google-gruyere.appspot.com/start](https://google-gruyere.appspot.com/start).

AppEngine will start a new instance of Gruyere for you, assign it a unique id and redirect you to `https://google-gruyere.appspot.com/123/` (where 123 is your unique id). Each instance of Gruyere is "sandboxed" from the other instances so your instance won't be affected by anyone else using Gruyere. You'll need to use your unique id instead of 123 in all the examples.

The Gruyere source code is available online so that you can use it for white-box hacking. You can browse the source code at https://google-gruyere.appspot.com/code/ or download all the files from https://google-gruyere.appspot.com/gruyere-code.zip. If want to debug it or actually try fixing the bugs, you can download it and run it locally. **You do not need to run Gruyere locally in order to do the assignment.**

### What to submit

Include your solution to each challenge in `REPORT.md`. It's okay if your solution matches the official solution - just include it anyway.

## Part 2: Survey (3 points)
Your feedback matters a lot! Please help us improve by answering the survey questions in SURVEY.md. As a reward, enjoy some easy points!

## Submit

### Before you submit

Ensure that the sanity tests pass:

```sh
npm test
```

This command just runs a basic sanity test that ensures your project passes `npm run lint`. If `npm test` doesn't report any errors that doesn't necessarily mean that you've solved every exercise perfectly!

**🌟 PRO TIP: You can automatically fix some lint errors by running:**

```sh
npm run lint-fix
```

### Gradescope

We'll use [Gradescope](https://gradescope.com/) for submissions.

### The moment of truth

When you're ready to submit your work, you'll upload two files to Gradescope: `REPORT.md` and `SURVEY.md`.

You should submit early and often! There's no downside to repeatedly submitting your assignment.
