import React, { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as faBookmarkRegular } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import PerformRequest from "../utilities/PerformRequest.js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BookmarkButton = ({ jobId, isBookmarkedInitially }) => {
  const auth = useSelector((state) => state.auth);
  const [isBookmarked, setIsBookmarked] = useState(isBookmarkedInitially);
  const OriginalRequest = useCallback(PerformRequest().OriginalRequest, []);
  const navigate = useNavigate();
  const handleBookmarkClick = async () => {
    if (!auth.isLoggedIn) {
      navigate("/login");
      return;
    } else {
      const action = isBookmarked ? "remove" : "add";
      try {
        const response = await OriginalRequest(
          `jobSekker/setting/savedJob/${action}`,
          "POST"
        );
        if (response.ok) {
          const updatedJobSeeker = await response.json();
          setIsBookmarked(updatedJobSeeker.savedJobs.includes(jobId));
        } else {
          console.error("Failed to update bookmark status");
        }
      } catch (error) {
        console.error("Error updating bookmark:", error);
      }
    }
  };

  return (
    <div
      className="py-2 px-3 me-2 save-container"
      style={{
        borderRadius: "6px",
        color: isBookmarked ? "black" : "initial",
      }}
      onClick={handleBookmarkClick}
    >
      <FontAwesomeIcon icon={isBookmarked ? faBookmark : faBookmarkRegular} />
    </div>
  );
};

export default BookmarkButton;
