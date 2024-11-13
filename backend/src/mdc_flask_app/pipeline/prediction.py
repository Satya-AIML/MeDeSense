import httpx
import logging
from fastapi import HTTPException

# Set up logging
logging.basicConfig(level=logging.ERROR)


async def call_api(data):
    url = 'http://10.11.6.51:4001/predict'  # Replace with your actual API URL
    headers = {'Content-Type': 'application/json'}
    # print(data.device)
    # print(data.description)
    data = f'{data.device} {data.description}'
    # print(data)  # For debugging purposes, remove before production code
    data = {"text": data}
    try:
        async with httpx.AsyncClient() as client:
            response = await client.post(url, json=data, headers=headers)
            if response.status_code == 200:
                return response.json()
            else:
                raise HTTPException(status_code=response.status_code, detail="API call failed")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error calling the API: {e}")