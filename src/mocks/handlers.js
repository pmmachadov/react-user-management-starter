import { HttpResponse, http } from "msw";
import { v4 as uuid } from "uuid";
import { users } from "../utils/UserProfiles";
import { formatBirthDay } from "../utils/dateUtils";


const handlers = [
  http.get("/api/users", () => {
    // Map through users to format birthDay before sending
    const modifiedUsers = users.map(user => ({
      ...user,
      birthDay: formatBirthDay(user.birthDay),
    }));
    return HttpResponse.json(modifiedUsers);
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