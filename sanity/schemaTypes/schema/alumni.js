export const alumni = {
  name: "alumni",
  title: "Alumni",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "Batch",
      title: "Batch Year (B.S.)",
      type: "number",
      validation: (Rule) =>
        Rule.required()
          .min(2020)
          .max(new Date().getFullYear() + 57), // 2000 B.S. to current year + 57 (2057 B.S.)
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "currentPosition",
      title: "Current Position",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};
