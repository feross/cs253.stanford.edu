## Assignment 3 – Somebody's Always Watching 👁️

- **Points:** 63
- **Due:** Friday, November 12 at 11:59pm

Welcome to Assignment 3 for [CS 253: Web Security](https://cs253.stanford.edu). ✨

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
git clone https://github.com/stanford-web-security/assign3.git
```

Enter the folder you just created:

```sh
cd assign3
```

Install the necessary local dependencies with `npm`:

```sh
npm install
```

### Start the assignment

Run the local server:

```sh
npm start
```

Your browser should open up to [http://localhost:4001/](http://localhost:4001/) where you can begin the assignment. The page should display the fingerprint `359d-b414-6f2d-fb8c` at the bottom of the page, corresponding to a hash of the placeholder string `"userid"` in the starter code.

**TIP:** If you don't see the hash at the bottom of the page (the page may say `[loading]` instead), then you may have an ad-blocker running. You will likely want to turn off ad-blockers for the [http://localhost:4001/](http://localhost:4001/) site, as they may block some of your intended behavior. We will test all of the grading criteria below with ad-blockers turned off as well.

## Part 1: Coding Portion (36 points)

### Instructions

The only coding file you will need to modify for this assignment is `fingerprint.js`. Your goal is to implement a fingerprinting technique in `fingerprint.js` that generates a unique identifier for a user across multiple browsing sessions (see **Grading** below for the exact conditions that we will be testing your fingerprinting on). The `fingerprint.js` script will be executed on the client side and will have full access to the DOM, including the ambient window, document, and navigator objects.

The return value of your fingerprint function should be a string, which will likely be a hash of several fingerprinting vectors. We have provided a hash function that you can feel free to use (defined in `hash.js`), which takes in any number of arguments (each of which can be a string, number, JSON object, etc.), and returns a hash corresponding to those arguments. You can view the return value of your fingerprint function by visiting [http://localhost:4001/](http://localhost:4001/) in your browser. Feel free to make liberal use of `console.log` statements as well to help with debugging, which you can view using the browser Dev Tools console as usual.

If you choose, you may also extend the server-side code to provide information on HTTP headers (or anything else you think might be helpful for your fingerprinting) to `fingerprint.js`. To do so, modify `your-server-code.js` with any new endpoints that you wish to call, which you can then call in `fingerprint.js`. Note that this is not at all required, and it's definitely possible to receive full credit without modifying the server-side code.

### Requirements

* You must use at least 3 distinct fingerprinting vectors.
* You may NOT use the client's User-Agent as one of your fingerprinting vectors. (In practice, it's often used, but makes this exercise too simple.)
* We will be testing your code on Google Chrome, with ad-blockers turned off.

### Grading

We will grade your fingerprinting technique under the following situations, and will award points if the corresponding criteria for the return value of `fingerprint.js` are met.

* Returns the same identifier (in the latest stable version of Google Chrome) when opening the provided HTML page, closing the tab, opening a new tab, and browsing to the page again. (7 points)
* Returns a different identifier when browsing to the page from a different browser (choose from: Mozilla Firefox, Safari, or Brave), as a proxy for different users. (7 points)
* Returns the same identifier (in Google Chrome) even after clearing browser data (e.g. cookies, cache, localStorage, etc.) in Google Chrome's settings. (7 points)
* Returns the same identifier even after clearing browser data in one additional browser (choose from: Mozilla Firefox, Safari, or Brave). (5 points)
* Returns a different identifier when browsing to the page from Chrome on your device vs. Chrome on another device. In other words, your fingerprinting technique does not merely identify which type of browser (e.g. Chrome vs. Firefox) the user is using. (7 points)
* Returns the same identifier across incognito/private browser mode sessions. (3 points)

## Part 2: Short Answer Questions (24 points, 6 per question)

Your answers should be concise. Each answer should not exceed 300 words. Include your answers in REPORT.md.

1. What fingerprinting methods did you use? Why did you choose them?

2. What limitations does your fingerprinting implementation currently have? In what situations would the fingerprinting fail?

3. Suppose you are working on a privacy-preserving web browser. Describe ONE way to defend against your fingerprinting methods (or explain why your method is unable to be defended against).

   Analyze the _costs_ of your proposed mitigation strategy, in terms of performance, user experience, and web compatibility.

4. Choose ONE of the following browser anti-fingerprinting initiatives. Do they defend against your fingerprinting methods? If so, how could you modify your fingerprinting methods to continue to work despite those new policies?

    * Brave: [Fingerprinting Protections][brave]
    * Chromium: [Intent to Deprecate and Freeze: The User-Agent string][chromium-ua]
    * WebKit (Safari): [Tracking Prevention in WebKit § Anti Fingerprinting][webkit]

## Part 3: Survey (3 points)
Your feedback matters a lot! Please help us improve by answering the survey questions in SURVEY.md. As a reward, enjoy some easy points!

## Submit

### Before you submit

Ensure that the sanity tests pass:

```sh
npm test
```

This command just runs a basic sanity test that ensures your project passes `npm run lint`. If `npm test` doesn't report any errors that doesn't necessarily mean that you've solved every exercise perfectly!

**🌟 PRO TIP: You can automatically fix most lint errors by running:**

```sh
npm run lint-fix
```

### Gradescope

We'll use [Gradescope](https://gradescope.com/) for submissions.

### The moment of truth

When you're ready to submit your work, you'll upload three files to Gradescope: `fingerprint.js`, `REPORT.md`, and `SURVEY.md`. (Note: if you chose to modify the server code in `your-server-code.js` as well, please also submit `your-server-code.js`.)

You should submit early and often! There's no downside to repeatedly submitting your assignment.

## Resources

In addition to the lecture slides from this class, you can use the two references below to get a better idea of common fingerprinting vectors.

 * Electronic Frontier Foundation: [Cover Your Tracks][eff]
 * Inria: [AmIUnique Project][inria]

[brave]: https://github.com/brave/brave-browser/wiki/Fingerprinting-Protections
[chromium-ua]: https://groups.google.com/a/chromium.org/g/blink-dev/c/-2JIRNMWJ7s/m/yHe4tQNLCgAJ
[webkit]: https://webkit.org/tracking-prevention/#anti-fingerprinting
[eff]: https://coveryourtracks.eff.org/
[inria]: https://amiunique.org/fp
