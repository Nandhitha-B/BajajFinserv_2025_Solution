#BAJAJ FINSERV 2025 SOLUTION

This project implements a serverless REST API hosted on Vercel, which processes an input array and returns various computed results.

## TECHNOLOGIES USED

- Node.js  
- Express.js  
- Vercel  
- CORS  
- serverless-http  

---

## API ENDPOINT

**POST** `/bfhl`

**Request Body Example:**

{
  "data": ["a","1","334","4","R", "$"]
}

{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334","4"],
  "alphabets": ["A","R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}


FEATURES:
Separates even/odd numbers from input

Converts alphabets to uppercase

Extracts special characters

Computes sum of numbers as a string

Concatenates all alphabets in reverse order with alternating caps

Returns user_id in the format {full_name_ddmmyyyy}

Returns is_success to indicate successful processing


