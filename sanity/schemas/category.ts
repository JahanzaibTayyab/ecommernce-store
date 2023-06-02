import { defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
      name: "isParent",
      title: "Is Parent Category?",
      type: "boolean",
    }),

    defineField({
      name: "parent",
      title: "Parent Category",
      type: "reference",
      to: [{ type: "category" }],
      options: {
        filter: "!defined(parent)",
      },
      hidden: ({ document }) => document?.isParent === true,
    }),

    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "mainImage",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      title: "Subtitles",
      name: "subtitles",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "parent.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { subtitle } = selection;
      return { ...selection, subtitle: subtitle ? `– ${subtitle}` : `` };
    },
  },
});
