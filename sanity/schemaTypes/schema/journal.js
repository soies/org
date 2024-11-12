export const journal = {
  name: 'journal',
  title: 'Journal',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'resources',
      title: 'Resources',
      type: 'file',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cover',
      title: 'Cover',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
          ],
        },
        {
          type: 'object',
          name: 'video',
          title: 'Video Embed',
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'Video URL',
            },
          ],
        },
      ],
    },
  ],
}
