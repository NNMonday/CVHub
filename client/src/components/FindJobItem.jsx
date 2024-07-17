import React from 'react';
import { useNavigate } from 'react-router-dom';

function FindJobItem(props) {
    const { companyId, companyName, location, openJobs } = props;
    const navigate = useNavigate();

    const handleOpenPositionClick = () => {
        navigate(`/companies/${companyId}`);
    };

    return (
        <div className='d-flex justify-content-between' style={{ padding: "32px" }}>
            <div className='company' style={{ width: "341px", height: "68px" }}>
                <div className='d-flex justify-content-between align-items-center'>
                    <img alt='company logo' src='/Company.svg' style={{ width: "68px" }} />
                    <div className='d-flex justify-content-between flex-column' style={{ width: "253px", height: "66px" }}>
                        <div className='company_Name fw-medium' style={{ fontSize: "20px" }}>
                            {companyName}
                        </div>
                        <div className='company_info text-secondary' style={{ fontSize: "14px" }}>
                            <div className='d-flex justify-content-between'>
                                <div className='location'>
                                    <i className="bi bi-geo-alt"></i> {location}
                                </div>
                                <div className='price'>
                                    <i className="bi bi-briefcase" style={{ marginRight: "3px" }}></i> {openJobs} - Open - Job
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button 
                className='openPosition fw-medium btn' 
                style={{ width: "193px", height: "48px", background: "#E7F0FA", color: "#0A65CC" }}
                onClick={handleOpenPositionClick}
            >
                Open Position <i className="bi bi-arrow-right"></i>
            </button>
        </div>
    );
}

export default FindJobItem;
