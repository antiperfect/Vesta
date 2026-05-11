# Stage 1: Build Frontend
FROM node:20-slim AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Stage 2: Final Image
FROM python:3.9-slim

# Hugging Face best practice: Use a non-root user
RUN useradd -m -u 1000 user
USER user
ENV PATH="/home/user/.local/bin:$PATH"

WORKDIR /app

# Install backend dependencies
COPY --chown=user backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend code
COPY --chown=user backend/ ./

# Copy built frontend from Stage 1
COPY --from=frontend-builder --chown=user /app/frontend/dist ./dist

# Expose HF default port
EXPOSE 7860

# Run the app
CMD ["python", "app.py"]
