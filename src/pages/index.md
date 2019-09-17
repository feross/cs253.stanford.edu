## Fall 2019

This course is a comprehensive overview of web security. The goal is to build an understanding of the most common web attacks and their countermeasures. Given the pervasive insecurity of the modern web landscape, there is a pressing need for programmers and system designers improve their understanding of web security issues.

We'll be covering the fundamentals as well as the state-of-the-art in web security.

Topics include: Principles of web security, attacks and countermeasures, the browser security model, web app vulnerabilities, injection, denial-of-service, TLS attacks, privacy, fingerprinting, same-origin policy, cross site scripting, authentication, JavaScript security, emerging threats, defense-in-depth, and techniques for writing secure code. Course projects include writing security exploits, defending insecure web apps, and implementing emerging web standards.

## Meeting time and place

Tuesdays and Thursdays, 1:30 PM - 2:50 PM in classroom [380-380Y](https://campus-map.stanford.edu/?srch=380-380Y)

## Communication

We will primarily use [Piazza](#TODO) for sending out course announcements and answering questions. Please make sure to [sign up](#TODO).

To submit anonymous feedback to us at any point during the quarter, you may use [this form](#TODO).

## Prerequisites

CS 142, or an equivalent amount of web development experience, a prerequisite. Another important prerequisite is that you are curious about web security and excited to learn clever attacks, defenses, and techniques for writing secure code.

An introductory security course, such as CS 155, is not a formal prerequisite, but will be very useful to you in this course (and beyond!). The material in this course goes beyond the web security material covered in CS 155.

## Course Staff

### Instructor

Feross Aboukhadijeh ([feross@cs.stanford.edu](mailto:feross@cs.stanford.edu))

### Teaching Assistant

Esther Goldstein ([egolds@stanford.edu](mailto:egolds@stanford.edu))

## Office Hours

TBD

## Schedule

This schedule is tentative and subject to change.

### Week 1 – Intro to Web Security

- Web basics review: HTML, HTTP, JavaScript
- Security overview: Confidentiality, integrity and availability
- The browser security model
- JavaScript sandboxing
- Same-Origin Policy: Origins, iframes, postMessage
- Relaxing the Same-Origin Policy: Cross-Origin Resource Sharing (CORS)
- AMP web applications

### Week 2 – Web Privacy

- Web tracking technologies: Third-party HTTP cookies, HTML5 client-side storage
- Fingerprinting techniques: evercookie, canvas-based methods
- Panopticlick project
- DNS Cookies
- Browser tracking prevention techniques: blocking cookies, Safari Intelligent - Tracking Prevention, Same-Site cookies by default, Tor Browser Bundle techniques

### Week 3 – Client-Side Web Attacks

- Cross-Site Scripting (XSS): stored and reflected XSS
- Cross-Site Request Forgery (CSRF)
- Script injection attacks
- Frame attacks: Clickjacking, malicious postMessage, window.opener
- Phishing, User Interface Redressing
- DNS rebinding
- Plugins: Flash, Java applets

### Week 4 – Server-Side Web Attacks

- Business logic flaws
- Injection attacks: SQL, NoSQL, Shell injection
- Denial of Service (DoS) techniques: distributed DoS attacks, regular expression - attacks, flooding, POST DoS, ping of death, SyN flooding
- User uploaded content: browser mime-type sniffing, file naming, same origin - issues, Hash DOS
- Server fingerprinting

### Week 5 – Web App Defense Techniques

- Content Security Policy (CSP)
- Cross-Origin Resource Sharing (CORS)
- Disabling browser features using Feature Policy
- Mitigating XSS: sanitization, Trusted Types web standard, HTTP only cookies
- Detecting misbehavior: Rate limiting, honey pots
- Preventing web site scraping

### Week 6 – Secure Authentication

- Cryptographic hashes
- Data breach issues: Password salting, bcrypt, scrypt, rainbow tables
- 2nd factor authentication  (Duo)
- Cookies for session management
- Session hijacking attacks and mitigation
- CAPTCHA

### Week 7 – Transport Layer Security

- Secure key exchange: encryption, signatures, certificates, Diffie-Helman
- Introduction to TLS protocol
- TLS attacks: Man-in-the-middle, Strip SSL, POODLE, BEAST, CRIME, BREACH, - Heartbleed
- TLS 1.3 overview, secure cipher suites, forward secrecy
- Defenses: Strict transport security (HSTS), Public Key Pinning (HPKP), - Certificate Transparency, DNS Certification Authority Authorization (DNS CAA)
- Server side Javascript security (Node.js, WordPress, etc.)

### Week 8 – Writing Safe Code

- Defense-in-depth
- Preventative techniques: Penetration testing, Static analysis
- Incident detection and response

### Week 9 – Guest Speakers

- Invited industry speakers will give lectures to the class
- Stay tuned for very exciting guests!

### Week 10 – Emerging Threats

- Side-channel attacks: Spectre and Meltdown on the web
- Cross-Origin Read Blocking (CORB)
- Financial incentives: JavaScript cryptocurrency miners, browser extensions

## Assignments

These assignments are tentative and subject to change.

### Assignment 0 – Web Programming Adventure ✈️ 🌎

- Assigned: Monday, September 23
- Due: Friday, October 5 at 5:00pm

### Assignment 1 – Journey to the Dark Side 🌘

- Assigned: Monday, October 7
- Due: Friday, October 18 at 5:00pm

### Assignment 2 – TBD

- Assigned: Monday, October 21
- Due: Friday, November 1 at 5:00pm

### Assignment 3 – TBD

- Assigned: Monday, November 4
- Due: Friday, November 15 at 5:00pm

### Assignment 4 – TBD

- Assigned: Monday, November 18
- Due: Friday, November 29 at 5:00pm

### Assignment 5 – TBD

- Assigned: Monday, December 2
- Due: Friday, December 13 at 5:00pm

## Course Policies

### Attendence

Attendance at lectures is mandatory. Do not enroll in this course if you are taking another course that meets at the same time.

### Grading

Each of the assignments is worth an equal portion (16.6%) your grade. There is no midterm or final exam.

### Collaboration Policy

You may discuss the assignments with other students and you may work together to come up with solutions to the problems. If you do so, you must list the name of your collaborators in the submission. Each student must write up their solutions independently.

### Late Submissions

You get three “late days” in total during the quarter. You may use a late day to submit an assignment after the deadline. You can use at most three late days for any single assignment, and you may only use late days in one-day increments (no partial late days).

If you submit an assignment more than 72 hours after the deadline, or if you submit an assignment late after running out of late days, you will receive **no credit** for the submission. Please submit your assignments on time and save your late days for extraordinary situations.

If you have questions about these policies, please ask us.
