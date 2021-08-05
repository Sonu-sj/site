/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const axios = require('axios')
// You can delete this file if you're not using it
exports.onCreatePage = async (obj) => {
    const page = obj.page;
    const actions = obj.actions;
    const { createPage, deletePage } = actions;
    let hookData={}
    
    if(process.env.INCOMING_HOOK_BODY){
      hookData = JSON.parse(process.env.INCOMING_HOOK_BODY)
    }
    let siteTitle;
     
    if(!hookData.title){
      try{
        const result = await axios.get("https://cmspoc.herokuapp.com/fleet-owners");
        if(result.data && result.data.length>0){
          const sitesData = result.data.sort((current,previous)=>{
            return (previous.id-current.id);
          })
          siteTitle= sitesData[0].title;
        }
      }catch(e){
        console.log("Http Error,deploying placeholder")
      }
    }else{
      siteTitle = hookData.title;
    }
    siteTitle = siteTitle || 'Placeholder';
    console.log("SITE TITLE",siteTitle);
    deletePage(page);
    createPage({
      ...page,
      context: {
        title: siteTitle
      }
    });
  };