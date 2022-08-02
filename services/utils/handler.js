import errorStatements from "./error";

export default function handler(lambda) {
  return async function (event, context) {
    let body, statusCode;

    try {
      body = await lambda(event, context);
      if (body) {
        statusCode = 200;
        body = JSON.stringify(body);
      } else {
        const error = errorStatements(event.requestContext.http.method);
        statusCode = error.statusCode;
        body = JSON.stringify(error.body);
      }
    } catch (e) {
      body = { error: e.message };
      statusCode = 500;
    }

    return {
      statusCode,
      body,
    };
  };
}