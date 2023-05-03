import React, { useState } from "react";

export default function MainPage() {
  const [radioValue, setRadioValue] = useState<String>();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    // event.preventDefault();
    setRadioValue(event.target.value);
    console.log(radioValue);
  }

  const handleSubmited = (event: any) => {
    event.preventDefault();

    console.log("Radio value: ", radioValue);
  };
  return (
    <form
      onSubmit={handleSubmited}
      className="mt-2 grid grid-cols-9 justify-items-center mb-36"
    >
      <input
        type="radio"
        name="radio-2"
        value="9"
        onClick={(e) => console.log((e.target as HTMLInputElement).value)}
        onChange={handleChange}
        className="radio radio-success radio-xs sm:radio-sm"
        defaultChecked
      />

      <input
        type="radio"
        onClick={(e) => console.log((e.target as HTMLInputElement).value)}
        onChange={handleChange}
        name="radio-2"
        value="7"
        className="radio radio-success radio-xs sm:radio-sm"
      />

      <input
        type="radio"
        onClick={(e) => console.log((e.target as HTMLInputElement).value)}
        onChange={handleChange}
        name="radio-2"
        value="5"
        className="radio radio-success radio-xs sm:radio-sm"
      />

      <input
        type="radio"
        onClick={(e) => console.log((e.target as HTMLInputElement).value)}
        onChange={handleChange}
        name="radio-2"
        value="3"
        className="radio radio-success radio-xs sm:radio-sm "
      />

      <input
        type="radio"
        onClick={(e) => console.log((e.target as HTMLInputElement).value)}
        onChange={handleChange}
        name="radio-2"
        value="1"
        className="radio radio-success radio-xs sm:radio-sm"
      />

      <input
        type="radio"
        onClick={(e) => console.log((e.target as HTMLInputElement).value)}
        onChange={handleChange}
        name="radio-2"
        value="0.3333"
        className="radio radio-success radio-xs sm:radio-sm"
      />

      <input
        type="radio"
        onClick={(e) => console.log((e.target as HTMLInputElement).value)}
        onChange={handleChange}
        name="radio-2"
        value="0.2"
        className="radio radio-success radio-xs sm:radio-sm "
      />

      <input
        type="radio"
        onClick={(e) => console.log((e.target as HTMLInputElement).value)}
        onChange={handleChange}
        name="radio-2"
        value="0.1428"
        className="radio radio-success radio-xs sm:radio-sm"
      />

      <input
        type="radio"
        onClick={(e) => console.log((e.target as HTMLInputElement).value)}
        onChange={handleChange}
        name="radio-2"
        value="0.1111"
        className="radio radio-success radio-xs sm:radio-sm"
      />
      {radioValue && <h2>{radioValue}</h2>}
      <button type="submit">Submit</button>
    </form>
  );
}
