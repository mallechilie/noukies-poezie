"use client";
import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

export default function PriceInput(props: {
  onChange?: (e: { target: { value: string } }) => void;
  value?: string;
}) {
  const [input, setInput] = useState(props.value ?? "0");

  const handleChange = (e: { target: { value: string } }) => {
    const onlyNums = e.target.value.match(/([1-9][\d]*(\,\d{0,2})?|0(\,\d{0,2}|$))/g);
    const value = onlyNums?.[0] ?? "0";
    setInput(value);
    if (props.onChange) props.onChange({ ...e, target: { ...e.target, value } });
  };

  return (
    <TextField
      id="prijs"
      label="Prijs"
      variant="standard"
      slotProps={{
        input: {
          startAdornment: <InputAdornment position="start">€</InputAdornment>,
        },
      }}
      onChange={handleChange}
      value={input}
    />
  );
}
