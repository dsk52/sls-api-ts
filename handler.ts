import * as serverless from "serverless-http";
import * as express from "express";
import { APIGatewayEventRequestContext, APIGatewayProxyEvent, Context } from "aws-lambda";
import { userListAction } from './actions/userActions';
import { rootAction } from './actions/rootActions'

const app = express();

interface CustomRequest extends express.Request {
  context: APIGatewayEventRequestContext
}

app.get("/", (req, res: express.Response) => rootAction(req, res));
app.get("/users", (req, res: express.Response) => userListAction(req, res));

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
