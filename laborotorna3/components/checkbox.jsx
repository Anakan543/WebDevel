import React, { useState } from "react";

export const Checkbox = ({ children, onChange }) => {
  const [checked, setChecked] = useState(false);

  const change = (event) => {
    setChecked(event.target.checked);
    onChange(event.target.checked);
  };
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        className="check-box-eLement"
        checked={checked}
        onChange={change}
      />
      <p>{children}</p>
    </label>
  );
};
