const request = require("supertest")
const app = require("../app")

describe("GET /api/movies", () => {
  it("should return all movies", async () => {
    const response = await request(app).get("/api/movies")

    expect(response.headers["content-type"]).toMatch(/json/)
    expect(response.status).toEqual(200)
  })

  it("should return status 200 for id 1", async () => {
    const response = await request(app).get("/api/movies/1")
    expect(response.status).toBe(200)
  })

  it("should return JSON format for id 1", async () => {
    const response = await request(app).get("/api/movies/1")
    expect(response.headers["content-type"]).toMatch(/application\/json/)
  })

  it("should return status 404 for id 0", async () => {
    const response = await request(app).get("/api/movies/0")
    expect(response.status).toBe(404)
  })
})
