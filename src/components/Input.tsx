"use client";
import React, { useImperativeHandle, useRef, useState } from "react";
import en from "@/locales/en";
interface Props {
  id: string;
  type: string;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
  classes?: string;
  value?: string;
  ref?: HTMLInputElement;
  readonly?: boolean;
  autocomplete?: string;
  title?: string;
  required?: boolean;
  label?: string;
  name?: string;
  error?: boolean;
  helperText?: string | boolean;
  onChange?: (_event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (_event: React.FocusEvent<HTMLInputElement, Element>) => void;
  onFocus?: (_event: React.FocusEvent<HTMLInputElement, Element>) => void;
}

const Input: React.FC<Props> = (props) => {
  return (
    <div className="relative mb-8">
      <label
        className="absolute -top-[30%] ltr:left-3 rtl:right-3 bg-palette-card p-[0.3rem] whitespace-nowrap"
        htmlFor={props.id}
      >
        {props.required ? (
          <span className="text-rose-700 mx-1 mt-1">*</span>
        ) : null}
        {props.label}
      </label>
      <input
        id={props.id}
        minLength={props.minLength}
        maxLength={props.maxLength}
        type={props.type}
        placeholder={props.placeholder ?? ""}
        value={props.value}
        readOnly={props.readonly || false}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        autoComplete={props.autocomplete || "off"}
        className="w-full py-4 px-6 border-[1px] border-gainsboro bg-palette-card outline-none rounded-lg shadow-md"
        title={props.title || ""}
        required={props.required || false}
      />
      {props.error && (
        <p className="text-sm text-red-700 capitalize">{props.helperText}</p>
      )}
    </div>
  );
};
// const Input = React.forwardRef<TextFieldPropsType>((props) => {
//   return (
//     <div className="relative mb-8">
//       <label
//         className="absolute -top-[30%] ltr:left-3 rtl:right-3 bg-palette-card p-[0.3rem] whitespace-nowrap"
//         htmlFor={props.id}
//       >
//         {props.required ? (
//           <span className="text-rose-700 mx-1 mt-1">*</span>
//         ) : null}
//         {label}
//       </label>
//       <input
//         ref={inputRef}
//         id={props.id}
//         minLength={props.minLength}
//         maxLength={props.maxLength}
//         type={props.type}
//         placeholder={en[`${props.placeholder}`]}
//         value={value}
//         readOnly={props.readonly || false}
//         onChange={inputChangeHandler}
//         autoComplete={props.autocomplete || "off"}
//         className="w-full py-4 px-6 border-[1px] border-gainsboro bg-palette-card outline-none rounded-lg shadow-md"
//         title={props.title || ""}
//         required={props.required || false}
//       />
//     </div>
//   );
// });

export default Input;
