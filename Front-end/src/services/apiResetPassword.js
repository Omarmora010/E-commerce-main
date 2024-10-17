import toast from "react-hot-toast";
import { backendUrl } from "../App";

export async function ForgotPassAPI(email) {
  const response = await fetch(backendUrl + "/api/user/forgotpassword", {
    method: "POST", // Specify the method
    headers: {
      "Content-Type": "application/json", // Ensure the server knows you're sending JSON
    },
    body: JSON.stringify(email), // Send the user data as JSON in the request body
  });

  const res = await response.json();

  const { data, status } = res;

  if (!response.ok) {
    toast.error(`${res.message}`);
    throw new Error("Failed to send mail: " + res.message);
  }

  return { data, status }; // Return the response data
}

export async function ResetPassAPI(reqbody, token) {
  const response = await fetch(
    backendUrl + `/api/user/resetpassword/${token}`,
    {
      method: "PATCH", // Specify the method
      headers: {
        "Content-Type": "application/json", // Ensure the server knows you're sending JSON
      },
      body: JSON.stringify(reqbody), // Send the user data as JSON in the request body
    }
  );

  const data = await response.json();
  const { message, status } = data;
  if (!response.ok) {
    toast.error(`${data.message}`);
    throw new Error("Failed to reset password: " + data.message);
  }

  return { message, status }; // Return the response data
}
