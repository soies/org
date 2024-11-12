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
      name: "graduationYear",
      title: "Graduation Year",
      type: "number",
      validation: (Rule) =>
        Rule.required().min(1900).max(new Date().getFullYear()),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
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
