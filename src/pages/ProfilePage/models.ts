export interface profileEditRequestData {
  email: string;
  phone: string;
  groups: number;
  first_name?: string;
  last_name?: string;
  about?: string;
  password?: string;
}

export interface ProfileDetailsProps {
  email: string;
  phone: string;
  groups: number;
  first_name?: string;
  last_name?: string;
  photo?: string;
}

export interface profileData {
  about?: string;
  email: string;
  first_name?: string;
  groups?: number[];
  id: number;
  is_agree_terms: boolean;
  last_name?: string;
  phone: string;
  photo: null | string;
  update_about: null | string;
}
