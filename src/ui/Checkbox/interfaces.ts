export interface CheckboxProps {
  check: boolean,
  disabled?: boolean
}

export interface CheckboxEmits {
  (e: 'check', value: boolean): void
}