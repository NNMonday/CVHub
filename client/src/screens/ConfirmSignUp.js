import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SERVER_URL from "../config.js";
import toast from "react-hot-toast";
import PerformRequest from "../utilities/PerformRequest.js";

export default function ConfirmSignUp() {
  const { token } = useParams();
  const hasMounted = useRef(false);
  const navigate = useNavigate();
  const { OriginalRequest } = PerformRequest();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        toast.promise(
          (async () => {
            // Add some delay here if needed
            await new Promise((resolve) => setTimeout(resolve, 1000));

            const response = await fetch(`${SERVER_URL}auth/verify/${token}`, {
              method: "PATCH",
            });

            if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.error);
            }

            const data = await response.json();
            toast.success("Verification successful!");
            // Assuming you want to redirect to "/account/setting/personal" after successful verification
            navigate("/account/setting/personal");

            return data;
          })(),
          {
            loading: "Verifying...",
            success: (data) => `${data.data}`,
            error: (err) => `${err.toString()}`,
          },
          {
            success: {
              duration: 1000,
            },
          }
        );
      } catch (error) {
        console.log(error.message);
        toast.error(`Verification failed: ${error.message}`);
      }
    };

    if (hasMounted.current) {
      verifyUser();
    } else {
      hasMounted.current = true;
    }
  }, [token, navigate, OriginalRequest]);

  return (
    <div className="w-full h-screen bg-primaryBg flex items-center justify-center">
      <h1 className="text-textSecondary text-center text-4xl">
        Verifying your account...
      </h1>
    </div>
  );
}
