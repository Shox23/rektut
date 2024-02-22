export interface OutlinedButtonProps {
  disabled?: boolean;
  fullWidth?: boolean;
  profilePage?: boolean
}

export interface OutlinedButtonEmits {
  (e: "onClick"): void;
}
