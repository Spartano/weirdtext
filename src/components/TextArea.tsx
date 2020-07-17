import React, { useState } from "react";

interface Props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const TextArea = ({ value, setValue }: Props) => {
  return (
    <textarea rows={5} value={value} onChange={e => setValue(e.target.value)} />
  );
};

export default TextArea;
