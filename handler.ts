import * as serverless from "serverless-http";
import * as express from "express";
import { APIGatewayEventRequestContext, APIGatewayProxyEvent, Context } from "aws-lambda";

const app = express();

interface CustomRequest extends express.Request {
  context: APIGatewayEventRequestContext
}

app.get("/", (req, res: express.Response) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/hello", (req, res: express.Response) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.use((req, res: express.Response) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

export const handler = serverless(app, {
  request: (req: CustomRequest, event: APIGatewayProxyEvent, _context: Context) => {
    req.context = event.requestContext
  }
});
