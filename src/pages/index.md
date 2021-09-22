## Fall 2021

This course is a comprehensive overview of web security. The goal is to build an understanding of the most common web attacks and their countermeasures. Given the pervasive insecurity of the modern web landscape, there is a pressing need for programmers and system designers to improve their understanding of web security issues.

We'll be covering the fundamentals as well as the state-of-the-art in web security.

Topics include: Principles of web security, attacks and countermeasures, the browser security model, web app vulnerabilities, injection, denial-of-service, TLS attacks, privacy, fingerprinting, same-origin policy, cross site scripting, authentication, JavaScript security, emerging threats, defense-in-depth, and techniques for writing secure code. Course projects include writing security exploits, defending insecure web apps, and implementing emerging web standards.

## Meeting time and place

Tuesdays and Thursdays, 1:30 PM - 2:50 PM in classroom [320-105](http://campus-map.stanford.edu/?srch=320-105)

## Course Staff

To email the staff, use: [cs253-aut2122-staff@lists.stanford.edu](mailto:cs253-aut2122-staff@lists.stanford.edu).

### Instructor

- Feross Aboukhadijeh ([feross@cs.stanford.edu](mailto:feross@cs.stanford.edu))

### Teaching Assistants

- Anna Zeng ([aszeng@stanford.edu](mailto:aszeng@stanford.edu))
- Timothy Gu ([timothygu@stanford.edu](mailto:timothygu@stanford.edu))

### Office Hours

- Feross: Thursday 4-6pm, Location TBD
- Anna: Tuesday, Thursday 11:15am-1:15pm, Location TBD
- Timothy: Wednesday 1:30-3:30pm, Location TBD

## Course Policies

### Communication

We will primarily use [Ed](https://edstem.org/us/courses/14325/discussion/) for sending out course announcements and answering questions.

We use [Gradescope](https://gradescope.com) for assignment submissions. Enroll with the code `ZR5E5Z`.

To submit anonymous feedback to Feross at any point during the quarter, you may use [this form](https://forms.gle/YAJemesDjnJmagFF8).

### Prerequisites

CS 142, or an equivalent amount of web development experience, is a prerequisite. You should also be curious about web security and excited to learn clever attacks, defenses, and techniques for writing secure code.

An introductory security course, such as CS 155, is not a formal prerequisite. The material in this course is focused specifically on the web, while CS 155 covers security more broadly.

### Attendence

Attendance at lectures is mandatory. Do not enroll in this course if you are taking another course that meets at the same time.

### Grading

- Assignments (75%)
- Final Exam (25%)

Each assignment is worth 15%. There is no midterm.

### Final Exam

- Tuesday, December 7, 3:30pm - 6:30pm

### Previous Final Exams

- [Final Exam 2019](cs253-final-2019.pdf) ([Solutions](cs253-final-2019-solutions.pdf))
- [More Sample Final Exam Questions](cs253-sample-final.pdf) ([Solutions](cs253-sample-final-solutions.pdf))

### Collaboration Policy

You may discuss the assignments with other students but do not share code or attack inputs. When designing an attack, there's usually an amazing aha moment when you finally figure out the "trick"; if someone tells you the solution before you've figured it out yourself you'll be robbed of the best part of this course. If discuss an assignment with another student, you must list the name of your collaborators in the submission. Each student must write up their solutions independently.

### Late Submissions

You get three “late days” in total during the quarter. You may use a late day to submit an assignment after the deadline. You can use at most three late days for any single assignment, and you may only use late days in one-day increments (no partial late days).

If you submit an assignment more than 72 hours after the deadline, or if you submit an assignment late after running out of late days, you will receive **no credit** for the submission. Please submit your assignments on time and save your late days for extraordinary situations.

If you have questions about these policies, please ask us.


## Schedule

---

## _Part 1: Basics_

### Sep 21: What is Web Security? HTML & JavaScript Review

<!-- - [Slides](lectures/Lecture%2001.pdf) -->
<!-- - [Video](https://www.youtube.com/watch?v=5JJrJGZ_LjM) -->
- Reading
  - [Inside look at modern web browser (part 1)](https://developers.google.com/web/updates/2018/09/inside-browser-part1)
  - [Inside look at modern web browser (part 2)](https://developers.google.com/web/updates/2018/09/inside-browser-part2)
  - [Inside look at modern web browser (part 3)](https://developers.google.com/web/updates/2018/09/inside-browser-part3)
  - [A Re-Introduction to JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)

### Sep 23: HTTP, Cookies, Sessions

<!-- - [Slides](lectures/Lecture%2002.pdf) -->
<!-- - [Video](https://www.youtube.com/watch?v=zhnQFQ2qFtA) -->
- Reading
  - [An overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
  - [HTTP Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
  - Skim: [HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

---

## _Part 2: Client-side attacks and defenses_

### Sep 28: Session Attacks

<!-- - [Slides](lectures/Lecture%2003.pdf) -->
<!-- - [Video](https://www.youtube.com/watch?v=QuhgjXKzfI8) -->
- Reading
  - [SameSite Cookies Explained](https://web.dev/samesite-cookies-explained/)
  - [Incrementally Better Cookies](https://tools.ietf.org/html/draft-west-cookie-incrementalism-00#section-4.1)
  - [CSRF Is Dead](https://scotthelme.co.uk/csrf-is-dead/)

### Sep 30: Cross-Site Request Forgery, Same Origin Policy

<!-- - [Slides](lectures/Lecture%2004.pdf) -->
<!-- - [Video](https://www.youtube.com/watch?v=0-q69vAYSwo) -->
- Reading
  - [Same Origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)
  - [Cross-Site Request Forgery Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)

### Oct 05: Exceptions to the Same Origin Policy, Cross-Site Script Inclusion

<!-- - [Slides](lectures/Lecture%2005.pdf) -->
<!-- - [Video](https://www.youtube.com/watch?v=ud9cVQDte3A) -->
- Reading
  - None

### Oct 07: Cross-Site Scripting (XSS)

<!-- - [Slides](lectures/Lecture%2006.pdf) -->
<!-- - [Video](https://www.youtube.com/watch?v=XTcqlOFhpPI) -->
- Reading
  - [Cross Site Scripting Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
  - [XSS Filter Evasion Cheat Sheet](https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet)

### Oct 12: Cross-Site Scripting Defenses

<!-- - [Slides](lectures/Lecture%2007.pdf) -->
<!-- - [Video](https://www.youtube.com/watch?v=PlXzrtheQGc) -->
- Reading
  - [Reining in the Web with Content Security Policy](http://research.sidstamm.com/papers/csp-www2010.pdf)
  - [CSP is Dead: Long Live CSP](https://storage.googleapis.com/pub-tools-public-publication-data/pdf/45542.pdf)
  - [Trusted Types](https://developers.google.com/web/updates/2019/02/trusted-types)
  - [Sanitising HTML: the DOM clobbering issue](https://fastmail.blog/2015/12/20/sanitising-html-the-dom-clobbering-issue/)

### Oct 14: Denial-of-service, Phishing, Side Channels

<!-- - [Slides](lectures/Lecture%2009.pdf) -->
<!-- - [Video](https://www.youtube.com/watch?v=RfC_PzVmk4w) -->
- Reading
  - [Alice in Warningland: A Large-Scale Field Study of Browser Security](https://www.usenix.org/system/files/conference/usenixsecurity13/sec13-paper_akhawe.pdf)
  - [Clickjacking](http://www.sectheory.com/clickjacking.htm)
  - [Cross-Origin JavaScript Capability Leaks: Detection, Exploitation, and Defense](https://www.adambarth.com/papers/2009/barth-weinberger-song.pdf)

### Oct 19: Fingerprinting and Privacy on the Web

<!-- - **Guest Lecture by Pete Snyder ([Brave Software](https://brave.com))** -->
<!-- - [Slides](lectures/Lecture%2008.pdf) -->
<!-- - [Video](https://www.youtube.com/watch?v=OVh0oHbmla0) -->
- Reading
  - [Online tracking: A 1-million-site measurement and analysis](https://www.cs.princeton.edu/~arvindn/publications/OpenWPM_1_million_site_tracking_measurement.pdf)
  - [Most websites don't need to vibrate: A cost-benefit approach to improving browser security](https://arxiv.org/pdf/1708.08510)
  - [Browser Fingerprinting: An Introduction and the Challenges Ahead](https://blog.torproject.org/browser-fingerprinting-introduction-and-challenges-ahead)
  - [WebKit Ad Click Attribution](https://webkit.org/blog/8943/privacy-preserving-ad-click-attribution-for-the-web/)
  - [Protecting Browser State from Web Privacy Attacks](https://crypto.stanford.edu/safecache/sameorigin.pdf)
  - Skim: [WebKit Tracking Prevention Policy](https://webkit.org/tracking-prevention-policy/)

---

## _Part 3: Server-side attacks and defenses_

### Oct 21: Code Injection

<!-- - [Slides](lectures/Lecture%2010.pdf) -->
<!-- - [Video](https://www.youtube.com/watch?v=mR7yvqWmE0M) -->
- Reading
  - None

### Oct 26: Server security, Safe coding practices

<!-- - [Slides](lectures/Lecture%2017.pdf) -->
<!-- - [Video](https://www.youtube.com/watch?v=Ox15IMOvWfA) -->
- Reading
  - [Exploiting Buffer](https://snyk.io/blog/exploiting-buffer/)

### Oct 28: Transport Layer Security

- **Guest Lecture by [Dan Boneh](https://crypto.stanford.edu/~dabo/) ([Stanford](https://stanford.edu))**
<!-- - [Slides](lectures/Lecture%2011.pdf) -->
<!-- - [Video](https://www.youtube.com/watch?v=S8-rnPHjyxs) -->
- Reading
  - [Looking back at the Snowden revelations](https://blog.cryptographyengineering.com/2019/09/24/looking-back-at-the-snowden-revelations/)
  - [HTTPS encryption on the web](https://transparencyreport.google.com/https/overview)

### Nov 02: No class

### Nov 04: HTTPS in the Real World

<!-- - **Guest Lecture by Emily Stark & Chris Palmer ([Google Chrome](https://www.google.com/chrome/))** -->
<!-- - [Slides](lectures/Lecture%2012.pdf) -->
<!-- - [Video](https://www.youtube.com/watch?v=jN26N8QS5Os) -->
- Reading
  - [DigiNotar on Wikipedia](https://en.wikipedia.org/wiki/DigiNotar)
  - [About Public Key Pinning](https://noncombatant.org/2015/05/01/about-http-public-key-pinning/)
  - [What Is HPKP For?](https://noncombatant.org/2015/11/24/what-is-hpkp-for/)
  - [Rolling out Public Key Pinning with HPKP Reporting](https://developers.google.com/web/updates/2015/09/HPKP-reporting-with-chrome-46)

---

## _Part 4: User Authentication_

### Nov 09: Authentication

<!-- - [Slides](lectures/Lecture%2013.pdf) -->
<!-- - [Video](https://www.youtube.com/watch?v=lgmGSYwJc20) -->
- Reading
  - [Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)

### Nov 11: WebAuthn - The future of user authentication on the web

- **Guest Lecture by [Lucas Garron](https://garron.net/) ([GitHub](https://github.com))**
<!-- - [Slides](lectures/Lecture%2014.pdf) -->
<!-- - [Video](https://www.youtube.com/watch?v=_nPk2HgNpjE) -->
- Reading
  - [Guide to Web Authentication](https://webauthn.guide/)

---

## _Part 5: Web security in the real world_

### Nov 16: Local HTTP server security

<!-- - [Slides](lectures/Lecture%2018.pdf) -->
<!-- - [Video](https://www.youtube.com/watch?v=wLgcb4jZwGM) -->
- Reading
  - None

### Nov 18: Managing security concerns in a large Open Source project

- **Guest Lecture by [Yan Zhu](https://blog.azuki.vip/) ([Brave](https://brave.com))**
<!-- - [Slides](https://kni.sh/oss-security) -->
<!-- - [Video](https://www.youtube.com/watch?v=lX6KLL0sVTU) -->
- Reading
  - None

### Nov 30: DNS rebinding attacks

<!-- - [Slides](lectures/Lecture%2019.pdf) -->
<!-- - [Video](https://www.youtube.com/watch?v=bZW_55LIz0w) -->
- Reading
  - [Millions of Streaming Devices Are Vulnerable to a Retro Web Attack](https://www.wired.com/story/chromecast-roku-sonos-dns-rebinding-vulnerability/)
  - [Protecting Browsers from DNS Rebinding Attacks](https://crypto.stanford.edu/dns/dns-rebinding.pdf)

### Dec 02: Browser architecture, Writing secure code

<!-- - [Slides](lectures/Lecture%2020.pdf) -->
<!-- - [Video](https://www.youtube.com/watch?v=5aguccOpGes) -->
- Reading
  - [The Security Architecture of the Chromium Browser](https://seclab.stanford.edu/websec/chromium/chromium-security-architecture.pdf)
  - [Cross-Origin Read Blocking (CORB) primer](https://www.chromium.org/Home/chromium-security/corb-for-developers)
  - Skim: [Cross-Origin Read Blocking (CORB) explainer](https://chromium.googlesource.com/chromium/src/+/master/services/network/cross_origin_read_blocking_explainer.md)
  - [Backdooring Your JavaScript Using Minifier Bugs](https://diracdeltas.github.io/blog/backdooring-js/)
  - [I’m harvesting credit card numbers and passwords from your site. Here’s how.](https://medium.com/hackernoon/im-harvesting-credit-card-numbers-and-passwords-from-your-site-here-s-how-9a8cb347c5b5)
  - [Major sites running unauthenticated JavaScript on their payment pages](https://shkspr.mobi/blog/2018/11/major-sites-running-unauthenticated-javascript-on-their-payment-pages/)

## Assignments

### [Assignment 0 – Web Programming Adventure ✈️](assign0)

- Assigned: Tuesday, September 21
- Due: Wednesday, September 29 at 5:00pm

### Assignment 1
<!-- ### [Assignment 1 – Journey to the Dark Side 🌘](assign1) -->

- Assigned: Tuesday, October 5
- Due: Friday, October 15 at 5:00pm

### Assignment 2
<!-- ### [Assignment 2 – Oh What a Tangled Web We Weave 🕸](assign2) -->

- Assigned: Saturday, October 19
- Due: Friday, October 29 at 5:00pm

### Assignment 3

- Assigned: Tuesday, November 2
- Due: Friday, November 12 at 5:00pm

### Assignment 4

- Assigned: Tuesday, November 16
- Due: Monday, November 29 at 5:00pm

<br>
<br>
<br>

Website design by [Feross Aboukhadijeh](https://feross.org).
