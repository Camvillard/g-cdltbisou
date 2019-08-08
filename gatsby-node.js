// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const projectTemplate = path.resolve(`src/templates/projectTemplate.jsx`)
  // Query for markdown nodes to use in creating pages.
  // Variables can be added as the second function parameter
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              skills
              tools
              featured
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        // Path for this page — required
        // Any valid URL. Must start with a forward slash
        path: node.frontmatter.path,
        //  The absolute path to the component for this page
        component: projectTemplate,
        context: {
        // Context data for this page.
        // Passed as props to the component this.props.pageContext as well
        // as to the graphql query as graphql arguments.
        // additional data can be passed via context
        // The context data can also be used as
        // arguments to the page GraphQL query.
          skills: node.skills,
          tools: node.tools,
          featured_image: node.featured
        },
      })
    })
  })
}
