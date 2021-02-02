import React from "react";
import Heading from "./HeadingMain";

const Failure = () => {
  return (
    <React.Fragment>
      <Heading />
      <section id="failurePage">
        <article id="failureDialog">
          <div>
            Oh No! It looks like you didnt quite qualify. Feel free to contact
            us at 1 (800) 555 5555 for any questions or concerns
          </div>
        </article>
      </section>
    </React.Fragment>
  );
};

export default Failure;
