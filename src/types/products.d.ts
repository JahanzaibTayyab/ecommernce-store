export type ProductDetails = {
  processor?: string;
  screen?: string;
  operating_system?: string;
  ram?: string;
  ssd?: string;
  ports?: string;
  graphic?: string;
  warranty?: string;
  back_camera?: string;
  front_camera?: string;
  battery?: string;
  frequency_response?: string;
  microphone?: boolean;
  wireless?: boolean;
  wireless_standby_time?: boolean;
  connectionType?: string[];
  connectors?: string[];
  bluetooth?: boolean;
  noise_cancelling?: boolean;
  sound_isolating?: boolean;
};

export type Slug = {
  _type: string;
  current: string;
};

export type TImage = {
  _key: string;
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
};

export type Product = {
  _id: string;
  quantity?: number;
  image: any;
  name: string;
  slug: Slug;
  price: number;
  discount?: number;
  details?: Array<any>;
  brand: string;
  category: Record<string, unknown>;
  isOffer?: boolean;
  registerDate?: string;
  timeStamp?: number;
  starRating: number;
};
