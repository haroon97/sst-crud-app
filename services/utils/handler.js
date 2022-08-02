export default function handler(lambda) {
  return async function (event, context) {
    let body, statusCode;

    try {
      body = await lambda(event, context);
      if (body) {
        statusCode = 200;
        body = JSON.stringify(body);
      } else {
        statusCode = 400;
        body = JSON.stringify({error: "Bad Request"})
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