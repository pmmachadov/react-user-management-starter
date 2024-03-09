# Welcome to the User Management System Class! 👥🔧

## Introduction

Welcome to today's class on building a User Management System using React and MSW (Mock Service Worker)! In this class, we'll be learning how to make API requests using `fetch()` in React and how to mock those requests using MSW. By the end of this workshop, you'll have built a fully functional User Management System that fetches and manages user data from a mock API.

## Prerequisites

Before getting started, make sure you have the following installed on your computer:

- Node.js (https://nodejs.org/)
- Git (https://git-scm.com/)

## Getting Started

1. **Clone the Repository**: Clone this repository to your local machine using the following command:

   ```
   git clone git@github.com:Migracode-Barcelona/react-user-management-starter.git user-management-system
   ```

2. **Install Dependencies**: Navigate into the project directory and install the necessary dependencies using the following command:

   ```
   cd user-management-system
   npm install
   ```

3. **Start the Development Server**: Start the development server to view the app in your browser:

   ```
   npm start
   ```

4. **Mock Service Worker (MSW)**: MSW is already configured in this project to mock API requests. You'll find the MSW handlers in the `src/mocks/handlers.js` file.

## Tasks for Today

### Task 1: Set Up the React App

- [ ] Clone the repository to your local machine.
- [ ] Install the necessary dependencies using `npm install`.
- [ ] Start the development server using `npm start`.

### Task 2: Explore the Project Structure

- [ ] Take a moment to explore the project structure and familiarize yourself with the files and folders.

### Task 3: Implement the User Management System

**Objective:** Implement the User Management System to fetch and manage user data from a mock API.

#### Instructions:

1. **Display Users:**

   - Open the `src/App.jsx` file.
   - Implement logic to fetch the list of users from the mock API using `fetch()` and display them in the app.
   - Display each user's details such as ID and username in a user-friendly format.

2. **Add New User:**

   - Implement functionality to add a new user to the system.
   - Create a form or input field where users can enter the username of the new user.
   - Use `fetch()` to send a POST request to the mock API with the username of the new user.
   - Update the user list to include the newly added user.

3. **Handle Errors:**

   - Implement error handling to display meaningful error messages if there are any issues with fetching or adding users.
   - Test different error scenarios (e.g., network errors, server errors) to ensure error handling is working correctly.

4. **User Interface Design:**

   - Design the user interface to make it visually appealing and user-friendly.
   - Use CSS or a UI library (e.g., Bootstrap, Material-UI) to style the components and layout.

5. **Testing:**
   - Test the User Management System to ensure it works as expected in different scenarios (e.g., fetching users, adding users, error handling).
   - Verify that the user interface looks and functions correctly.

#### Additional Tips:

- Break down the implementation into smaller tasks and tackle them one at a time.
- Refer to React documentation and online resources for guidance on implementing specific features or handling common tasks.
- Feel free to customize the user interface and functionality based on your preferences and requirements.

### Task 4: Mock API Requests with MSW

- [ ] Open the `src/mocks/handlers.js` file and explore the provided MSW handlers.
- [ ] Test different scenarios (success, error) by enabling/disabling the handlers as needed.

### Task 5: Test Your App

- [ ] Test your app to ensure it works as expected in different scenarios (e.g., successful response, error response).

### Task 6: Reflect and Discuss

- [ ] Reflect on your learnings from today's workshop.
- [ ] Discuss any challenges faced and strategies for overcoming them.
- [ ] Share your experience with the class.

## Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [MSW Documentation](https://mswjs.io/docs/)
