import React, { useState } from "react";

export const Password = ({ options }) => {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <article className="flex__align--center">
      <input
        className="full-width"
        value={userInput}
        type="text"
        placeholder="Enter password here"
        onChange={handleInputChange}
      />
      <aside className="full-width-alt">
        {options.map((option, index) => {
          let rule = option.rule(userInput);
          return (
            <p key={index} className="margin__bottom--md">
              <span
                className={
                  "circle text-white margin__right--md " +
                  (rule ? "good" : "bad")
                }
              >
                {rule ? "✓" : "X"}
              </span>
              <span>{option.message}</span>
            </p>
          );
        })}
      </aside>
    </article>
  );
};
