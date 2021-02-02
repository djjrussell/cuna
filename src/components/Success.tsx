import React, { useState } from "react";
import Heading from "./HeadingMain";
import { Input } from "./Input";

const Success = () => {
  const [username, setUsername] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");

  const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (p: string) => {
    const errors = [];
    if (p.length < 8) {
      errors.push("Your password must be at least 8 characters");
    }
    if (p.search(/[a-z]/i) < 0) {
      errors.push("Your password must contain at least one letter.");
    }
    if (p.search(/[0-9]/) < 0) {
      errors.push("Your password must contain at least one digit.");
    }
    if (errors.length > 0) {
      alert(errors.join("\n"));
      return false;
    }
    return true;
  };

  const validateCredentials = () => {
    const emailIsValid = validateEmail(username);
    const pass1IsValid = validatePassword(pass1);
    const pass2IsValid = validatePassword(pass2);
    if (emailIsValid && pass1IsValid && pass2IsValid && pass1 === pass2) {
      alert("account created successfully");
    }
  };

  return (
    <React.Fragment>
      <Heading />
      <section>
        <article>
          <h2>Create Account</h2>
          <Input
            action={setUsername}
            id="username"
            type="text"
            text="Username"
          />
          <Input action={setPass1} id="pass1" type="text" text="Password" />
          <Input
            action={setPass2}
            id="pass2"
            type="text"
            text="Re-Enter Password"
          />
          <button
            className="button"
            id="createAccountButton"
            onClick={validateCredentials}
          >
            Create Account
          </button>
        </article>
      </section>
    </React.Fragment>
  );
};

export default Success;
