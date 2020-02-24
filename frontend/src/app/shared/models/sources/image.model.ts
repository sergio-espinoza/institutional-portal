export interface IImageSource {
  title: string;
  description: string;
  file: File
}

export interface IImageInfo {
  title: string;
  description: string;
  link: string;
}

export interface IImgurResponseData {
  id: string;
  title: string | any;
  description: string | any;
  datetime: Date | number;
  type: string;
  animated: boolean;
  width: number;
  height: number;
  size: number;
  views: number;
  bandwidth: number;
  vote: string | any;
  favorite: boolean;
  nsfw: string | any;
  section: string | any;
  account_url: string | any;
  account_id: number;
  is_ad: boolean;
  has_sound: boolean;
  tags: any[];
  ad_type: number;
  ad_url: string;
  edited: string;
  in_gallery: boolean;
  deletehash: string;
  name: string;
  link: string;
}

export interface IImgurResponse {
  data: IImgurResponseData[];
  success: boolean;
  status: number
}