import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./../App.css";
import Heading from "./HeadingMain";
import { Input } from "./Input";

const Main = () => {
  const [price, setPrice] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [income, setIncome] = useState("");
  const [credit, setCredit] = useState("");
  const history = useHistory();

  const isValid = (): boolean => {
    return (
      price !== "" &&
      make !== "" &&
      model !== "" &&
      income !== "" &&
      credit !== ""
    );
  };

  const getData = () => {
    return {
      credit,
      income,
      price
    };
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (isValid()) {
      const data = getData();

      fetch("/api/isQualified", {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      })
        .then(response => response.json())
        .then(json => {
          if (json.isQualified) {
            history.push("/success");
          } else {
            history.push("/failure");
          }
        });
    }
  };

  return (
    <React.Fragment>
      <Heading />
      <section>
        <form onSubmit={event => handleSubmit(event)}>
          <Input
            action={setPrice}
            id="price"
            type="number"
            text="Price"
            min="1"
            step="any"
          />
          <Input action={setMake} id="make" type="text" text="Make" />
          <Input action={setModel} id="model" type="text" text="Model" />
          <Input
            action={setIncome}
            id="income"
            type="number"
            text="Estimated Yearly Income"
            min="0"
            step="any"
          />
          <Input
            action={setCredit}
            id="credit"
            type="number"
            text="Estimated Credit Score"
            min="300"
            max="850"
            step="1"
          />
          <input
            className="button"
            id="submitButton"
            type="submit"
            value="Proceed"
          />
        </form>
      </section>
    </React.Fragment>
  );
};

export default Main;
