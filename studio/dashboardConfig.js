export default {
  widgets: [
     {
      name: 'gatsby',
      options: {
        instances: [
          {
            instanceUrl: 'https://sanity-gatsby-blog-6-3-4782856747.gtsb.io/',
          }
        ]
      }
    }
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cf56a822b5dd9cb1982b19d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-6-3-studio',
                  apiId: 'ef1489bd-ad30-4113-94ee-209ec84d39e5'
                },
                {
                  buildHookId: '5cf56a82cc5e8ad0cd5fbda9',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-6-3',
                  apiId: '176f523a-c21e-41cd-a73d-abfbfa92aae3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shannonbux/sanity-gatsby-blog-6-3',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-6-3.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
