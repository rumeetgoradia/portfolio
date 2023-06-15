import { defineField, defineType } from "sanity";

export default defineType({
  name: "currentlies",
  title: "Currentlies",
  type: "document",
  fields: [
    defineField({
      name: "type",
      title: "Type",
      type: "string",
    }),
    defineField({
      name: "items",
      title: "items",
      type: "array",
      of: [
        {
          type: "currently",
        },
      ],
    }),
  ],
});
