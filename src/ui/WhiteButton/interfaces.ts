export interface WhiteButtonProps {
  icon?: string;
  bigger?: boolean;
  disabled?: boolean;
}

export interface WhiteButtonEmits {
  (e: "onClick"): void;
}
