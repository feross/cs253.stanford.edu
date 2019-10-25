## Fall 2019

This course is a comprehensive overview of web security. The goal is to build an understanding of the most common web attacks and their countermeasures. Given the pervasive insecurity of the modern web landscape, there is a pressing need for programmers and system designers improve their understanding of web security issues.

We'll be covering the fundamentals as well as the state-of-the-art in web security.

Topics include: Principles of web security, attacks and countermeasures, the browser security model, web app vulnerabilities, injection, denial-of-service, TLS attacks, privacy, fingerprinting, same-origin policy, cross site scripting, authentication, JavaScript security, emerging threats, defense-in-depth, and techniques for writing secure code. Course projects include writing security exploits, defending insecure web apps, and implementing emerging web standards.

## Meeting time and place

Tuesdays and Thursdays, 1:30 PM - 2:50 PM in classroom [380-380Y](https://campus-map.stanford.edu/?srch=380-380Y)

## Course Staff

### Instructor

Feross Aboukhadijeh ([feross@cs.stanford.edu](mailto:feross@cs.stanford.edu))

### Teaching Assistant

Esther Goldstein ([egolds@stanford.edu](mailto:egolds@stanford.edu))

### Office Hours

- Feross: Thursday 3-5pm, Gates 323 (**10/31 is at Gates 415**)
- Esther: Monday 3-5pm, Wednesday 3-5pm, Huang Basement

## Schedule

### Sep 24: What is Web Security? HTML & JavaScript Review

- [Slides](lectures/Lecture%2001.pdf)
- [Video](https://www.youtube.com/watch?v=5JJrJGZ_LjM)
- Reading
  - [Inside look at modern web browser (part 1)](https://developers.google.com/web/updates/2018/09/inside-browser-part1)
  - [Inside look at modern web browser (part 2)](https://developers.google.com/web/updates/2018/09/inside-browser-part2)
  - [Inside look at modern web browser (part 3)](https://developers.google.com/web/updates/2018/09/inside-browser-part3)
  - [A Re-Introduction to JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)

### Sep 26: HTTP, Cookies, Sessions

- [Slides](lectures/Lecture%2002.pdf)
- [Video](https://www.youtube.com/watch?v=zhnQFQ2qFtA)
- Reading
  - [An overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
  - [HTTP Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
  - Skim: [HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

### Oct 01: Session Attacks

- [Slides](lectures/Lecture%2003.pdf)
- [Video](https://www.youtube.com/watch?v=QuhgjXKzfI8)
- Reading
  - [SameSite Cookies Explained](https://web.dev/samesite-cookies-explained/)
  - [Incrementally Better Cookies](https://tools.ietf.org/html/draft-west-cookie-incrementalism-00#section-4.1)
  - [CSRF Is Dead](https://scotthelme.co.uk/csrf-is-dead/)

### Oct 03: Cross-Site Request Forgery, Same Origin Policy

- [Slides](lectures/Lecture%2004.pdf)
- [Video](https://www.youtube.com/watch?v=0-q69vAYSwo)
- Reading
  - [Same Origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)
  - [Cross-Site Request Forgery Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)

### Oct 08: Exceptions to the Same Origin Policy, Cross-Site Script Inclusion

- [Slides](lectures/Lecture%2005.pdf)
- [Video](https://www.youtube.com/watch?v=ud9cVQDte3A)

### Oct 10: Cross-Site Scripting (XSS)

- [Slides](lectures/Lecture%2006.pdf)
- [Video](https://www.youtube.com/watch?v=XTcqlOFhpPI)
- Reading
  - [Cross Site Scripting Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
  - [XSS Filter Evasion Cheat Sheet](https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet)

### Oct 15: Cross-Site Scripting Defenses

- [Slides](lectures/Lecture%2007.pdf)
- [Video](https://www.youtube.com/watch?v=PlXzrtheQGc)
- Reading
  - [Reining in the Web with Content Security Policy](http://research.sidstamm.com/papers/csp-www2010.pdf)
  - [CSP is Dead: Long Live CSP](https://storage.googleapis.com/pub-tools-public-publication-data/pdf/45542.pdf)
  - [Trusted Types](https://developers.google.com/web/updates/2019/02/trusted-types)
  - [Sanitising HTML: the DOM clobbering issue](https://fastmail.blog/2015/12/20/sanitising-html-the-dom-clobbering-issue/)

### Oct 17: Fingerprinting and Privacy on the Web

- **Guest Lecture by Pete Snyder ([Brave Software](https://brave.com))**
- [Slides](lectures/Lecture%2008.pdf)
- [Video](https://www.youtube.com/watch?v=OVh0oHbmla0)
- Reading
  - [Online tracking: A 1-million-site measurement and analysis](https://chromium.woolyss.com/f/OpenWPM-1-million-site-tracking-measurement.pdf)
  - [Most websites don't need to vibrate: A cost-benefit approach to improving browser security](https://arxiv.org/pdf/1708.08510)
  - [Browser Fingerprinting: An Introduction and the Challenges Ahead](https://blog.torproject.org/browser-fingerprinting-introduction-and-challenges-ahead)
  - [WebKit Ad Click Attribution](https://webkit.org/blog/8943/privacy-preserving-ad-click-attribution-for-the-web/)
  - [Protecting Browser State from Web Privacy Attacks](https://crypto.stanford.edu/safecache/sameorigin.pdf)
  - Skim: [WebKit Tracking Prevention Policy](https://webkit.org/tracking-prevention-policy/)

### Oct 22: Denial-of-service, Phishing, Side Channels

- [Slides](lectures/Lecture%2009.pdf)
- [Video](https://www.youtube.com/watch?v=RfC_PzVmk4w)
- Reading
  - [Alice in Warningland: A Large-Scale Field Study of Browser Security](https://www.usenix.org/system/files/conference/usenixsecurity13/sec13-paper_akhawe.pdf)
  - [Clickjacking](http://www.sectheory.com/clickjacking.htm)
  - [Cross-Origin JavaScript Capability Leaks: Detection, Exploitation, and Defense](https://www.adambarth.com/papers/2009/barth-weinberger-song.pdf)

### Oct 24: Code Injection

- [Slides](lectures/Lecture%2010.pdf)
- [Video](https://www.youtube.com/watch?v=mR7yvqWmE0M)
- Reading
  - None

### Oct 29: Transport Layer Security

- Reading
  - [Looking back at the Snowden revelations](https://blog.cryptographyengineering.com/2019/09/24/looking-back-at-the-snowden-revelations/)

### Oct 31: Strict Transport Security and Public Key Pinning

- **Guest Lecture by Emily Stark & Chris Palmer ([Google Chrome](https://www.google.com/chrome/))**
- Reading
  - [DigiNotar on Wikipedia](https://en.wikipedia.org/wiki/DigiNotar)
  - [About Public Key Pinning](https://noncombatant.org/2015/05/01/about-http-public-key-pinning/)
  - [What Is HPKP For?](https://noncombatant.org/2015/11/24/what-is-hpkp-for/)
  - [Rolling out Public Key Pinning with HPKP Reporting](https://developers.google.com/web/updates/2015/09/HPKP-reporting-with-chrome-46)

### Nov 05: Authentication

### Nov 07: WebAuthn

- **Guest Lecture by Lucas Garron ([GitHub](https://github.com))**
- Reading
  - [Guide to Web Authentication](https://webauthn.guide/)

### Nov 12: Server business logic errors, JavaScript security

- Reading
  - [Exploiting Buffer](https://snyk.io/blog/exploiting-buffer/)

### Nov 14: Security in the real-world

- **Guest Lecture by Myles Borins ([Node.js](https://nodejs.org/en/) technical steering committee, [Google](https://www.google.com/))**
- Reading
  - TBD

### Nov 19: Server security: Side Channels, Local HTTP servers

### Nov 21: Browser Architecture, Plugins

- Reading
  - [The Security Architecture of the Chromium Browser](https://seclab.stanford.edu/websec/chromium/chromium-security-architecture.pdf)
  - [Cross-Origin Read Blocking (CORB)](https://chromium.googlesource.com/chromium/src/+/master/services/network/cross_origin_read_blocking_explainer.md)

### Dec 03: TBD

### Dec 05: Writing Secure Code, Ecosystem Issues

- Reading
  - [Backdooring Your JavaScript Using Minifier Bugs](https://diracdeltas.github.io/blog/backdooring-js/)
  - [I’m harvesting credit card numbers and passwords from your site. Here’s how.](https://medium.com/hackernoon/im-harvesting-credit-card-numbers-and-passwords-from-your-site-here-s-how-9a8cb347c5b5)
  - [Major sites running unauthenticated JavaScript on their payment pages](https://shkspr.mobi/blog/2018/11/major-sites-running-unauthenticated-javascript-on-their-payment-pages/)
  - [Statement on event-stream compromise](https://gist.github.com/dominictarr/9fd9c1024c94592bc7268d36b8d83b3a)
  - [Google and Mozilla are failing to support browser extension developers](https://armin.dev/blog/2019/08/supporting-browser-extension-developers/)

## Assignments

### [Assignment 0 – Web Programming Adventure ✈️](assign0)

- Assigned: Tuesday, September 24
- Due: Friday, October 4 at 5:00pm

### [Assignment 1 – Journey to the Dark Side 🌘](assign1)

- Assigned: Tuesday, October 8
- Due: Friday, October 18 at 5:00pm

### [Assignment 2 – Oh What a Tangled Web We Weave 🕸](assign2)

- Assigned: Friday, October 25
- Due: Friday, November 1 at 5:00pm

### Assignment 3 – TBD

- Assigned: Approx. Tuesday, November 5
- Due: Friday, November 15 at 5:00pm

### Assignment 4 – TBD

- Assigned: Approx. Tuesday, November 19
- Due: Friday, November 29 at 5:00pm

## Course Policies

### Communication

We will primarily use [Piazza](https://piazza.com/stanford/fall2019/cs253) for sending out course announcements and answering questions. Please make sure to [sign up](https://piazza.com/stanford/fall2019/cs253).

We use [Gradescope](https://gradescope.com) for assignment submissions. Enroll with the code `97BGZB`.

To submit anonymous feedback to us at any point during the quarter, you may use [this form](https://forms.gle/WqKuxA2m7oycRuTt7).

### Prerequisites

CS 142, or an equivalent amount of web development experience, is a prerequisite. You should also be curious about web security and excited to learn clever attacks, defenses, and techniques for writing secure code.

An introductory security course, such as CS 155, is not a formal prerequisite. The material in this course is focused specifically on the web, while CS 155 covers security more broadly.

### Attendence

Attendance at lectures is mandatory. Do not enroll in this course if you are taking another course that meets at the same time.

### Grading

- Assignments (75%)
- Final Exam (25%)

Each assignment is worth 15%. There is no midterm.

### Final exam

- Tuesday, December 10, 3:30pm - 6:30pm in [200-305](https://campus-map.stanford.edu/?srch=200-305)

### Collaboration Policy

You may discuss the assignments with other students and you may work together to come up with solutions to the problems. If you do so, you must list the name of your collaborators in the submission. Each student must write up their solutions independently.

### Late Submissions

You get three “late days” in total during the quarter. You may use a late day to submit an assignment after the deadline. You can use at most three late days for any single assignment, and you may only use late days in one-day increments (no partial late days).

If you submit an assignment more than 72 hours after the deadline, or if you submit an assignment late after running out of late days, you will receive **no credit** for the submission. Please submit your assignments on time and save your late days for extraordinary situations.

If you have questions about these policies, please ask us.
