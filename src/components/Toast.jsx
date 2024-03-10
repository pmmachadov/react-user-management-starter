import { toast } from 'react-toastify';

export const showToast = (message, isError = false) => {
    if (isError) {
        toast.error(message);
    } else {
        toast.success(message);
    }
};
