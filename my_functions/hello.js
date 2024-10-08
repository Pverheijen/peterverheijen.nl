// netlify/functions/hello.js
exports.handler = async function (event, context) {
    // Extract user information from the context.clientContext
    const user = context.clientContext && context.clientContext.user;
  
    // Use optional chaining for robustness
    const roles = user?.app_metadata?.roles || [];
  
    // Check if user has the 'admin' role
    if (roles.includes("admin")) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello, Admin!" }),
      };
    } else {
      return {
        statusCode: 403,
        body: JSON.stringify({ message: "You are not authorized to access this resource." }),
      };
    }
  };
  