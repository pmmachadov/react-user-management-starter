import { http } from "msw";
import { v4 as uuid } from "uuid";
const users = [
  {
    id: uuid(),
    firstName: "fname1",
    lastName: "lName1",
    birthDay: new Date(1999, 12, 25),
    gender: "male",
    isAdmin: true,
    isFunny: true,
  },
  {
    id: uuid(),
    firstName: "fname2",
    lastName: "lName2",
    birthDay: new Date(1997, 11, 19),
    gender: "female",
    isAdmin: false,
    isFunny: true,
  },
  {
    id: uuid(),
    firstName: "fname3",
    lastName: "lName3",
    birthDay: new Date(2000, 12, 1),
    gender: "non-binary",
    isAdmin: false,
    isFunny: true,
  },
];
const handlers = [
  // Mock GET request to retrieve a list of users
  http.get("/api/users", (req, res, ctx) => {
    // Mock response data with a list of users
    return res(ctx.json(users));
  }),

  // Mock POST request to add a new user
  http.post("/api/users", (req, res, ctx) => {
    const { firstName, lastName, birthDay, gender, isAdmin, isFunny } =
      req.body;
    // Validate the username (for demonstration purposes)
    if (!firstName || !lastName || !birthDay || !gender) {
      return res(
        ctx.status(400), // Bad Request
        ctx.json({ message: "Please provide all Data..." })
      );
    }
    // Mock a successful response with the newly added user
    return res(
      ctx.status(201), // Created

      ctx.json({
        id: uuid(),
        ...req.body,
        isAdmin: isAdmin || false,
        isFunny: isFunny || true,
      }) // Assign a random ID for simplicity
    );
  }),

  // Mock error response for GET request
  http.get("/api/users/error", (req, res, ctx) => {
    // Return a 500 status code to simulate a server error
    return res(ctx.status(500), ctx.json({ message: "Internal Server Error" }));
  }),
];

export { handlers };
