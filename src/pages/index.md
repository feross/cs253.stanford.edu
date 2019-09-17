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

## Instructor

Feross Aboukhadijeh ([feross@cs.stanford.edu](mailto:feross@cs.stanford.edu))

## Teaching Assistant

Esther Goldstein ([egolds@stanford.edu](mailto:egolds@stanford.edu))

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
