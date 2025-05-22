import request from "supertest";
import app, { server } from "./index.mjs";

afterAll((done) => {
  server.close(done);
});
describe("GET /peerjs", () => {
  it("should respond with a status of 200", async () => {
    const res = await request(app).get("/peerjs");
    expect(res.status).toBe(200);
  });
  it("should respond with a json object in the body", async () => {
    const res = await request(app).get("/peerjs");
    const resObject = {
      msg: `Mock PeerJs Server has started`,
    };
    expect(res.body).toStrictEqual(resObject);
  });
});

describe(`GET /peerjs/id`, () => {
  it("should respond with a six digit code", async () => {
    const res = await request(app).get(`/peerjs/id`);
    expect(res.text).toMatch(/\d{6}/);
  });
});
