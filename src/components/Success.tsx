import React, { useState } from "react";
import Heading from "./HeadingMain";
import { Input } from "./Input";

const Success = () => {
  const [username, setUsername] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [displayToast, setDisplayToast] = useState(true);

  const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (p: string, doAlert: boolean) => {
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
      if (doAlert) {
        alert(errors.join("\n"));
      }
      return false;
    }
    return true;
  };

  const validateCredentials = () => {
    const emailIsValid: boolean = validateEmail(username);
    const pass1IsValid: boolean = validatePassword(pass1, false);
    const pass2IsValid: boolean = validatePassword(pass2, true);
    if (emailIsValid && pass1IsValid && pass2IsValid && pass1 === pass2) {
      alert("account created successfully");
    }
  };

  return (
    <React.Fragment>
      <Heading />
      <section>
        {displayToast && (
          <article id="successToast">
            <h2>Congratulations!</h2>
            <h4>You Qualified!</h4>
            <div>
              Enter a valid email address below, and a password that is at least
              8 characters long containing one number and one special character
            </div>
            <button
              id="dismissToastButton"
              className="button"
              onClick={e => setDisplayToast(false)}
            >
              Got It!!
            </button>
          </article>
        )}
        <article>
          <h2>Create Account</h2>
          <Input
            action={setUsername}
            id="username"
            type="text"
            text="Username"
          />
          <Input action={setPass1} id="pass1" type="password" text="Password" />
          <Input
            action={setPass2}
            id="pass2"
            type="password"
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
