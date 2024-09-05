// import "./Input.css";
import { LexicalEditor } from "lexical";
import React, { ReactNode, useEffect, useState } from "react";

type TextInputProps = {
  "data-test-id"?: string;
  label: string;
  onChange: (val: string) => void;
  placeholder?: string;
  value: string;
  type?: React.HTMLInputTypeAttribute;
};

const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder = "",
  "data-test-id": dataTestId,
  type = "text",
}) => (
  <div className="mb-4 flex flex-col">
    <input
      type={type}
      className="rounded-md border border-gray-300 px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-orange-500"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      data-test-id={dataTestId}
    />
  </div>
);

type InsertDialogProps = {
  activeEditor: LexicalEditor;
  onClose: () => void;
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  insertFunction: (params: any) => void;
  label: string;
  placeholder?: string;
};

export const InsertDialog: React.FC<InsertDialogProps> = ({
  activeEditor,
  onClose,
  insertFunction,
  label,
  placeholder,
}) => {
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(Object.values(inputValues).some((val) => val.trim() === ""));
  }, [inputValues]);

  const handleChange = (key: string) => (value: string) => {
    console.log({ inputValues });
    setInputValues((prev) => ({ ...prev, [key]: value }));
  };

  const onClick = () => {
    console.log("Inserting Note: ", inputValues);
    insertFunction({
      editor: activeEditor,
      inputValues,
    });
    setInputValues({});
    onClose();
  };

  return (
    <div className="mx-auto max-w-sm rounded-lg bg-white p-6 shadow-lg">
      {/* <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold">Insert {label}</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div> */}
      {/* <div className="flex items-center justify-between rounded-t-lg bg-gray-900 px-4 py-2">
        <h2 className="text-lg text-white">Insert Footnote</h2>
        <button className="rounded bg-primary p-1 transition duration-300 hover:bg-orange-600">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div> */}
      {label === "Footnote" ? (
        <>
          <TextInput
            placeholder="Text"
            label="Text"
            onChange={handleChange("ft")}
            value={inputValues.ft || ""}
            data-test-id="note-ft"
          />

          <TextInput
            placeholder="Origin Reference."
            label="Orign Reference"
            onChange={handleChange("fr")}
            value={inputValues.fr || ""}
            data-test-id="note-fr"
          />
          <TextInput
            placeholder="Quotation"
            label="Quotation"
            onChange={handleChange("fq")}
            value={inputValues.fq || ""}
            data-test-id="note-ftquot"
          />
          <TextInput
            placeholder="Content"
            label="Content"
            onChange={handleChange("fqa")}
            value={inputValues.fqa || ""}
            data-test-id="note-fqa"
          />
        </>
      ) : label === "XRef" ? (
        <>
          <TextInput
            placeholder="Note Title"
            label="Title"
            onChange={handleChange("title")}
            value={inputValues.title || ""}
            data-test-id="note-title"
          />
          <TextInput
            placeholder="Note Content"
            label="Content"
            onChange={handleChange("content")}
            value={inputValues.content || ""}
            data-test-id="note-content"
          />
          <TextInput
            placeholder="Author"
            label="Author"
            onChange={handleChange("author")}
            value={inputValues.author || ""}
            data-test-id="note-author"
          />
          <TextInput
            placeholder="Date"
            label="Date"
            onChange={handleChange("date")}
            value={inputValues.date || ""}
            data-test-id="note-date"
          />
        </>
      ) : (
        <TextInput
          placeholder={placeholder ?? "Enter Value"}
          label={label}
          onChange={handleChange(label.toLowerCase())}
          value={inputValues[label.toLowerCase()] || ""}
          data-test-id={`modal-${label.toLowerCase()}`}
          type="number"
        />
      )}
      <Button disabled={isDisabled} onClick={onClick}>
        Confirm
      </Button>
    </div>
  );
};

type ButtonProps = {
  "data-test-id"?: string;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick: () => void;
  title?: string;
};

export const Button: React.FC<ButtonProps> = ({
  "data-test-id": dataTestId,
  children,
  className,
  onClick,
  disabled,
  title,
}) => (
  <button
    disabled={disabled}
    className={`rounded-md bg-primary px-4 py-2 font-bold text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 ${
      disabled ? "cursor-not-allowed opacity-50" : ""
    } ${className}`}
    onClick={onClick}
    title={title}
    aria-label={title}
    {...(dataTestId && { "data-test-id": dataTestId })}
  >
    {children}
  </button>
);
