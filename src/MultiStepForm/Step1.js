import React from "react";

export default function Step1({ formdata, setformdata }) {
  return (
    <>
      <div className="form-container">
        <input
          type="text"
          required
          placeholder="Enter First Name"
          value={formdata.fname}
          onChange={(event) => {
            setformdata({ ...formdata, fname: event.target.value });
          }}
        />{" "}
        <br />
        <input
          type="text"
          required
          placeholder="Enter Second Name"
          value={formdata.sname}
          onChange={(event) => {
            setformdata({ ...formdata, sname: event.target.value });
          }}
        />{" "}
        <br />
        <input
          type="number"
          required
          placeholder="Enter Number"
          value={formdata.number}
          onChange={(event) => {
            setformdata({ ...formdata, number: event.target.value });
          }}
        />
      </div>
    </>
  );
}
