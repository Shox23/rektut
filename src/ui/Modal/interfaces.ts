export interface ModalProps {
  headerTitle: string;
  bodyTitle: string;
  altHeader?: boolean;
  isOpen: boolean;
  altBodyTitle?: boolean;
}

export interface ModalEmits {
  (e: "close"): void;
}
