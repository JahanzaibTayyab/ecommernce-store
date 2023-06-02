export type Banner = {
  bannerBackgroundColor?: string;
  buttonText?: string;
  ctaLink?: string;
  description?: string;
  discount?: string;
  image: {
    asset: any; // You can replace 'any' with the appropriate type for the asset object
    _type: "image";
  };
  isActive?: boolean;
  smallText?: string;
  title: string;
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: "banner";
  _updatedAt: string;
};
