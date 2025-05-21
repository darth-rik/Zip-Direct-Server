import app, { server } from "./index.mjs";
import request from "supertest";

describe("GET /peerjs", () => {
  afterAll((done) => {
    server.close(done);
  });
  it("should respond with a status of 200", async () => {
    const res = await request(app).get("/peerjs");
    expect(res.status).toBe(200);
  });
  it("should respond with a json object in the body", async () => {
    const res = await request(app).get("/peerjs");
    const resObject = {
      name: "PeerJS Server",
      description:
        "A server side element to broker connections between PeerJS clients.",
      website: "https://peerjs.com/",
    };
    expect(res.body).toStrictEqual(resObject);
  });
});

describe(`GET /peerjs/${process.env.KEY}/id`, () => {
  beforeAll((done) => {
    server.listen(done);
  });
  afterAll((done) => {
    server.close(done);
  });
  it("should respond with a 200 status code", async () => {
    const res = await request(app).get(`/peerjs/${process.env.KEY}/id`);
    expect(res.status).toBe(200);
  });
});
