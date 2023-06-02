import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    }),

    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),

    defineField({
      name: "discount",
      title: "Discount(%)",
      type: "number",
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "details",
      title: "Product Details",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "brand",
      title: "Brand",
      type: "string",
    }),

    defineField({
      name: "isOffer",
      title: "IsOffer",
      type: "boolean",
    }),

    defineField({
      name: "registerDate",
      title: "RegisterDate",
      type: "date",
    }),

    defineField({
      name: "starRating",
      title: "Star Rating",
      type: "number",
    }),
  ],
});
