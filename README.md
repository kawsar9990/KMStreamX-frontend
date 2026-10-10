# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
# 📺 KMStreamX

<div align="center">

  <p><b>A modern and responsive web application for streaming live TV seamlessly.</b></p>

  <p>
    <a href="https://github.com/YOUR_GITHUB_USERNAME/KMStreamX-Frontend" target="_blank">View GitHub Repository</a> •
    <a href="https://your-live-preview-link.com" target="_blank">Live Preview</a>
  </p>

</div>

---

## 🚀 About The Project

**KMStreamX** is a feature-rich, high-performance web platform designed for streaming live television channels smoothly. Built with a modern tech stack, it offers users a clean, user-friendly interface with real-time features like live visitor counts and lightning-fast video playback.

---

## 🛠️ Built With

The frontend of KMStreamX is crafted using cutting-edge web technologies:

*   **React** (Vite) - A fast and efficient JavaScript library for building user interfaces.
*   **Tailwind CSS** - A utility-first CSS framework for rapid and modern UI development.
*   **TypeScript** - For type-safe and robust code architecture.
*   **WebSocket** - For real-time data synchronization (e.g., live online user badges).
*   **React Icons** - For sleek and modern vector icons.

---

## ✨ Key Features

*   🎥 **Smooth Live TV Streaming:** Enjoy uninterrupted live television channels.
*   🟢 **Real-time Online Visitors Badge:** Live tracking of active viewers using WebSockets.
*   📱 **Fully Responsive Design:** Optimized for all screen sizes (mobile, tablet, and desktop).
*   ⚡ **Lightning Fast Performance:** Powered by Vite for instant load times and hot module replacement.
*   🎨 **Modern Dark/Glassmorphism UI:** Styled beautifully with Tailwind CSS.

---

## 📁 Project Structure

```text
KMStreamX-Frontend/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components (e.g., OnlineBadge.tsx, Header.tsx)
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Entry point
│   └── index.css        # Tailwind styles
├── .env                 # Environment variables
├── package.json         # Dependencies and scripts
└── README.md            # Project documentation



[🌐 Live Demo](https://kmstreamx.netlify.app) •
[🌐 Live Demo](https://kmstreamx.vercel.app) •
[💻 GitHub](https://github.com/kawsar9990) •
[🔗 LinkedIn](https://www.linkedin.com/in/kawsar-ahmed-2a466441b)