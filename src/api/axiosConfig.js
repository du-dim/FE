import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        toast.error("Unauthorized access. Please provide valid credentials.");
      } else if (error.response.status === 403) {
        toast.error(
          "Forbidden access. You do not have permission to access this resource."
        );
      } else {
        toast.error("An unexpected error occurred.");
      }
    } else {
      toast.error("Failed to fetch data from the server.");
    }
    return Promise.reject(error);
  }
);

export default axios;
