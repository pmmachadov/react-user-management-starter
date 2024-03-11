import { toast } from 'react-toastify'; // Importing the toast function from react-toastify for user notifications.

export const showToast = (message, isError = false) => {
    // Defines a utility function showToast that displays a toast notification based on the message and type of toast (error or success).
    if (isError) {
        // If isError is true, display an error toast.
        toast.error(message); // Calls toast.error to display an error notification with the provided message.
    } else {
        // If isError is false (default case), display a success toast.
        toast.success(message); // Calls toast.success to display a success notification with the provided message.
    }
};
