import React from "react";

export default function MinimalFooter() {
  return (
    <div
      className="fixed-bottom bg-white py-3"
      style={{ borderTop: "1px solid #767f8c" }}
    >
      <p className="m-0 text-secondary text-center">
        @ 2024 CVHub - Job Portal. All rights Reserved
      </p>
    </div>
  );
}
