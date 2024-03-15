export interface DropdownProps {
  list: any[] | null;
  title: string;
  filled?: boolean;
}

export interface DropdownEmits {
  (e: "choose", value: number): void;
}
