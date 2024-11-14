export const magazine = {
  name: "magazine",
  title: "Magazine",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "issueNumber",
      title: "Issue Number",
      type: "string" || "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "publicationDate",
      title: "Publication Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "resources",
      title: "Resources",
      type: "file",
      description: "Upload the magazine file, e.g., PDF.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "cover",
      title: "Cover",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
            },
          ],
        },
        {
          type: "object",
          name: "video",
          title: "Video Embed",
          fields: [
            {
              name: "url",
              type: "url",
              title: "Video URL",
            },
          ],
        },
      ],
    },
  ],
};
