import { getUsersService } from "../../src/services/UsersService"

describe("getUsersService", () => {
  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation(() => {})
    jest.resetModules()
  })
  it("should fetch users successfully", async () => {
    const expectedUsers = [
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
    ]

    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(expectedUsers),
    } as any)

    const users = await getUsersService()

    expect(users).toEqual(expectedUsers)
    expect(global.fetch).toHaveBeenCalledTimes(1)
    expect(global.fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users",
    )
  })

  it("should handle fetch error", async () => {
    const expectedError = new Error("Failed to fetch users")

    jest.spyOn(global, "fetch").mockRejectedValueOnce(expectedError)

    const error = await getUsersService().catch((error) => error)

    expect(error).toEqual(expectedError)
    expect(global.fetch).toHaveBeenCalledTimes(1)
    expect(global.fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users",
    )
  })
})
