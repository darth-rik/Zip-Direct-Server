import EventEmitter from "events";
import { generatePin } from "../utils";

const mockExpressPeerjsServer = jest.fn(() => {
  const ev = new EventEmitter();

  const middleware = (req, res, next) => {
    const id = req.url.split("/")[1];
    if (req.method === "GET") {
      if (!id) {
        res.status(200).json({ msg: "Mock PeerJs Server has started" });
        return;
      }

      const pin = generatePin();
      res.status(200).type("text/html").send(`<h1>${pin}</h1>`);
      return;
    }

    next();
  };

  Object.assign(middleware, ev);
  return middleware;
});

export const ExpressPeerServer = mockExpressPeerjsServer;
