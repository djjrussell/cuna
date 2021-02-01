import React, { useState } from "react";
import "./../App.css";
import { Input } from "./Input";

const App = () => {
  const [price, setPrice] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [income, setIncome] = useState("");
  const [credit, setCredit] = useState("");

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
      }).then(r => {
        // tslint:disable-next-line:no-debugger
        debugger;
      });
    }
  };

  return (
    <React.Fragment>
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
          <input type="submit" value="Proceed" />
        </form>
      </section>
    </React.Fragment>
  );
};

export default App;
