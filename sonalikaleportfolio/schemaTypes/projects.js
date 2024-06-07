export default {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'imgUrl',
        title: 'Image URL',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'author',
        title: 'Author',
        type: 'string',
      },
      {
        name: 'date',
        title: 'Date',
        type: 'datetime',
      },
      {
        name: 'projectLink',
        title: 'Project Link',
        type: 'string',
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [
          {
            type: 'string',
          },
        ],
      },
    ],
  };
  