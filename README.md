# Timed Quiz App ⏰

![MIT License](https://img.shields.io/badge/License-MIT-green.svg)
![Made with JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-yellow)
![Responsive](https://img.shields.io/badge/Responsive-Yes-blue)
[![Demo](https://img.shields.io/badge/Demo-Click%20here-brightgreen)](https://harshit4847.github.io/quiz-app-vanilla-js/)

---

## 📌 Description

A lightweight multiple-choice quiz built with **HTML, CSS, and vanilla JavaScript**, featuring:
- A per-question 30-second timer
- Instant correct/wrong feedback
- Auto-advance on timeout
- Final score screen with retry

---

## 🚀 Demo

Open `index.html` directly in a browser to run locally (no build step required).

Or try the hosted version:  
👉 [Live Demo](https://harshit4847.github.io/quiz-app-vanilla-js/)

---

## ✨ Features

- ⏱ **30-second countdown** per question with auto-advance on timeout  
- ✅ **Instant feedback**: selected option gets correct/wrong styles  
- 📊 **Final score screen** with retry option  
- 📱 **Responsive UI** using modern CSS

---

## 🛠 Tech Stack

- **HTML**
- **CSS**
- **Vanilla JavaScript** (no frameworks, no backend)

---

## 📂 Project Structure

```
.
├── index.html   # Markup and containers (timer, question, options, score)
├── style.css    # Layout, buttons, and feedback styles (.correct / .wrong)
└── script.js    # Quiz logic, DOM updates, timer, and score handling
```

---

## ⚙️ How It Works

1. Questions are defined in a JavaScript data structure  
2. A countdown starts for each question  
3. On answer or timeout, the state updates and the next question loads  
4. On completion, the **score screen** shows the tally  
5. A **retry button** resets state and timers

---

## 🏁 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Harshit4847/quiz-app-vanilla-js.git
   ```
2. Open the project folder.
3. Run the app by opening `index.html` in any modern browser.
4. Play: Click options to answer → watch the 30s timer → view final score → click Retry to play again.

---

## 🛤 Roadmap

- [ ] Save recent scores/leaderboard using **localStorage**
- [ ] Add **category & difficulty selection** with filtered question pools
- [ ] Disable buttons after selection and reveal correct answer before advancing

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a feature branch
3. Open a Pull Request with a clear description (include screenshots/GIFs for UI changes if possible)

---

## 📜 License

This project is open-source under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

Inspired by timer-based quiz patterns and tutorials that emphasize countdowns, score tracking, and restart flows.

---
