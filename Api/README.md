# Super Screen API Documentation

## Overview

The Super Screen API provides endpoints to manage Birthday Cards, Media Cards, Queue entities, History records, Users, and file uploads. It uses ASP.NET Core and Entity Framework Core for handling HTTP requests and database interactions. This documentation outlines the available endpoints, request formats, and response formats for the API.

## Base URL

All endpoints are prefixed with /api. The base URL for the API is:

```
http://localhost:5173/api
```

## Controllers

<details>
<summary><span style="font-weight: bold">List of all controllers and their endpoints</span></summary>

### BirthdayCardController

<details>
<summary>
<span style="font-weight: bold">Endpoints</span>
</summary>

## <span style="color:cornflowerblue"> GET</span> /birthdaycard

Retrieves a list of all birthday cards.

### Response:

- 200 OK: Returns a list of 'BirthdayCard' objects.

```json
[
  {
    "birthdayCardId": 1,
    "title": "Happy Birthday!",
    "message": "Wishing you a wonderful birthday!",
    "user": null
  }
]
```

## <span style="color:cornflowerblue"> GET</span> /birthdaycard/{id}

Retrieves a specific birthday card by ID.

### Parameters:

- 'id' (int) The ID of the birthday card to retrieve

### Response:

- 200 OK: Returns the 'BirthdayCard' object.
- 404 Not Found: If the birthday card with the specified ID does not exist

```json
{
  "birthdayCardId": 1,
  "title": "Happy Birthday!",
  "message": "Wishing you a wonderful birthday!",
  "user": null
}
```

## <span style="color:lightgreen">POST</span> /birthdaycard

Creates a new birthday card.

### Request Body

- 'BirthdayCard' object (without 'birthdayCardId' and 'user' properties).

### Response:

- 201 Created: Returns the created 'BirthdayCard' object with the new ID.
- 400 Bad Request: If the request body is invalid.

```json
{
  "title": "Happy Birthday!",
  "message": "Wishing you a wonderful birthday!"
}
```

## <span style="color:orange">PUT</span> /birthdaycard/{id}

Updates an existing birthday card.

### Parameters

- 'id' (int): The ID of the birthday card to update

### Request Body:

- 'BirthdayCard' object with the 'birthdayCardId' matching the 'id' paramter.

### Reponse:

- 204 No Content: If the update was sucessfull.
- 400 Bad Request: If the 'id' does not match the 'birthdayCardId' in the request body.
- 404 Not Found: If the birday card with the specified ID does not exist.

## <span style="color:red">DELETE</span>/birthdaycard/{id}

Deletes a birthday card.

### Parameters:

- 'id' (int): The ID of the birthday card to delete.

### Response:

- 204 No Content: If the deletion is successful.
- 404 Not Found: If the birthday card with the specified ID does not exist.
</details>

### MediaCardController

<details>
<summary>
<span style="font-weight: bold">Endpoints</span>
</summary>

## <span style="color:cornflowerblue">GET</span> /mediacard

Retrieves a list of all media cards.

### Response:

- 200 OK: Returns a list of MediaCard objects.

### Example:

```json
[
  {
    "mediaCardId": 1,
    "title": "Media Card 1",
    "description": "Description of Media Card 1",
    "url": "http://example.com/media1"
  },
  {
    "mediaCardId": 2,
    "title": "Media Card 2",
    "description": "Description of Media Card 2",
    "url": "http://example.com/media2"
  }
]
```

## <span style="color:cornflowerblue">GET</span> /mediacard/{id}

Retrieves a specific media card by ID.

### Parameters:

- id (int): The ID of the media card to retrieve.

### Response:

- 200 OK: Returns the MediaCard object.
- 404 Not Found: If the media card with the specified ID does not exist.

### Example:

```json
{
  "mediaCardId": 1,
  "title": "Media Card 1",
  "description": "Description of Media Card 1",
  "url": "http://example.com/media1"
}
```

## <span style="color:lightgreen">POST</span> /mediacard

Creates a new media card.

