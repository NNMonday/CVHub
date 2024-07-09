import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import PerformRequest from "../utilities/PerformRequest.js";
import { login } from "../redux/auth.js";

export default function ConfirmSignUp() {
  const { token } = useParams();
  const hasMounted = useRef(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { OriginalRequest } = PerformRequest();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const result = await toast.promise(
          (async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            const response = await fetch(
              `${process.env.REACT_APP_BACKEND_URL}auth/verify/${token}`,
              {
                method: "PATCH",
              }
            );

            if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.error);
            }

            const data = await response.json();
            console.log("Verification Data:", data);

            toast.success("Verification successful!");

            // Dispatch login action with the received data
            dispatch(login(data));

            // Navigate to home page after successful login
            navigate("/account/setup/personal");

            return data;
          })(),
          {
            loading: "Verifying...",
            success: (data) => `${data.message}`,
            error: (err) => `Verification failed: ${err.toString()}`,
          },
          {
            success: {
              duration: 1000,
            },
          }
        );
      } catch (error) {
        console.log("Verification/Login Error:", error.message);
        toast.error(`Verification failed: ${error.message}`);
      }
    };

    if (hasMounted.current) {
      verifyUser();
    } else {
      hasMounted.current = true;
    }
  }, [token, OriginalRequest, dispatch, navigate]);

  return (
    <div className="w-full h-screen bg-primaryBg flex items-center justify-center">
      <h1 className="text-textSecondary text-center text-4xl">
        Verifying your account...
      </h1>
    </div>
  );
}
