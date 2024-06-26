import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import PerformRequest from '../utilities/PerformRequest';
import { useNavigate } from 'react-router-dom';
import { useCallback } from "react";

const BookmarkButton = ({ jobId, userId }) => {
  const OriginalRequest = useCallback(PerformRequest().OriginalRequest, []);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookmarkState = async () => {
      try {
        const data = await OriginalRequest(`jobSekker/savedjobs`, 'GET');
        if (data && data.includes(jobId)) {
          setIsBookmarked(true);
        }
      } catch (error) {
        console.error('Error fetching bookmark state:', error);
      }
    };

    fetchBookmarkState();
  }, [OriginalRequest, jobId]);

  
  const handleBookmarkClick = async () => {
    try {
      if (isBookmarked) {
        await OriginalRequest(`jobSekker/savedjobs/${jobId}`, 'DELETE');
        setIsBookmarked(false);
      } else {
        await OriginalRequest(`jobSekker/savedjobs`, 'POST', { jobId }); // Pass jobId as body here
        setIsBookmarked(true);
      }
    } catch (error) {
      console.error('Error updating bookmark state:', error);
    }
  };
  

  return (
    <div
      className="py-2 px-3 me-2 save-container"
      style={{
        borderRadius: '6px',
        color: isBookmarked ? 'black' : 'initial',
      }}
      onClick={handleBookmarkClick}
    >
      <FontAwesomeIcon icon={isBookmarked ? faBookmark : faBookmarkRegular} />
    </div>
  );
};

export default BookmarkButton;
