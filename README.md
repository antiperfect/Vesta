---
title: Vesta Yield Predictor
emoji: 🌾
colorFrom: green
colorTo: yellow
sdk: docker
app_port: 7860
pinned: false
---

# Vesta: Crop Yield Prediction System

Vesta is a full-stack web application that uses machine learning to forecast crop yields based on environmental and agricultural parameters.

## Project Structure
- `frontend/`: React + Vite application (UI)
- `backend/`: Flask application (ML API)
- `Dockerfile`: Multi-stage build for unified hosting on Hugging Face Spaces.

## Deployment
This repository is automatically synced to [Hugging Face Spaces](https://huggingface.co/spaces/antiperfect/Vesta) via GitHub Actions.
