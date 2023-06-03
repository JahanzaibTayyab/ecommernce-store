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
      name: "quantity",
      title: "Quantity",
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
      type: "array",
      of: [{ type: "string" }],
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
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
