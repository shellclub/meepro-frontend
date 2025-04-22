import { ICommonData } from "../common-data/commonDataType";

export interface IAdvertItem {
  id: string;
  title: string;
  description: string | null;
  type_id: string;
  link: string | null;
  button_text: string | null;
  image_path: string;
  image_type: string;
  start_date: string;
  end_date: string;
  is_active: boolean;
  common_data: ICommonData;
}

export interface IAdvertGroupedData {
  [key: string]: IAdvertItem[];
}
