import { HttpResponse, http } from "msw";
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
  http.get("/api/users", () => {
    // Mock response data with a list of users
    return HttpResponse.json(users);
  }),

  // Mock POST request to add a new user
  http.post("/api/users", async ({ request }) => {
    const body = await request.json();
    const { firstName, lastName, birthDay, gender, isAdmin, isFunny } = body;

    // Validate the username (for demonstration purposes)
    if (!firstName || !lastName || !birthDay || !gender) {
      return new HttpResponse(null, {
        status: 400,
        statusText: "Please provide all Data...",
      });
    }
    // Mock a successful response with the newly added user
    return HttpResponse.json(
      {
        id: uuid(),
        ...body,
        isAdmin: isAdmin || false,
        isFunny: isFunny || true,
      },
      { status: 201 }
    );
  }),

  // Mock error response for GET request
  http.get("/api/users/error", (req, res, ctx) => {
    // Return a 500 status code to simulate a server error
    return res(ctx.status(500), ctx.json({ message: "Internal Server Error" }));
  }),
];

export { handlers };
