# TheJokeAPI - API Testing with Postman

##  Overview
This document provides an overview of the **TheJokeAPI** endpoints and the Postman tests conducted to verify their functionality.

##  API Endpoints & Tests Conducted

### 1️ **GET /random_ten** - Retrieve 10 random jokes
- **Tests: **
  - Status code is **200 OK**
  - Response time is less than **200ms**

### 2️ **GET /types** - Get available joke types
- **Tests: **
  - Status code is **200 OK**
  - Response contains values of joke types

### 3️ **GET /jokes/count** - Get the total count of jokes
- **Tests: **
  - Status code is **200 OK**
  - Response is in JSON format
  - Response contains key **'count'**
  - `count` is a **positive number**

### 4️ **GET /jokes/random/length?min=50&max=100** - Filter jokes by length
- **Tests: **
  - Status code is **200 OK** if a joke is found
  - Status code is **404 Not Found** if no jokes match criteria

### 5️ **POST /jokes/add** - Add a new dad joke
- **Tests: **
  - Status code is **201 Created**
  - Response contains message **'Joke added successfully!'**
  - Response contains an object **joke**
  - Joke has fields **type, setup, punchline**
  - ID is correctly generated
  - `jokeId` is successfully saved for future use

### 6️ **GET /jokes/:id** - Retrieve a joke by its ID
- **Tests: **
  - Status code is **200 OK**
  - Response time is less than **200ms**

### 7️ **DELETE /jokes/:id** - Delete a joke by its ID
- **Tests: **
  - Status code is **200 OK**
  - Response contains message **'Joke deleted successfully!'**

### 8️ **GET /jokes/:id (After Deletion)** - Verify joke is deleted
- **Tests: **
  - Status code is **404 Not Found**
  - Response contains message **'Joke not found'**

##  **Additional Postman Features Used**
- **Collection Variables:** `jokeId` is stored automatically after a `POST` request for reuse in `GET`, and `DELETE` requests.
- **Test Assertions:** All responses were validated using Postman test scripts to ensure proper API behavior.

##  **Final Results**
- **Total Tests Passed:** 20
- **Total Tests Failed:** 0
- **Execution Status:** **All tests successfully passed** 

