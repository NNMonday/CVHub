import React from "react";
import AccountSetup from "../../../layouts/AccountSetupLayout";
import FinishImg from "../../../assets/Finish.png";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Finish() {
  return (
    <AccountSetup progress={100}>
      <div className="vh-100 d-flex align-items-center justify-content-center flex-column">
        <div>
          <img src={FinishImg} alt="Finish" style={{ width: 100 }} />
        </div>
        <p className="fw-bold mt-4 fs-4">
          Congratulations, your profile is 100% completed!
        </p>
        <p className="text-center text-secondary" style={{ maxWidth: "400px" }}>
          Donec hendrerit, ante mattis pellentesque eleifend, tortor urna
          malesuada ante, eget aliquam nulla augue hendrerit ligula. Nunc mauris
          arcu, mattis sed sem vitae.
        </p>
        <div>
          <Button className="bg-primary-subtle border-0 text-primary">
            View Dashboard
          </Button>
          <Button className="ms-3">
            Post Job <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </div>
      </div>
    </AccountSetup>
  );
}
