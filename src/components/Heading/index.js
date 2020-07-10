import React from "react"

const Heading = ({ title, description }) => {
  return (
    <div
      style={{
        padding: "20px 0",
        display: "flex",
        alignItems: "center",
        backgroundColor: "gray",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "200px",
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          margin: "0 0 0 400px",
          backgroundColor: "blue",
        }}
      >
        <h2>{title}</h2>
      </div>
      <div
        style={{
          width: "100%",
          height: "100px",
          display: "flex",
          backgroundColor: "red",
          alignItems: "flex-end",
          flexDirection: "column",
          margin: "0 200px 0 0",
        }}
      >
        <h3>{description}</h3>
      </div>
    </div>
  )
}

export default Heading
