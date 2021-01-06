/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allProjectsJson {
        edges {
          node {
            about
            description
            href
            linkGithub
            name
            slug
            tecnologies
          }
        }
      }
    }
  `)

  const projectTemplate = path.resolve(`src/templates/ProjectPage.js`)
  result.data.allProjectsJson.edges.forEach(({ node }) => {
    createPage({
      path: `/proyectos/${node.slug}`,
      component: projectTemplate,
      context: {
        // This time the entire product is passed down as context
        project: node,
      },
    })
  })
}
