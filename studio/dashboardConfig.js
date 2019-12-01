export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5de3f2a563eafd8359c632de',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-2c432r8q',
                  apiId: 'd1094733-5fdc-44e5-94f0-2bd6d0a7a689'
                },
                {
                  buildHookId: '5de3f2a6b8d594875184ce83',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-komnyryd',
                  apiId: '8f5d7514-ae7c-41e1-9f84-af32598d41e3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dsignwala/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-komnyryd.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
