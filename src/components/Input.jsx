import React from "react";
import { useActionSectionStore } from "../store/actionSectionStore";
import { mapStyle } from "../utils/styleMapper";

function Input({ placeholder = "Enter value..." }) {
  const { input } = useActionSectionStore();
  return (
    <input
      placeholder={placeholder}
      type="email"
      style={{
        ...mapStyle(input),
      }}
    />
  );
}

export default Input;
