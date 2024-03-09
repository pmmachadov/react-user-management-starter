import { http } from "msw";

const handlers = [
  // Mock GET request to retrieve a list of users
  http.get("/api/users", (req, res, ctx) => {
    // Mock response data with a list of users
    return res(
      ctx.json([
        { id: 1, username: "user1" },
        { id: 2, username: "user2" },
        // Add more user objects as needed
      ])
    );
  }),

  // Mock POST request to add a new user
  http.post("/api/users", (req, res, ctx) => {
    const { username } = req.body;
    // Validate the username (for demonstration purposes)
    if (!username || username.trim() === "") {
      return res(
        ctx.status(400), // Bad Request
        ctx.json({ message: "Username is required" })
      );
    }
    // Mock a successful response with the newly added user
    return res(
      ctx.status(201), // Created
      ctx.json({ id: Math.random(), username }) // Assign a random ID for simplicity
    );
  }),

  // Mock error response for GET request
  http.get("/api/users/error", (req, res, ctx) => {
    // Return a 500 status code to simulate a server error
    return res(ctx.status(500), ctx.json({ message: "Internal Server Error" }));
  }),
];

export { handlers };
