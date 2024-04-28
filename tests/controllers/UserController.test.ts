import request from "supertest"
import app, { server } from "../../src/index"
import { getUsersService } from "../../src/services/UsersService"

jest.mock("../../src/services/UsersService", () => ({
  getUsersService: jest.fn(),
}))

describe("UserController", () => {
  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation(() => {})
    jest.resetModules()
  })

  afterAll(() => {
    server.close()
  })

  it("should return a list of users", async () => {
    ;(getUsersService as jest.Mock).mockResolvedValue([
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
      },
    ])

    const response = await request(app).get("/user")
    expect(response.status).toBe(200)
    expect(response.body).toEqual([
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
      },
    ])
  })

  it("should return an empty list of users", async () => {
    ;(getUsersService as jest.Mock).mockResolvedValue([])

    const response = await request(app).get("/user")
    expect(response.status).toBe(200)
    expect(response.body).toEqual([])
  })
})
