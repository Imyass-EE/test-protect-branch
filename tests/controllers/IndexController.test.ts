import request from "supertest"
import app, { server } from "../../src/index"

describe("IndexController", () => {
  
  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation(() => {})
    jest.resetModules()
  })

  afterAll(() => {
    server.close()
  })

  it("should return status 200 and 'Test App: API Service' message", async () => {
    const response = await request(app).get("/")
    expect(response.status).toBe(200)
    expect(response.body).toEqual({
      status: "success",
      message: "Test App: API Service",
    })
  })
})
