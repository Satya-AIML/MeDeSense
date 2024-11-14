import httpx
import logging
from fastapi import HTTPException

# Set up logging
logging.basicConfig(level=logging.ERROR)


# Parent Class
class Prediction:
    def __init__(self, device_name, intended_use):
        self.device = device_name
        self.description = intended_use
        self.device_class = None  # Placeholder for storing API response

    async def call_api(self):
        url = 'http://10.11.6.51:4001/predict'  # Replace with your actual API URL
        headers = {'Content-Type': 'application/json'}

        # Prepare the data payload
        data = {"text": f'{self.device} {self.description}'}

        try:
            async with httpx.AsyncClient() as client:
                response = await client.post(url, json=data, headers=headers)
                if response.status_code == 200:
                    self.device_class = response.json().get('predicted_class')  # Store the predicted class in the object
                    return self.device_class  # Return the device class
                else:
                    raise HTTPException(status_code=response.status_code, detail="API call failed")
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Error calling the API: {e}")