import { setupWorker } from "msw/browser"; // Imports the setupWorker function from MSW, specifically for browser environments.
import { handlers } from "./handlers"; // Imports handlers, which are user-defined request handlers that describe how to respond to certain network requests.

export const worker = setupWorker(...handlers); // Initializes an MSW worker with the provided handlers and exports it.
