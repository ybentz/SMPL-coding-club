const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const resourcePageTemplate = path.resolve(`src/templates/resource-page.js`)
  return graphql(`
    query resourcePagesQuery {
      resources: allResourcesJson {
        nodes {
          slug
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.resources.nodes.forEach(node => {
      const { slug } = node
      createPage({
        path: `/resources/${node.slug}`,
        component: resourcePageTemplate,
        context: {
          slug,
        },
      })
    })
  })
}
