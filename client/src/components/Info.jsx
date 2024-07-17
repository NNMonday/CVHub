import PropTypes from "prop-types";

const Info = ({ className = "", calendarBlank, foundedIn, june2021 }) => {
  return (
    <div
      style={{
        flex: "1",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "16px",
        minWidth: "148px",
        textAlign: "left",
        fontSize: "12px",
        color: "#767f8c",
        fontFamily: "Inter",
      }}
      className={className}
    >
      <img
        style={{ width: "32px", height: "32px", position: "relative" }}
        alt=""
        src={calendarBlank}
      />
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "4px",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            position: "relative",
            lineHeight: "18px",
            textTransform: "uppercase",
          }}
        >
          {foundedIn}
        </div>
        <div
          style={{
            alignSelf: "stretch",
            position: "relative",
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "500",
            color: "#18191c",
          }}
        >
          {june2021}
        </div>
      </div>
    </div>
  );
};

Info.propTypes = {
  className: PropTypes.string,
  calendarBlank: PropTypes.string,
  foundedIn: PropTypes.string,
  june2021: PropTypes.string,
};

export default Info;