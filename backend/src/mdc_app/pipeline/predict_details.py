import json
import httpx
from fastapi import HTTPException
from mdc_app.pipeline.prediction import Prediction


# Define the class definitions
class_definitions = {
    "Class A": "Low Risk. Simple, non-invasive.",
    "Class B": "Low to Moderate Risk. Limited duration, minimal invasiveness, and with additional regulatory controls",
    "Class C": "Moderate to High Risk. Invasive, prolonged contact, and devices needing pre-market approval",
    "Class D": "High Risk. Implantable, life-sustaining, and devices needing strict regulatory controls."
}



def create_prompt(device_name, intended_use, device_class, class_definitions):
    """Generate the prompt string based on device details and class definitions."""
    class_description = class_definitions.get(device_class, "No definition available")
    prompt = (
        f"{device_name}, it is used for {intended_use}. "
        f"{device_class}: {class_description}. "
        "Why has this been classified as {device_class}? Describe more about the device. "
        "NOTE: If you do not have knowledge about this device, just repeat the input in response. "
        "Provide 3 precise bullet points. Answer without emotion."
    )
    return prompt


# Child Class
class DetailedPrediction(Prediction):
    def __init__(self, device_name, intended_use, device_class=None):
        super().__init__(device_name, intended_use)  # Call the parent class constructor
        if device_class:
            self.device_class = device_class  # Store device class in the child class

    async def generate_response(self):
        """Send a prompt to the API and get the generated response."""

        # Define the API endpoint
        url = "http://10.11.6.51:4000/api/generate"


        # Generate the prompt based on device details
        prompt = create_prompt(self.device, self.description, self.device_class, class_definitions)
        
        # Define the payload for the API request
        payload = {
            "model": "medllama2",
            "prompt": prompt
        }
        
        try:
            # Send the asynchronous request
            async with httpx.AsyncClient() as client:
                response = await client.post(url, json=payload, timeout=None)
            response.raise_for_status()  # Raise exception for non-200 status codes
        except httpx.HTTPStatusError as e:
            # Handle HTTP errors with a specific exception message
            raise HTTPException(status_code=e.status_code, detail=f"API request failed with status {e.status_code}")
        except Exception as e:
            # Catch other unexpected errors
            raise HTTPException(status_code=500, detail=f"Internal error: {str(e)}")
        
        # Process the response
        response_text = ""

        for line in response.text.splitlines():
            if line:
                data = json.loads(line)
                if 'response' in data:
                    response_text += data['response']
        
        return response_text