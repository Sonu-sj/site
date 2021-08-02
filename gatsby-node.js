/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions;
    console.log("from hook");
    console.log(process.env.INCOMING_HOOK_BODY);
    console.log(process.env);
    console.log(process.env.title);

    deletePage(page);
    createPage({
      ...page,
      context: {
        title: 'Parveen Travels'
      }
    });
  };