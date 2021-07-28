/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions;
  
    deletePage(page);
    createPage({
      ...page,
      context: {
        title: 'Parveen Travels'
      }
    });
  };