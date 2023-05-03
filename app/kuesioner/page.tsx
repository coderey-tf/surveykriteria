"use client";
import { useState } from "react";
import Button from "../components/Button/page";
import Image from "next/image";

export default function Kuesioner() {
  const [sliderValue, setSliderValue] = useState(0);
  const [reversedSliderValue, setReversedSliderValue] = useState(0);
  const [checkboxValue, setCheckboxValue] = useState(false);

  function handleSliderChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = Number(e.target.value);
    // console.log(newValue);
    setSliderValue(newValue);
    setReversedSliderValue(0);
    setCheckboxValue(false);
  }

  function handleReversedSliderChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValueRev = Number(e.target.value);
    // console.log(newValueRev);
    setReversedSliderValue(newValueRev);
    setSliderValue(0);
    setCheckboxValue(false);
  }

  function handleCheckboxChange() {
    console.log(!checkboxValue);
    setCheckboxValue(!checkboxValue);
    setSliderValue(0);
    setReversedSliderValue(0);
  }

  const handleSubmited = (event: any) => {
    event.preventDefault();
    let sliderValueToLog = sliderValue;
    let reversedSliderValueToLog = reversedSliderValue;

    if (sliderValue === 3) {
      sliderValueToLog = 0.3333;
    } else if (sliderValue === 6) {
      sliderValueToLog = 0.2;
    } else if (sliderValue === 9) {
      sliderValueToLog = 0.1428;
    } else if (sliderValue === 12) {
      sliderValueToLog = 0.1111;
    }

    if (reversedSliderValue === 6) {
      reversedSliderValueToLog = 5;
    } else if (reversedSliderValue === 9) {
      reversedSliderValueToLog = 7;
    } else if (reversedSliderValue === 12) {
      reversedSliderValueToLog = 9;
    }

    console.log("Slider value: ", sliderValueToLog);
    console.log("Reversed slider value: ", reversedSliderValueToLog);
    console.log("Checkbox value: ", checkboxValue);
  };
  return (
    <>
      <div className=" neumorphism-head">
        <h3 className="py-4 px-4">Petunjuk Pengisian Kuesioner</h3>
        <div className=" p-3 px-4 indent-8 text-xs text-justify bg-secondary rounded-b-[20px] ">
          Sekilas tentang Analytic Hierarcy Process (AHP), AHP adalah salah satu
          tool (Alat Bantu) dalam penelitian yang cocok digunakan untuk
          pemilihan kandidat atas pengurutan prioritas yang dikembangkan oleh
          Thomas L. Saaty.
        </div>
      </div>
      <div className="py-4 px-4 mt-5 neumorphism-body">
        <h5 className=" text-sm">Penjelasan Skala Kuesioner </h5>
        <Image
          src="/tutor.png"
          alt="petunjuk"
          width={800}
          height={200}
          className="mx-auto mt-5"
          placeholder="blur"
          blurDataURL={"/tutor.png"}
        />
        <div className="mt-5 text-xs text-primary">
          <p>NB :</p>
          <p>1 : equally importance</p>
          <p>3 & 3&apos; : moderately importance</p>
          <p>5 & 5&apos; : strongly importance</p>
          <p>7 & 7&apos; : very strongly importance</p>
          <p>9 & 9&apos; : extremely importance</p>
        </div>
        <div className="grid grid-cols-9 justify-items-center	 text-xs  sm:text-sm mt-36">
          <div>9</div>
          <div>7</div>
          <div>5</div>
          <div>3</div>
          <div>=</div>
          <div>3&apos;</div>
          <div>5&apos;</div>
          <div>7&apos;</div>
          <div>9&apos;</div>
        </div>

        <form className="mt-2 grid grid-cols-9 justify-items-center mb-36">
          <input
            type="radio"
            name="radio-2"
            value="9"
            onClick={(e) => console.log((e.target as HTMLInputElement).value)}
            className="radio radio-success radio-xs sm:radio-sm"
            defaultChecked
          />

          <input
            type="radio"
            onClick={(e) => console.log((e.target as HTMLInputElement).value)}
            name="radio-2"
            value="7"
            className="radio radio-success radio-xs sm:radio-sm"
          />

          <input
            type="radio"
            onClick={(e) => console.log((e.target as HTMLInputElement).value)}
            name="radio-2"
            value="5"
            className="radio radio-success radio-xs sm:radio-sm"
          />

          <input
            type="radio"
            onClick={(e) => console.log((e.target as HTMLInputElement).value)}
            name="radio-2"
            value="3"
            className="radio radio-success radio-xs sm:radio-sm "
          />

          <input
            type="radio"
            onClick={(e) => console.log((e.target as HTMLInputElement).value)}
            name="radio-2"
            value="1"
            className="radio radio-success radio-xs sm:radio-sm"
          />

          <input
            type="radio"
            onClick={(e) => console.log((e.target as HTMLInputElement).value)}
            name="radio-2"
            value="0.3333"
            className="radio radio-success radio-xs sm:radio-sm"
          />

          <input
            type="radio"
            onClick={(e) => console.log((e.target as HTMLInputElement).value)}
            name="radio-2"
            value="0.2"
            className="radio radio-success radio-xs sm:radio-sm "
          />

          <input
            type="radio"
            onClick={(e) => console.log((e.target as HTMLInputElement).value)}
            name="radio-2"
            value="0.1428"
            className="radio radio-success radio-xs sm:radio-sm"
          />

          <input
            type="radio"
            onClick={(e) => console.log((e.target as HTMLInputElement).value)}
            name="radio-2"
            value="0.1111"
            className="radio radio-success radio-xs sm:radio-sm"
          />
        </form>
        <div className="flex justify-between mt-5">
          <Button url="/" title="Kembali" />
          <Button url="/kuesioner" title="Selanjutnya" />
        </div>
      </div>
    </>
  );
}
