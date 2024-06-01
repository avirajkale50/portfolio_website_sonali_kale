export default {
    name: 'works',
    title: 'Works',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },

      {
        name: 'titlepopup',
        title: 'TitlePopUp',
        type: 'string',
      },
      {
        name: 'author',
        title: 'Author',
        type: 'string',
      },
    
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },

      {
        name: 'descriptionpopup',
        title: 'DescriptionPopUp',
        type: 'string',
      },
      {
        name: 'publisher',
        title: 'publisher',
        type: 'string',
      },

      {
        name: 'publicationdate',
        title: 'publicationdate',
        type: 'string',
      },
      {
        name: 'projectLink',
        title: 'Project Link',
        type: 'string',
      },
      {
        name: 'codeLink',
        title: 'Code Link',
        type: 'string',
      },

      {
        name: 'downloadlink',
        title: 'Download Link',
        type: 'string',
      },
      {
        name: 'imgUrl',
        title: 'ImageUrl',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
   
      {
        name: 'tags',
        title: 'Tags',
       type:'array',
       of: [
         {
           name:'tag',
           title:'Tag',
           type:'string'
         }
       ]
      },
     
    ],
  };