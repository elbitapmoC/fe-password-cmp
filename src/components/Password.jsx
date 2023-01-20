import React, { useState } from "react";

export const Password = ({ options }) => {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <article className="flex__align--center">
      <input
        value={userInput}
        type="text"
        placeholder="Enter password here"
        onChange={handleInputChange}
      />
      <aside>
        {options.map((option, index) => {
          let rule = option.rule(userInput);
          return (
            <p className="margin__bottom--md">
              <span
                className={
                  "circle text-white margin__right--md " +
                  (rule ? "good-circle" : "bad-circle")
                }
              >
                {rule ? "✓" : "X"}
              </span>
              <span key={index}>{option.message}</span>
            </p>
          );
        })}
      </aside>
    </article>
  );
};
