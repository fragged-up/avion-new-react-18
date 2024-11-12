# HTTP Status Codes Summary - Errors and Explanations

## Success Codes (2xx)
- **200 OK**: The request was successful, and the server returned the requested data.
- **201 Created**: The resource was successfully created, typically after a POST request.
- **204 No Content**: The request was successful, but there is no content to return.

## Redirection Codes (3xx)
- **301 Moved Permanently**: The resource has been permanently moved to a new URL.
- **302 Found**: The resource is temporarily located at a different URL.
- **304 Not Modified**: The content has not changed since the last request, so there is no need to resend it.

## Client Error Codes (4xx)
- **400 Bad Request**: The server could not understand the request due to invalid syntax or input.
- **401 Unauthorized**: Authentication is required to access the resource.
- **403 Forbidden**: The request was valid, but the server is refusing action. Access is denied.
- **404 Not Found**: The requested resource could not be found on the server.
- **405 Method Not Allowed**: The request method is not supported for the requested resource.
- **408 Request Timeout**: The server timed out waiting for the request.
- **409 Conflict**: There is a conflict with the current state of the resource, such as an edit conflict.
- **429 Too Many Requests**: The user has sent too many requests in a given amount of time (rate limiting).

## Server Error Codes (5xx)
- **500 Internal Server Error**: A generic server error occurred and the server could not process the request.
- **501 Not Implemented**: The server does not support the functionality required to fulfill the request.
- **502 Bad Gateway**: The server, acting as a gateway or proxy, received an invalid response from an upstream server.
- **503 Service Unavailable**: The server is not ready to handle the request, often due to being overloaded or down for maintenance.
- **504 Gateway Timeout**: The server, acting as a gateway, did not receive a timely response from an upstream server.
- **505 HTTP Version Not Supported**: The HTTP version used in the request is not supported by the server.

---

**Summary**: HTTP status codes are divided into categories based on the type of response: success (2xx), redirection (3xx), client errors (4xx), and server errors (5xx). Understanding these codes helps you handle request outcomes and manage errors effectively.