import { defineField, defineType } from "sanity";

export default defineType({
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the banner",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: "The image for the banner",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "The description or text content for the banner",
    }),
    defineField({
      name: "smallText",
      title: "Small Text",
      type: "text",
      description:
        "The optional subtitle or additional text displayed on the banner.",
    }),
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description: "Toggle to activate or deactivate the banner",
    }),
    defineField({
      name: "buttonText",
      title: "ButtonText",
      type: "string",
      description: "Button Text To Show",
    }),
    defineField({
      name: "ctaLink",
      title: "Link",
      type: "url",
      description:
        "The URL the call-to-action button should redirect to when clicked.",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["https", "http", "mailto", "tel"],
        }),
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
      description: "The date when the banner will start displaying",
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
      description: "The date when the banner will stop displaying",
    }),

    defineField({
      name: "discount",
      title: "Discount",
      type: "string",
      description: "Discount Price Show",
    }),

    defineField({
      name: "bannerBackgroundColor",
      title: "Banner Background Color",
      type: "string",
      description: "Background Color",
    }),
  ],
});