### Request Body:

- MediaCard object (without mediaCardId property).

### Example:

```json
{
  "title": "New Media Card",
  "description": "Description of the new media card",
  "url": "http://example.com/newmedia"
}
```

### Response:

- 201 Created: Returns the created MediaCard object with the new ID.
- 400 Bad Request: If the request body is invalid.

### Example:

```json
{
  "mediaCardId": 3,
  "title": "New Media Card",
  "description": "Description of the new media card",
  "url": "http://example.com/newmedia"
}
```

## <span style="color:orange">PUT</span> /mediacard/{id}

Updates an existing media card.

### Parameters:

- id (int): The ID of the media card to update.

### Request Body:

- MediaCard object with the mediaCardId matching the id parameter.

### Example:

```json
{
  "mediaCardId": 1,
  "title": "Updated Media Card",
  "description": "Updated description of the media card",
  "url": "http://example.com/updatedmedia"
}
```

### Response:

- 204 No Content: If the update is successful.
- 400 Bad Request: If the id does not match the mediaCardId in the request body.
- 404 Not Found: If the media card with the specified ID does not exist.

## <span style="color:red">DELETE</span> /mediacard/{id}

Deletes a media card.

### Parameters:

- id (int): The ID of the media card to delete.

### Response:

- 204 No Content: If the deletion is successful.
- 404 Not Found: If the media card with the specified ID does not exist.

## Data Models

The MediaCard model represents a media card resource with the following properties:

- mediaCardId (int): The unique identifier for the media card.
- title (string): The title of the media card.
- description (string): A brief description of the media card.
- url (string): The URL of the media resource.

### Example:

```json
{
  "mediaCardId": 1,
  "title": "Media Card 1",
  "description": "Description of Media Card 1",
  "url": "http://example.com/media1"
}
```

</details>

### QueueController

<details>
<summary>
<span style="font-weight: bold">Endpoints</span>
</summary>

## <span style="color:cornflowerblue">GET</span> /queue

Retrieves a list of all queues.

### Response:

- 200 OK: Returns a list of Queue objects.

### Example:

```json
[
  {
    "queueId": 1,
    "name": "Queue 1",
    "description": "Description of Queue 1"
  },
  {
    "queueId": 2,
    "name": "Queue 2",
    "description": "Description of Queue 2"
  }
]
```

## <span style="color:cornflowerblue">GET</span> /queue/{id}

Retrieves a specific queue by ID.

### Parameters:

- id (int): The ID of the queue to retrieve.

### Response:

- 200 OK: Returns the Queue object.
- 404 Not Found: If the queue with the specified ID does not exist.

### Example:

```json
{
  "queueId": 1,
  "name": "Queue 1",
  "description": "Description of Queue 1"
}
```

## <span style="color:lightgreen">POST</span> /queue

Creates a new queue.

### Request Body:

- Queue object (without queueId property).

### Example:

```json
{
  "name": "New Queue",
  "description": "Description of the new queue"
}
```

### Response:

- 201 Created: Returns the created Queue object with the new ID.
- 400 Bad Request: If the request body is invalid.

### Example:

```json
{
  "queueId": 3,
  "name": "New Queue",
  "description": "Description of the new queue"
}
```

## <span style="color:orange">PUT</span> /queue/{id}

Updates an existing queue.

### Parameters:

- id (int): The ID of the queue to update.

### Request Body:

- Queue object with the queueId matching the id parameter.

### Example:

```json
{
  "queueId": 1,
  "name": "Updated Queue",
  "description": "Updated description of the queue"
}
```

### Response:

- 204 No Content: If the update is successful.
- 400 Bad Request: If the id does not match the queueId in the request body.
- 404 Not Found: If the queue with the specified ID does not exist.

## <span style="color:red">DELETE</span> /queue/{id}

Deletes a queue.

### Parameters:

- id (int): The ID of the queue to delete.

### Response:

- 204 No Content: If the deletion is successful.
- 404 Not Found: If the queue with the specified ID does not exist.

### Data Models

