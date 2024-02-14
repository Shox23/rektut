export interface FilledButtonProps {
  icon?: string;
  bigger?: boolean;
  disabled?: boolean;
}

export interface FilledButtonEmits {
  (e: "onClick"): void;
}
