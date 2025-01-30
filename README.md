# Unhandled Error in Express.js Route Handler

This repository demonstrates a common error in Express.js route handlers: the lack of proper error handling.  The example shows a route that fetches user data by ID.  If an invalid ID is provided, the application will likely crash or behave unexpectedly.

The solution demonstrates how to use try-catch blocks or middleware to gracefully handle such errors, providing more robust error handling and a better user experience.

## Bug

The `bug.js` file shows the problematic code. The route `/users/:id` directly attempts to process the user ID without checking its validity.  This can lead to an application crash if the user ID is not properly formatted or does not exist.

## Solution

The `bugSolution.js` file provides a solution that effectively handles invalid user IDs. It uses a `try-catch` block to handle potential errors and uses middleware to handle errors more robustly and centrally. 