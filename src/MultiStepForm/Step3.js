import React from "react";

export default function Step3({ formdata, setformdata }) {
  return (
    <>
      <div className="form-container">
        <input
          type="text"
          name=""
          required
          placeholder="State"
          value={formdata.state}
          onChange={(event) => {
            setformdata({ ...formdata, state: event.target.value });
          }}
        />{" "}
        <br />
        <input
          type="text"
          name=""
          required
          placeholder="Country"
          value={formdata.country}
          onChange={(event) => {
            setformdata({ ...formdata, country: event.target.value });
          }}
        />{" "}
        <br />
        <input
          type="text"
          name=""
          required
          placeholder="Zip Code"
          value={formdata.zipcode}
          onChange={(event) => {
            setformdata({ ...formdata, zipcode: event.target.value });
          }}
        />
      </div>
    </>
  );
}
