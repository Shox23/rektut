export interface FilledButtonProps {
  icon?: string;
  bigger?: boolean;
  disabled?: boolean;
  fontDefault?: boolean;
  onNav?: boolean;
  fullWidth?: boolean;
  cardBtn?: boolean;
  fullHeight?: boolean;
  profilePage?: boolean;
  mainSection?: boolean;
}

export interface FilledButtonEmits {
  (e: "onClick"): void;
}
