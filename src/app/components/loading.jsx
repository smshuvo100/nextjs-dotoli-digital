"use client";
import ClockLoader from "react-spinners/ClockLoader";

export default function Loading() {
  return (
    <div className="loading-wrapper" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <ClockLoader
        color="var(--primary)"
        size={100}
        cssOverride={{
          borderColor: "var(--primary)"
        }}
      />
    </div>
  );
}
