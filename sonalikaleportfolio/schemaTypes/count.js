// schemas/visitorCount.js
export default {
    name: 'count',
    title: 'Visitor Count',
    type: 'document',
    fields: [
      {
        name: 'count',
        title: 'Count',
        type: 'number',
        initialValue: 0,
      },
    ],
  };
  