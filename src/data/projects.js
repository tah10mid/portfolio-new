import projPortfolio from "../assets/hero-character.png";
import projCrakuflix from "../assets/proj-crakuflix.png";
import projCgpa from "../assets/proj-cgpa.png";
import projChatbot from "../assets/proj-chatbot.png";
import projGame from "../assets/proj-game.png";
import projWeather from "../assets/proj-weather.png";
import projThesis from "../assets/proj-thesis.png";
import projMovie from "../assets/proj-movie.png";

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "This very site — a cinematic monochrome portfolio with an interactive canvas hero, cursor-reveal effect, 3D flip card, skills marquee, and background music player.",
    tags: ["React", "Vite", "Canvas", "CSS"],
    live: "https://tah10mid.github.io/portfolio/",
    code: "https://github.com/tah10mid/portfolio",
    image: projPortfolio,
  },
  {
    title: "CrakUFlix",
    description:
      "A Netflix-style learning platform I built for BRAC University CSE students: browse course videos by topic, step through code in a live simulator, and ask an AI tutor.",
    tags: ["Next.js", "React", "AI"],
    live: "https://crak-u-flix.vercel.app/",
    code: null,
    image: projCrakuflix,
  },
  {
    title: "BRACU CGPA Planner",
    description:
      "A web app for BRAC University students to track courses, project their CGPA, run what-if scenarios, and visualize academic trends.",
    tags: ["Python", "Streamlit", "Plotly", "Pandas"],
    live: "https://bracu-cgpa-calc.streamlit.app/",
    code: "https://github.com/tah10mid/bracu-cgpa",
    image: projCgpa,
  },
  {
    title: "AI Chatbot",
    description:
      "An intelligent chatbot that classifies user intent with machine learning (TF-IDF + Logistic Regression) and falls back to Google Gemini for complex questions.",
    tags: ["Python", "scikit-learn", "Streamlit", "Gemini AI"],
    live: "https://chatbot-tahmid.streamlit.app/",
    code: "https://github.com/tah10mid/chatbot",
    image: projChatbot,
  },
  {
    title: "3D Graphics Game (CSE423)",
    description:
      "A 3D game built from scratch using PyOpenGL: scene rendering, transformations, lighting, and interactive controls.",
    tags: ["Python", "PyOpenGL", "3D Graphics"],
    live: null,
    code: "https://github.com/tah10mid/423-project-game",
    image: projGame,
  },
  {
    title: "Weather App",
    description:
      "A responsive weather app that fetches real-time weather data for any city using API integration.",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    live: "https://portfolio-github-io-eight-iota.vercel.app/",
    code: null,
    image: projWeather,
  },
  {
    title: "Thesis Finder (CSE370)",
    description:
      "A web app for university students to discover thesis and project ideas, request team membership, and communicate with faculty supervisors.",
    tags: ["PHP", "MySQL", "JavaScript", "CSS"],
    live: null,
    code: "https://github.com/tah10mid/CSE370-PROJECT",
    image: projThesis,
  },
  {
    title: "Movie Ratings Prediction (CSE422)",
    description:
      "A machine-learning project that predicts movie ratings using data analysis and modeling techniques in a Jupyter Notebook.",
    tags: ["Python", "Jupyter Notebook", "ML"],
    live: null,
    code: "https://github.com/tah10mid/movie-ratings-prediction-CSE422-project",
    image: projMovie,
  },
];

export default projects;