The Queue model represents a queue resource with the following properties:

- queueId (int): The unique identifier for the queue.
- name (string): The name of the queue.
- description (string): A brief description of the queue.

### Example:

```json
{
  "queueId": 1,
  "name": "Queue 1",
  "description": "Description of Queue 1"
}
```

</details>

### HistoryController

<details>
<summary>
<span style="font-weight: bold">Endpoints</span>
</summary>

### <span style="color:cornflowerblue">GET</span> /history

Retrieves a list of all history records.

### Response:

- 200 OK: Returns a list of History objects.

### Example:

```json
[
  {
    "historyId": 1,
    "description": "History record 1",
    "timestamp": "2023-05-29T10:00:00Z"
  },
  {
    "historyId": 2,
    "description": "History record 2",
    "timestamp": "2023-05-29T11:00:00Z"
  }
]
```

## <span style="color:cornflowerblue">GET</span> /history/{id}

Retrieves a specific history record by ID.

### Parameters:

- id (int): The ID of the history record to retrieve.

### Response:

- 200 OK: Returns the History object.
- 404 Not Found: If the history record with the specified ID does not exist.

### Example:

```json
{
  "historyId": 1,
  "description": "History record 1",
  "timestamp": "2023-05-29T10:00:00Z"
}
```

## <span style="color:lightgreen">POST</span> /history

Creates a new history record.

### Request Body:

- History object (without historyId property).

### Example:

```json
{
  "description": "New history record",
  "timestamp": "2023-05-29T12:00:00Z"
}
```

### Response:

- 201 Created: Returns the created History object with the new ID.

### Example:

```json
{
  "historyId": 3,
  "description": "New history record",
  "timestamp": "2023-05-29T12:00:00Z"
}
```

## <span style="color:orange">PUT</span> /history/{id}

Updates an existing history record.

### Parameters:

- id (int): The ID of the history record to update.

### Request Body:

- History object with the historyId matching the id parameter.

### Example:

```json
{
  "historyId": 1,
  "description": "Updated history record",
  "timestamp": "2023-05-29T10:00:00Z"
}
```

### Response:

- 204 No Content: If the update is successful.
- 400 Bad Request: If the id does not match the historyId in the request body.
- 404 Not Found: If the history record with the specified ID does not exist.

## <span style="color:red">DELETE</span> /history/{id}

Deletes a history record.

### Parameters:

- id (int): The ID of the history record to delete.

### Response:

- 204 No Content: If the deletion is successful.
- 404 Not Found: If the history record with the specified ID does not exist.

### Data Models

The History model represents a history resource with the following properties:

- historyId (int): The unique identifier for the history record.
- description (string): A brief description of the history record.
- timestamp (DateTime): The timestamp of when the history record was created or updated.

### Example:

```json
{
  "historyId": 1,
  "description": "History record 1",
  "timestamp": "2023-05-29T10:00:00Z"
}
```

</details>

### UploadController

<details> 
<summary>
<span style="font-weight: bold">Endpoints</span>
</summary>
This controller allows clients to upload image and video files, storing them on the server.

## <span style="color:lightgreen">POST</span> /upload

Uploads a file to the server.

### Request Body:

- IFormFile object containing the file to upload.

### Accepted File Types:

- Images: JPEG, PNG, GIF, BMP, WEBP, SVG, TIFF, ICO
- Videos: MP4, MPEG, QuickTime, AVI, Matroska (MKV), WEBM, OGG, 3GPP, FLV

### Response:

- 200 OK: Returns the file path of the uploaded file.
- 400 Bad Request: If the file is null, empty, or has an invalid file type.

### Example:

```json
{
  "filePath": "/uploadedFileName.ext"
}
```

### Error Responses

- 400 Bad Request: Returned when the file is null, empty, or has an invalid file type.

### Example:

```json
{
  "message": "No file uploaded."
}
```

### Example:

```json
{
  "message": "Invalid file type. Only images and videos are allowed."
}
```

### File Upload

