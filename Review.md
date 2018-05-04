# Review Questions

## What is Node.js?
-Node is an engine which allows us to run javascript outside of the browser.

## What is Express?
-Express extends the functionality of node that was designed to build web applications

## Mention two parts of Express that you learned about this week.
-Parses the request body
-Allows us to use middleware
-Handles HTTP requests

## What is Middleware?
-Middleware are functions that are executed before the request handlers are made.

## What is a Resource?
-Resources defines our architecture such as having a homepage, comment system, etc. We spread our code into resources so it's easier to read and bugst could be caught faster.

## What can the API return to help clients know if a request was successful?
-HTTP status codes, such as:
code 200: Everthing was passed okay
code 404: Not found
code 500: Internal server error


## How can we partition our application into sub-applications?
-By changing our folder/file structure where everything is seperated by feature or type

## What is CORS and why do we need it?
-Cors allows restricted resources to be requested outside of our domain and specifically who/how they can access it.
