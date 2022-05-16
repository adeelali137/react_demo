import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

export default function Form() {
  const [page, setpage] = useState(0);
  const header = ["Step1", "Step2", "Step3"];

  const [formdata, setformdata] = useState({
    fname: "",
    sname: "",
    number: "",
    email: "",
    password: "",
    confrimpassword: "",
    state: "",
    country: "",
    zipcode: "",
  });

  const displayPage = () => {
    if (page === 0) {
      return <Step1 formdata={formdata} setformdata={setformdata} />;
    } else if (page === 1) {
      return <Step2 formdata={formdata} setformdata={setformdata} />;
    } else {
      return <Step3 formdata={formdata} setformdata={setformdata} />;
    }
  };

  return (
    <>
      <div className="form">
        <div className="header">
          <h2>{header[page]}</h2>
        </div>
        <div className="form-fields">{displayPage()}</div>
        <div className="form-buttons">
          <button
            disabled={page === 0}
            onClick={() => {
              setpage(page - 1);
            }}
          >
            Prev
          </button>
          <button
            disabled={false}
            onClick={() => {
              setpage(page + 1);
              if (page === header.length - 1) {
                console.log(formdata);
                alert("Submitted");
              }
            }}
          >
            {page === header.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </>
  );
}
