import React from "react";

function YourAccount() {
  const email = localStorage.getItem("userEmail");

  return (
    <div>
      <h2>Your Account</h2>
      <p>Welcome, {email}</p>
    </div>
  );
}

export default YourAccount;
