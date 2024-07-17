import PropTypes from "prop-types";

const SingleCompanyJob = ({
  className = "",
  employersLogo,
  dribbble,
  california,
  suniorUXDesigner,
  fullTime,
  k80kmonth,
  showBadge,
}) => {
  return (
    <div
      style={{
        flex: "1",
        borderRadius: "12px",
        backgroundColor: "#fff",
        border: "1px solid #edeff5",
        boxSizing: "border-box",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "30px 31px",
        gap: "24px",
        minWidth: "318px",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "16px",
        color: "#18191c",
        fontFamily: "Inter",
      }}
      className={className}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "16px",
        }}
      >
        <div
          style={{
            borderRadius: "4px",
            backgroundColor: "#1e60c6",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "16px",
          }}
        >
          <img
            style={{
              height: "24px",
              width: "24px",
              position: "relative",
              overflow: "hidden",
              flexShrink: "0",
            }}
            alt=""
            src={employersLogo}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "6px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "8px",
            }}
          >
            <div
              style={{
                position: "relative",
                lineHeight: "24px",
                fontWeight: "500",
                display: "inline-block",
                minWidth: "57px",
              }}
            >
              {dribbble}
            </div>
            {showBadge && (
              <div
                style={{
                  borderRadius: "52px",
                  backgroundColor: "#ffeded",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "3px 12px",
                  fontSize: "14px",
                  color: "#ff4f4f",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    lineHeight: "20px",
                    display: "inline-block",
                    minWidth: "59px",
                  }}
                >
                  Featured
                </div>
              </div>
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "6px",
              fontSize: "14px",
              color: "#939aad",
            }}
          >
            <img
              style={{
                height: "18px",
                width: "18px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
              }}
              loading="lazy"
              alt=""
              src="/fimappin.svg"
            />
            <div
              style={{
                position: "relative",
                lineHeight: "20px",
                display: "inline-block",
                minWidth: "38px",
              }}
            >
              {california}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "8px",
          fontSize: "20px",
          color: "#192033",
        }}
      >
        <h3
          style={{
            margin: "0",
            alignSelf: "stretch",
            position: "relative",
            fontSize: "inherit",
            lineHeight: "32px",
            fontWeight: "500",
            fontFamily: "inherit",
          }}
        >
          {suniorUXDesigner}
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "8px",
            fontSize: "14px",
            color: "#636a80",
          }}
        >
          <div
            style={{
              position: "relative",
              lineHeight: "20px",
              display: "inline-block",
              minWidth: "60px",
            }}
          >
            {fullTime}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "8px 0px 0px",
            }}
          >
            <img
              style={{ width: "4px", height: "4px", position: "relative" }}
              loading="lazy"
              alt=""
              src="/devider.svg"
            />
          </div>
          <div
            style={{
              position: "relative",
              lineHeight: "20px",
              display: "inline-block",
              minWidth: "72px",
            }}
          >
            {k80kmonth}
          </div>
        </div>
      </div>
    </div>
  );
};

SingleCompanyJob.propTypes = {
  className: PropTypes.string,
  employersLogo: PropTypes.string,
  dribbble: PropTypes.string,
  california: PropTypes.string,
  suniorUXDesigner: PropTypes.string,
  fullTime: PropTypes.string,
  k80kmonth: PropTypes.string,
  showBadge: PropTypes.bool,
};

export default SingleCompanyJob;