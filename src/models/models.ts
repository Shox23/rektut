export interface FilterListProps {
  fullFilter: boolean;
}

export interface ListItemProps {
  hideTitle?: boolean;
  title: string;
  icon: string;
  circle: boolean;
  isActive?: boolean;
}

export interface TabsProps {
  tabsItems: CategoryData[];
  titleButton?: boolean;
}

export interface TabsEmits {
  (e: "btnClick"): void;
  (e: "switch", value: string): void;
}

export interface CardBlockProps {
  status?: "popular" | "recommended" | "none";
  link: string;
  title: string;
  linkTitle: string;
}

export interface PageTitleProps {
  title: string;
  linkText?: string;
  lower?: boolean;
  mobileLower?: boolean;
  isCarousel?: boolean;
}

export interface chosenData {
  category: number;
}

export interface EmptyAdsButtonEmits {
  (e: "onClick"): void;
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
  title?: string;
  empty?: boolean;
  leading?: string;
  trailing?: string;
  wrapperFilled?: boolean;
}

export interface NotFoundProps {
  title: string;
  text: string;
  btnText: string;
}

export interface CountryData {
  date_create: string | Date;
  date_update: string | Date;
  id: number;
  name: string;
}

export interface CategoryData {
  id: number;
  name: string;
  subcategory: null;
  icon: string;
  date_create: string | Date;
  date_update: string | Date;
}

export interface getAdsParams {
  page?: number;
  limit?: number;
  job_category?: string;
  title?: string;
  category?: string;
  city?: string;
  isTop?: boolean;
  isPop?: boolean;
}

export interface createAdData {
  title: string;
  category: number;
  city: string;
  description: string;
  contact_number: string;
  email: string;
  name: string;
  user: number;
  is_top: boolean;
  is_vip: boolean;
}
