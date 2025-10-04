# OZI Form API

A Node.js API built with Express and Sequelize to handle form submissions.

## Features

- Express.js REST API
- Sequelize ORM with MySQL
- Form data validation
- JSON support for location and items
- Error handling and logging

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

### Submit Form
- **POST** `/submit-form`
- **Body**: JSON payload with form data

### Health Check
- **GET** `/health`
- Returns server status

## Form Data Structure

```json
{
    "name": "test",
    "contact": "6541215533",
    "location": {
        "lat": 28.4020201,
        "lng": 77.0856759
    },
    "preferredDate": "2025-10-07",
    "address": "hghvghhg",
    "preferredTime": "12 PM - 2 PM",
    "items": [
        "Clothes"
    ],
    "quantity": "1 carton"
}
```

## Testing

Test the API with curl:
```bash
curl -X POST http://localhost:3000/submit-form \
  -H "Content-Type: application/json" \
  -d '{
    "name": "test",
    "contact": "6541215533",
    "location": {
        "lat": 28.4020201,
        "lng": 77.0856759
    },
    "preferredDate": "2025-10-07",
    "address": "hghvghhg",
    "preferredTime": "12 PM - 2 PM",
    "items": ["Clothes"],
    "quantity": "1 carton"
  }'
```

## Deployment

This API is ready for deployment on Render. The database configuration is set up for your AWS RDS MySQL instance.
