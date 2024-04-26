import { server } from "../src/index"

describe("index.js", () => {
  afterAll(() => {
    server.close()
  })

  test("Runs on port 5555 for testing", () => {
    expect(server.address()).toEqual({
      address: "::",
      family: "IPv6",
      port: 5555,
    })
  })
})
