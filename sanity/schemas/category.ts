import { defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  title: "Work Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "reference",
      title: "Reference",
      type: "url",
    }),
  ],
});
