import express from "express";
import { generatePin } from "./utils.js";
import { ExpressPeerServer } from "peer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

export const server = app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`)
);

const options = {
  debug: true,
  proxied: true,
  allow_discovery: true,
  key: process.env.KEY,
  generateClientId: generatePin,
};

export const peerServer = ExpressPeerServer(server, options);

app.use("/peerjs", peerServer);

export default app;
