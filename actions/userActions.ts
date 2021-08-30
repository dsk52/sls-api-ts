import * as express from 'express'

export function userListAction(req: express.Request, res: express.Response) {
  return res.status(200).json({
    message: "user list"
  })
}
