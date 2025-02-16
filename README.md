 Smart Video Summarizer – README
📖 Project Overview
The Smart Video Summarizer is an AI-powered tool that allows users to summarize YouTube videos and uploaded media files (MP3, MP4, text). The project consists of:

A Chrome Extension – Summarizes a specific part of a YouTube video using a slider.
A Web Platform – Summarizes entire YouTube videos or uploaded files with premium features.
AI-Powered Processing – Uses OpenAI Whisper API for transcription and Hugging Face API for text summarization.
⚙️ Prerequisites
Before setting up the project, ensure you have the following installed:
✅ Node.js (v16 or higher) – Download Here
✅ Git – Download Here
✅ Chrome Browser (for testing the extension)
✅ API Keys:

Hugging Face API Key (for summarization) – Get it here
OpenAI Whisper API Key (for transcription) – Get it here
📥 Installation Guide
🔹 Step 1: Clone the Repository
Open a terminal and run:

sh
Copy
Edit
git clone https://github.com/YOUR_GITHUB_USERNAME/Smart-Video-Summarizer.git
cd Smart-Video-Summarizer
🔹 Step 2: Install Dependencies
For the web platform:

sh
Copy
Edit
cd web
npm install
For the Chrome extension (if applicable):

sh
Copy
Edit
cd extension
npm install
🖥️ Running the Web Application
🔹 Step 3: Add API Keys
Navigate to the web/src/config.js file and enter your API keys:
javascript
Copy
Edit
export const HUGGING_FACE_API_KEY = "YOUR_HUGGING_FACE_API_KEY";
export const OPENAI_WHISPER_API_KEY = "YOUR_OPENAI_WHISPER_API_KEY";
🔹 Step 4: Start the Development Server
Run the following command in the web directory:

sh
Copy
Edit
npm start
This will start a local server, and you can access the website at:
🔗 http://localhost:3000/

🛠️ Setting Up the Chrome Extension
🔹 Step 1: Load the Extension into Chrome
1️⃣ Open Google Chrome and go to chrome://extensions/
2️⃣ Enable Developer Mode (toggle in the top-right corner)
3️⃣ Click "Load Unpacked"
4️⃣ Select the extension folder from the cloned repository

🔹 Step 2: Use the Extension
Open a YouTube video
Click on the Smart Video Summarizer Extension
Use the slider to select a time range and generate a summary
Click "Summarize Full Video" to redirect to the web platform
🧪 Testing the APIs
1️⃣ Test Hugging Face Summarization API
Run this in your terminal (replace with your API key):

sh
Copy
Edit
curl -X POST "https://api-inference.huggingface.co/models/facebook/bart-large-cnn" \
     -H "Authorization: Bearer YOUR_HUGGING_FACE_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{"inputs": "Long text to summarize"}'
2️⃣ Test OpenAI Whisper API for Transcription
Run this in your terminal (replace with your API key):

sh
Copy
Edit
curl -X POST "https://api.openai.com/v1/audio/transcriptions" \
     -H "Authorization: Bearer YOUR_OPENAI_WHISPER_API_KEY" \
     -H "Content-Type: multipart/form-data" \
     -F "file=@sample.mp3"
🛠️ Troubleshooting & FAQs
❓ Chrome Extension Not Working?
✅ Ensure that subtitles are enabled on the YouTube video.
✅ Try reloading the extension from chrome://extensions/.
✅ Open DevTools (F12 → Console) and check for errors.

❓ Web App Not Running?
✅ Ensure Node.js and npm are installed correctly.
✅ Delete node_modules and reinstall dependencies:

sh
Copy
Edit
rm -rf node_modules package-lock.json
npm install
npm start
❓ API Calls Failing?
✅ Make sure you’ve entered the correct API keys in config.js.
✅ Check your API usage limits on Hugging Face/OpenAI dashboards.

📜 License
This project is licensed under the MIT License – feel free to use and modify it!

📞 Support & Contributions
💡 Found a bug? Have a suggestion? Open an issue on GitHub!
📧 For any queries, contact us at: your-email@example.com
