export const event = {
  name: "event",
  title: "Event",
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
      title: "Short Description",
      type: "text",
      validation: (Rule) =>
        Rule.max(300).warning("Keep the description concise for previews."),
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" }, // Rich text content
        { type: "image" }, // Images with captions
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "images",
      title: "Preview Images",
      type: "array",
      of: [{ type: "image" }],
      validation: (Rule) =>
        Rule.min(4).max(4).error("You must provide exactly 4 images."),
      options: {
        layout: "grid",
      },
    },
    {
      name: "cta",
      title: "Call to Action",
      type: "url",
      description: "Provide a link for external action (optional).",
      validation: (Rule) => Rule.uri({ allowRelative: false }),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
