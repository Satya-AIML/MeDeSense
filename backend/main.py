import pandas as pd
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This enables CORS for all routes

@app.route('/')
def home():
    return jsonify({
        'message': 'Hello from Flask!'
    })

@app.route('/predict', methods=['POST'])
def prediction():
    data = request.get_json()
    
    # Access the nested 'data' dictionary
    device_data = data.get('data', {})
    device = device_data.get('device')
    description = device_data.get('description')

    return jsonify({
        'message': f'Hello from Flask! Received device: {device} and description: {description}'
    })

@app.route('/class_reason', methods=['POST'])
def class_reason():
    deviceClass = "Class A"
    reason = "Reason 1"

    return jsonify({
        'message': f'Hello from Flask! Device is {deviceClass} because it is {reason}'
    })

@app.route('/data', methods=['POST'])
def get_data():
    # Sample DataFrame
    data = {
        'id': [1, 2, 3],
        'name': ['Device A', 'Device B', 'Device C'],
        'class': ['A', 'B', 'C']
    }
    df = pd.DataFrame(data)
    
    # Convert DataFrame to JSON
    json_data = df.to_dict(orient='records')  # List of dictionaries
    
    # Return JSON response
    return jsonify(json_data)


if __name__ == '__main__':
    app.run(host="0.0.0.0", port= 8000, debug=True)
