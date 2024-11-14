export const notice = {
  name: 'notice',
  title: 'Notice',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Academic', value: 'academic'},
          {title: 'Administrative', value: 'administrative'},
          {title: 'Event', value: 'event'},
          {title: 'Other', value: 'other'},
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Active', value: 'active'},
          {title: 'Inactive', value: 'inactive'},
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {type: 'block'},
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
          type: 'file',
          name: 'pdf',
          title: 'PDF Attachment',
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
