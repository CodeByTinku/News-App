# 📰 Daily News App

A modern, responsive news aggregator built with React and Vite. Stay updated with the latest headlines, filter by categories, and read full articles directly from the source. 🌍✨

## 🚀 Features

- **Live News Feed**: Fetches real-time news articles using the NewsAPI.
- **Category Filtering**: Brows news by categories (Business, Technology, Sports, etc.).
- **Smart Filtering**: Automatically hides articles without images for a cleaner UI.
- **Responsive Design**: Optimized for all devices using Tailwind CSS and DaisyUI.
- **Read More**: Direct links to the full articles.
- **Context API State Management**: Efficient data handling across the application.

## 🛠️ Tech Stack

- **Frontend Library**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **State Management**: React Context API

---

## Screenshot
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/0f605f5f-7a8e-4264-ab11-078be96cffe5" />

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository_url>
   ```

2. **Navigate to the project directory**
   ```bash
   cd news-app
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Configure Environment Variables**
   Create a `.env` file in the root directory and add your NewsAPI key:
   ```env
   VITE_API_KEY=your_api_key_here
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Visit `http://localhost:5173` to browse the latest news!

## 📂 Project Structure

```
news-app/
├── public/
├── src/
│   ├── api/             # API configuration (axios)
│   ├── component/       # Reusable UI components (Navbar, Category, Loader, etc.)
│   ├── context/         # State management (NewsContext)
│   ├── page/            # Main page layouts (News.jsx)
│   ├── App.jsx          # Root component
│   └── main.jsx         # Entry point
├── .env                 # API keys (not committed)
├── index.html
└── package.json
```

---
*Stay informed, stay ahead.*
