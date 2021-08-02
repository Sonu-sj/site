/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions;
    let hookData={}
    
    if(process.env.INCOMING_HOOK_BODY){
      hookData = JSON.parse(process.env.INCOMING_HOOK_BODY)
    }
    let siteTitle = hookData.title || 'Placeholder';

    console.log("SITE TITLE",siteTitle);
    deletePage(page);
    createPage({
      ...page,
      context: {
        title: siteTitle
      }
    });
  };