# Pralay - AI-Powered Web Assistant 🌐🤖

![GitHub stars](https://img.shields.io/github/stars/vedantdevs/pralay?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/vedantdevs/pralay?style=for-the-badge)

## 🚀 About Pralay
**Pralay** is a smart web-based virtual assistant that helps users automate tasks, search the web, and interact using voice commands. Powered by JavaScript, it enhances productivity and efficiency with seamless voice control.

## ⚡ Features
- 🎙️ **Voice & Text Command Support** - Talk or type to interact with Pralay.
- 🌍 **Web Automation** - Open websites, search Google, and get instant results.
- ⏳ **Time & Date Functions** - Ask for the current time and date.
- 🔖 **Predefined Commands** - Quick access to Google, YouTube, Gmail, and more.
- 🔍 **Web Search** - Directly search Google, Wikipedia, and other platforms.
- 🎵 **Entertainment Access** - Open Spotify, news sites, and streaming services.
- 🛒 **E-commerce Shortcuts** - Instantly open Amazon, Flipkart, and other stores.
- 📆 **Calendar & Productivity** - Open Google Calendar and task management sites.

## 📸 Screenshot  
> A glimpse of Pralay in action!  

<p align="center">
  <img src="https://raw.githubusercontent.com/vedantdevs/pralay/main/pralay.png" width="70%" alt="Pralay in Action">
</p>

## 🛠️ Installation
```bash
# Clone the repository
git clone https://github.com/vedantdevs/pralay.git

# Navigate to the project directory
cd pralay
```

## 🚀 Usage
1. Open `index.html` in a browser.
2. Click the **Talk** button to activate voice recognition.
3. Speak commands like "Open Google" or "What's the time?".

## 📝 Code Overview
Pralay is powered by a JavaScript script that utilizes the **Web Speech API** for speech recognition and synthesis. Commands are processed dynamically, allowing quick responses and actions.

### 🔧 Key File: `app.js`
```javascript
const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

// Voice synthesis function
function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    window.speechSynthesis.speak(text_speak);
}

// Recognizing voice commands
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    content.textContent = transcript;
    processCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => recognition.start());
```

## 📌 Future Plans
- ✅ Expand voice command functionalities.
- ✅ Integrate AI-powered responses.
- ✅ Add multilingual support.

## 🤝 Contributing
Want to improve Pralay? Feel free to fork the repository, create a new branch, and submit a pull request!

## 📝 License
This project is licensed under the **MIT License**.

---
🔗 Follow me on [GitHub](https://github.com/vedantdevs) for more awesome projects!

