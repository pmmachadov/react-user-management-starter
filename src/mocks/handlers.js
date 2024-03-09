import { HttpResponse, http } from "msw";
import { v4 as uuid } from "uuid";

const users = [
  {
    id: uuid(),
    firstName: "fname1",
    lastName: "lName1",
    gender: "male",
    isAdmin: true,
    isFunny: true,
  },
  {
    id: uuid(),
    firstName: "fname2",
    lastName: "lName2",
    gender: "female",
    isAdmin: false,
    isFunny: true,
  },
  {
    id: uuid(),
    firstName: "fname3",
    lastName: "lName3",
    gender: "non-binary",
    isAdmin: false,
    isFunny: true,
  },
];
const handlers = [
  // Mock GET request to retrieve a list of users
  http.get("/api/users", () => {
    // Mock response data with a list of users
    return HttpResponse.json(users);
  }),

  // Mock POST request to add a new user
  http.post("/api/users", async ({ request }) => {
    const body = await request.json();
    const { firstName, lastName, gender, isAdmin, isFunny } = body;

    // Validate the username (for demonstration purposes)
    if (!firstName || !lastName || !gender) {
      return new HttpResponse(null, {
        status: 400,
        statusText: "Please provide all Data...",
      });
    }
    const myUser = {
      id: uuid(),
      ...body,
      isAdmin: isAdmin || false,
      isFunny: isFunny || true,
    };
    users.push(myUser);
    // Mock a successful response with the newly added user
    return HttpResponse.json(myUser, { status: 201 });
  }),

  // Mock error response for GET request
  http.get("/api/users/error", (req, res, ctx) => {
    // Return a 500 status code to simulate a server error
    return res(ctx.status(500), ctx.json({ message: "Internal Server Error" }));
  }),
];

export { handlers };
