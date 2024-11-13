from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from mdc_flask_app.pipeline.prediction import call_api

app = FastAPI()

# Define CORS settings to allow your React frontend to communicate with FastAPI
origins = [
    "http://localhost:3000",  # React frontend URL (default for React dev server)
    "http://127.0.0.1:3000",  # Alternative URL in case localhost doesn't work
    # Add other allowed origins if needed
]

# Add CORS middleware to FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Specify allowed origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

class PredictionRequest(BaseModel):
    device: str
    description: str


@app.get("/")
async def home():
    return {"message": "Hello from the FastAPI app!"}

@app.post("/predict")
async def predict(request: PredictionRequest):
    # Call the external API asynchronously
    api_response = await call_api(request)
    
    return {
        "device": request.device,
        "description": request.description,
        "api_response": api_response['predicted_class']
    }

@app.get("/data")
async def get_data():
    sample_data = [
        {'id': 1, 'name': 'Device A', 'class': 'A'},
        {'id': 2, 'name': 'Device B', 'class': 'B'},
        {'id': 3, 'name': 'Device C', 'class': 'C'}
    ]
    return sample_data

@app.post("/class_reason")
async def class_reason():
    deviceClass = "Class A"
    reason = "Reason 1"
    return {"message": f"Device is {deviceClass} because it is {reason}"}

if __name__ == "__main__":
    # To run this app with Uvicorn, you don't need this part, but it’s here for local testing.
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
