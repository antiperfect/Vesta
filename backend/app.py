from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
import os

app = Flask(__name__)
CORS(app)

# Load compressed model
try:
    model = joblib.load(os.path.join(os.path.dirname(__file__), "compressed_model.joblib"))
    print("Model loaded successfully!")
except Exception as e:
    print(f"Error loading model: {e}")
    model = None


@app.route("/api/predict", methods=["POST"])
def predict():
    """JSON API endpoint for crop yield prediction."""
    try:
        data = request.get_json()

        if not data:
            return jsonify({"error": "No data provided"}), 400

        # Extract and validate fields
        required_fields = [
            "Crop", "Crop_Year", "Season", "State",
            "Area", "Annual_Rainfall", "Fertilizer", "Pesticide"
        ]

        for field in required_fields:
            if field not in data or data[field] == "" or data[field] is None:
                return jsonify({"error": f"Missing required field: {field}"}), 400

        # Convert input types
        try:
            crop_year = int(data["Crop_Year"])
            area = float(data["Area"])
            annual_rainfall = float(data["Annual_Rainfall"])
            fertilizer = float(data["Fertilizer"])
            pesticide = float(data["Pesticide"])
        except (ValueError, TypeError):
            return jsonify({"error": "Invalid input values. Please check your entries."}), 400

        # Prepare DataFrame for model
        input_df = pd.DataFrame([{
            "Crop": data["Crop"],
            "Crop_Year": crop_year,
            "Season": data["Season"],
            "State": data["State"],
            "Area": area,
            "Annual_Rainfall": annual_rainfall,
            "Fertilizer": fertilizer,
            "Pesticide": pesticide
        }])

        # Make prediction
        if model:
            try:
                prediction = model.predict(input_df)[0]
                prediction = round(float(prediction), 4)

                return jsonify({
                    "prediction": prediction,
                    "unit": "tonnes",
                    "status": "success"
                })

            except Exception as e:
                print(f"Prediction error: {e}")
                return jsonify({"error": "Error making prediction. Please try again."}), 500
        else:
            return jsonify({"error": "Prediction model not available"}), 503

    except Exception as e:
        print(f"Server error: {e}")
        return jsonify({"error": "Internal server error"}), 500


@app.route("/api/health", methods=["GET"])
def health():
    """Health check endpoint."""
    return jsonify({
        "status": "healthy",
        "model_loaded": model is not None
    })


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)
