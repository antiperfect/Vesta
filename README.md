---
title: Vesta Crop Yield Predictor
emoji: 🌾
colorFrom: green
colorTo: yellow
sdk: docker
pinned: false
---

# 🌾 Vesta: Crop Yield Prediction System

![License](https://img.shields.io/badge/license-MIT-blue.svg) ![React](https://img.shields.io/badge/react-v19.0.0-blue) ![Python](https://img.shields.io/badge/python-v3.10-yellow) ![Machine Learning](https://img.shields.io/badge/scikit--learn-orange) ![Flask](https://img.shields.io/badge/flask-%23000.svg?logo=flask&logoColor=white)

An advanced, full-stack machine learning dashboard designed to predict and visualize crop yields based on environmental and agricultural parameters.

**[Try the Live Webapp](https://huggingface.co/spaces/antiperfect/Vesta)**

---

## 🚀 Core Features

- **🔮 Yield Prediction:** Forecasts harvest output based on crop type, season, area, rainfall, and chemical usage.
- **📊 Real-time Analysis:** Interactive charts showing yield trends and state-specific insights.
- **✨ Modern Aesthetics:** A visually stunning "Pinterest-chic" interface with dynamic animations and glassmorphism.
- **⚙️ Integrated Deployment:** Seamless frontend and backend integration hosted on Hugging Face Spaces via Docker.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 19 + Vite + TypeScript
- **Styling:** Tailwind CSS / Custom Glassmorphism UI
- **Components:** Radix UI, Framer Motion
- **Icons:** Lucide React

### Backend
- **Server:** Flask (Python)
- **Data Handling:** Pandas, NumPy
- **ML Models:** Scikit-learn, XGBoost
- **Serialization:** Joblib

---

## ⚙️ Installation & Setup

### 1. Prerequisites
- **Python 3.10+**
- **Node.js 18+**

### 2. Clone and Navigate
```bash
git clone <repository-url>
cd Vesta
```

### 3. Install Dependencies

**Backend:**
```bash
# Recommended: use a virtual environment
cd backend
pip install -r requirements.txt
cd ..
```

**Frontend:**
```bash
cd frontend
npm install
cd ..
```

---

## 🏃 Running the Application

### Option A: Unified Launch (Windows)
Run the batch script to start both servers simultaneously:
```cmd
start.bat
```

### Option B: Manual Launch

**Terminal 1 (Backend):**
```bash
cd backend
python app.py
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev
```

The dashboard will be available at **[http://localhost:5173](http://localhost:5173)**.

---

## 👥 Team Members

| Member | Role |
| :--- | :--- |
| **Shashank Pradhan** | Frontend and Full-Stack Integration |
| **Kiran Vishwakarma** | Backend Architecture and ML Training |
| **Jasleen Kaur** | Documentation and Research |
| **Rani Pari Gupta** | Documentation and Research |

---

## 📄 License
*This project is for agricultural research and academic purposes.*
