
# Timed Quiz App (HTML, CSS, JavaScript)

## 📌 Description
A lightweight multiple-choice quiz built with **HTML, CSS, and vanilla JavaScript** featuring a per-question 30-second timer, instant correct/wrong feedback, auto-advance on timeout, and a final score screen with retry.

## 🚀 Demo
Open `index.html` directly in a browser to run locally (no build step required).

## ✨ Features
- ⏱ **30-second countdown** per question with auto-advance on timeout.  
- ✅ **Instant feedback**: selected option gets correct/wrong styles.  
- 📊 **Final score screen** with retry option.  
- 📱 **Responsive UI** using modern CSS.

## 🛠 Tech Stack
- **HTML**
- **CSS**
- **Vanilla JavaScript** (no frameworks, no backend)

## 📂 Project Structure
```

.
├── index.html   # Markup and containers (timer, question, options, score)
├── style.css    # Layout, buttons, and feedback styles (.correct / .wrong)
└── script.js    # Quiz logic, DOM updates, timer, and score handling

````

## ⚙️ How It Works
1. Questions are defined in a JavaScript data structure.  
2. A countdown starts for each question.  
3. On answer or timeout, the state updates and the next question loads.  
4. On completion, the **score screen** shows the tally.  
5. A **retry button** resets state and timers.

## 🏁 Getting Started
1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/timed-quiz-app.git
````

2. Open the project folder.
3. Run the app by opening `index.html` in any modern browser.
4. Click options to answer → watch the 30s timer → view final score → click Retry to play again.

or click on https://harshit4847.github.io/quiz-app-vanilla-js/

## 🛤 Roadmap

* [ ] Save recent scores/leaderboard using **localStorage**.
* [ ] Add **category & difficulty selection** with filtered question pools.
* [ ] Disable buttons after selection and reveal correct answer before advancing.

## 🤝 Contributing

Contributions are welcome!

* Fork the repo
* Create a feature branch
* Open a Pull Request with a clear description (include screenshots/GIFs for UI changes if possible).

## 📜 License

This project is open-source. Choose a license (e.g., **MIT**) and add it in a `LICENSE` file.

## 🙏 Acknowledgements

Inspired by common timer-based quiz patterns and tutorials that emphasize countdowns, score tracking, and restart flows.

```

---

Do you want me to also **add badges** (like MIT license, made with JS, etc.) at the top of the README for a more professional GitHub look?
```
