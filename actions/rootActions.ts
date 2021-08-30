import * as express from 'express'

export function rootAction(req: express.Request, res: express.Response) {
  return res.status(200).json({
    message: "hello from root"
  })
}
