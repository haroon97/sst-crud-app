const errorStatements = (method) => {
  switch (method) {
    case "GET":
      return {
        statusCode: 404,
        body: { error: "Not found" }
      }
    case "POST":
      return {
        statusCode: 400,
        body: { error: "Bad Request" }
      }
    default:
      break;
  }
}

export default errorStatements;