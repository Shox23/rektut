export interface CustomInputProps {
  noneShadow?: boolean;
  bordered?: boolean;
  placeholder: string;
  value?: string;
  type?: "text" | "password" | "number" | "tel" | "time";
  selected?: boolean;
  modeSwitcher?: boolean;
  error?: boolean;
  supporting_text?: string;
  disabled?: boolean;
  icon?: string;
  trailing?: string;
  inputmode?:
    | "text"
    | "tel"
    | "none"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search"
    | undefined;
  autofocus?: boolean;
  readonly?: boolean;
  maxlength?: number;
  // multiline?: boolean,
  // money?: boolean
}

export interface CustomInputEmits {
  (e: "onFocus"): void;
  (e: "onBlur"): void;
  (e: "onIconClick"): void;
  (e: "updateData", value: string): void;
}
