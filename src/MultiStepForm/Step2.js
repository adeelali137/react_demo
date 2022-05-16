import React from "react";

export default function Step2({ formdata, setformdata }) {
  return (
    <>
      <div className="form-container">
        <input
          type="email"
          required
          placeholder="Enter Email..."
          value={formdata.email}
          onChange={(event) => {
            setformdata({ ...formdata, email: event.target.value });
          }}
        />{" "}
        <br />
        <input
          type="password"
          required
          placeholder="Enter Password"
          value={formdata.password}
          onChange={(event) => {
            setformdata({ ...formdata, password: event.target.value });
          }}
        />{" "}
        <br />
        <input
          type="password"
          required
          placeholder="Enter Confrim Password"
          value={formdata.confrimpassword}
          onChange={(event) => {
            setformdata({ ...formdata, confrimpassword: event.target.value });
          }}
        />{" "}
        <br />
      </div>
    </>
  );
}
