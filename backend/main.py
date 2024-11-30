from fastapi import FastAPI, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from mdc_app.pipeline.predict_details import DetailedPrediction

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
    allow_methods=["*"],  # Allow all HTTP methodsP (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

class PredictionRequest(BaseModel):
    device: str
    description: str


@app.get("/")
async def home():
    return {"message": "Hello from the FastAPI app!"}

async def generate_response_task(prediction):
    """Run generate_response in the background."""
    if prediction.device_class:
        # Generate a response based on the provided details
        await prediction.generate_response()

@app.post("/predict")
async def predict(request: PredictionRequest, background_tasks: BackgroundTasks):
    # Call the external API asynchronously
    prediction = DetailedPrediction(device_name = request.device, intended_use = request.description)

    # Call the API to get prediction data
    api_response = await prediction.call_api()

    # Add the response generation as a background task
    background_tasks.add_task(generate_response_task, prediction)
    
    return {
        "device": request.device,
        "description": request.description,
        "api_response": api_response
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