The file upload request expects an IFormFile object. This is typically sent as a part of a multipart/form-data form submission.

### Example Request:

```http

POST /api/upload/upload
Content-Type: multipart/form-data
```

### Form Data:

- 'file:' The file to be uploaded.

### Method: <span style="color:lightgreen">POST</span> /upload

This method handles the file upload process. It performs the following steps:

1. <span style="font-weight: bold">File Validation:</span>

   - Checks if the file is null or empty.
   - Validates the file type against a list of accepted MIME types for images and videos.

2. <span style="font-weight: bold">Directory Preparation:</span>

   - Ensures the upload directory (wwwroot) exists. If it does not exist, it creates the directory.

3. <span style="font-weight: bold">File Saving:</span>

   - Saves the file to the wwwroot directory on the server.

### Response:

- Returns the path to the uploaded file if successful.
- Returns an appropriate error message if the upload fails due to validation errors.

</details>

### UserController

<details>
<summary>
<span style="font-weight: bold">Endpoints</span>
</summary>

## <span style="color:cornflowerblue">GET</span> /user

Retrieves a list of all users.

### Response:

- 200 OK: Returns a list of User objects.

### Example:

```json
[
  {
    "userId": 1,
    "username": "johndoe",
    "email": "johndoe@example.com"
  },
  {
    "userId": 2,
    "username": "janedoe",
    "email": "janedoe@example.com"
  }
]
```

## <span style="color:cornflowerblue">GET</span> /user/{id}

Retrieves a specific user by ID.

### Parameters:

- id (int): The ID of the user to retrieve.

### Response:

- 200 OK: Returns the User object.
- 404 Not Found: If the user with the specified ID does not exist.

### Example:

```json
{
  "userId": 1,
  "username": "johndoe",
  "email": "johndoe@example.com"
}
```

## <span style="color:lightgreen">POST</span> /user

Creates a new user.

### Request Body:

- User object (without userId property).

### Example:

```json
{
  "username": "newuser",
  "email": "newuser@example.com",
  "password": "securepassword"
}
```

### Response:

- 201 Created: Returns the created User object with the new ID.
- 400 Bad Request: If the request body is invalid.

### Example:

```json
{
  "userId": 3,
  "username": "newuser",
  "email": "newuser@example.com"
}
```

## <span style="color:orange">PUT</span> /user/{id}

Updates an existing user.

### Parameters:

- id (int): The ID of the user to update.

### Request Body:

- User object with the userId matching the id parameter.

### Example:

```json
{
  "userId": 1,
  "username": "updateduser",
  "email": "updateduser@example.com",
  "password": "newsecurepassword"
}
```

### Response:

- 204 No Content: If the update is successful.
- 400 Bad Request: If the id does not match the userId in the request body.
- 404 Not Found: If the user with the specified ID does not exist.

## <span style="color:red">DELETE</span> /user/{id}

Deletes a user.

### Parameters:

- id (int): The ID of the user to delete.

### Response:

- 204 No Content: If the deletion is successful.
- 404 Not Found: If the user with the specified ID does not exist.

### User

The User model represents a user resource with the following properties:

- userId (int): The unique identifier for the user.
- username (string): The username of the user.
- email (string): The email address of the user.
- password (string): The password of the user.

### Example:

```json
{
  "userId": 1,
  "username": "johndoe",
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```

</details>
</details>

## Configuration

### Database Context

The CardContext is used to interact with the database. The database provider used is SQLite. The connection string can be configured in the appsettings.json file.

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Data Source=super_screen.db"
  }
}
```

## Swagger

Swagger is used for API documentation and testing. It is configured in the Program.cs file.

## CORS

CORS is configured to allow any origin, method, and header. This is done in the Program.cs file with the policy named AllowAll.

```c#
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});
```

### File Upload Limits

The maximum request body size and multipart body length limit are set to the maximum allowed size to accommodate large file uploads.

### About

This documentation should provide a comprehensive guide to using and understanding the Super Screen API. For any further questions or issues, refer to the source code or contact the development team.
