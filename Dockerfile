# Stage 1: Build the React Frontend
FROM node:18-alpine AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Stage 2: Set up the Python Backend
FROM python:3.10-slim
WORKDIR /app

# Install backend dependencies
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install gunicorn

# Copy backend code
COPY backend/ .

# Copy the built frontend to the backend's static folder
# Note: React build goes to 'dist', we move it to 'static'
COPY --from=frontend-builder /app/frontend/dist ./static

# Set Hugging Face specific environment variables
ENV PORT=7860
EXPOSE 7860

# Start the application using Gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:7860", "app:app"]
