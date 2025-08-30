Title
Timed Quiz App (HTML, CSS, JavaScript)

Description
A lightweight multiple‑choice quiz built with HTML, CSS, and vanilla JavaScript featuring a per‑question 30‑second timer, instant correct/wrong feedback, auto‑advance on timeout, and a final score screen with retry.

Demo
Open index.html directly in a browser to run locally (no build step).

Features
30‑second countdown per question with auto‑advance on timeout.

Instant feedback: selected option gets correct/wrong styles.

Final score screen with retry to restart the quiz.

Simple, responsive UI using modern CSS.

Tech Stack
HTML, CSS, Vanilla JavaScript (no frameworks, no backend).

Project Structure
index.html — markup and containers (timer, question, options, score).

style.css — layout, buttons, and feedback styles (.correct/.wrong).

script.js — quiz logic, DOM updates, timer via setInterval/setTimeout, score handling.

How It Works
Questions are defined in a JavaScript data structure and rendered one at a time.

A countdown starts for each question; on answer or timeout, state updates and the next question loads.

On completion, the score screen shows tally and a retry button resets state and timers.

Getting Started
Clone the repository.

Open index.html in any modern browser.

Click options to answer; watch the 30s timer; view final score; click Retry to play again.

Roadmap
Save recent scores/leaderboard using localStorage.

Category and difficulty selection with filtered question pools.

Disable buttons after selection; reveal correct answer before advancing.

Contributing
Contributions are welcome: fork the repo, create a feature branch, and open a pull request with a clear description and screenshots/GIF if UI changes are involved.

License
Choose and add a license (e.g., MIT) via a LICENSE file for clarity.

Acknowledgements
Inspired by common timer‑based quiz patterns and tutorials that emphasize countdowns, score tracking, and restart flows.
