// export interface MobileNavigationProps{
//   isOnMain: boolean
// }

// export interface DesktopNavigationProps{
//   isOnMain: boolean
// }

export interface FilterListProps {
  fullFilter: boolean;
}

export interface ListItemProps {
  title: string;
  icon: string;
  circle: boolean;
  isActive?: boolean;
}

export interface CardBlockProps {
  link: string;
  title: string;
  linkTitle: string;
}

export interface PageTitleProps {
  title: string;
  linkText?: string;
  lower?: boolean;
  mobileLower?: boolean
  isCarousel?:boolean
}

export interface PageTitleEmits {
  (e: "onClick"): void;
  (e: "onBack"): void;
  (e: "onNext"): void;
}

export interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

export interface DescriptionBlock {
  date?: string;
  title: string;
  leading: string;
  trailing: string;
  wrapperFilled?: boolean;
}
