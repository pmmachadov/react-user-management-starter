import { HttpResponse, http } from "msw"; // Imports necessary utilities from MSW to create responses and define handlers.
import { v4 as uuid } from "uuid"; // Imports the uuid function to generate unique identifiers for users.

// A mock list of users with generated IDs and various attributes.
const users = [
  {
    id: uuid(),
    firstName: "fname1",
    lastName: "lName1",
    birthDay: new Date(1999, 12, 25), // Note: months are 0-indexed in JavaScript Dates (December is 11, not 12)
    gender: "male",
    isAdmin: true,
    isFunny: true,
  },
  {
    id: uuid(),
    firstName: "fname2",
    lastName: "lName2",
    birthDay: new Date(1997, 11, 19), // Adjusted for correct month indexing.
    gender: "female",
    isAdmin: false,
    isFunny: true,
  },
  {
    id: uuid(),
    firstName: "fname3",
    lastName: "lName3",
    birthDay: new Date(2000, 12, 1), // Adjusted for correct month indexing.
    gender: "non-binary",
    isAdmin: false,
    isFunny: true,
  },
];

// Defines the handlers for various API endpoints.
const handlers = [
  // Handler for GET requests to "/api/users", returning a list of users.
  http.get("/api/users", () => {
    return HttpResponse.json(users);
  }),

  // Handler for POST requests to "/api/users", simulating user creation.
  http.post("/api/users", async ({ request }) => {
    const body = await request.json();
    const { firstName, lastName, birthDay, gender, isAdmin, isFunny } = body;

    // Simple validation to check required fields.
    if (!firstName || !lastName || !birthDay || !gender) {
      return new HttpResponse(null, {
        status: 400,
        statusText: "Please provide all required data.",
      });
    }

    // Simulates adding a new user and returns it with a 201 status code.
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

  // Handler to simulate an error response for "/api/users/error".
  http.get("/api/users/error", (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ message: "Internal Server Error" })
    );
  }),
];

export { handlers }; // Exports the handlers to be used with MSW's setupWorker or setupServer.
