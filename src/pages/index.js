import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../components/layout'
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as presets from '@theme-ui/presets'
import { jsx, Themed, components,Box,Card,Text,Heading,Image} from 'theme-ui'
import { ThemeContext } from '@emotion/react'
import {
  TypeScale,
  TypeStyle,
  HeadingStyle,
  ColorPalette,
  FontFamily,
} from '@theme-ui/style-guide'

const useStyles = makeStyles({
  root: {
   margin:50
  },
  media: {
    height: 140,
  },
});

// const IndexPage = ({ data }) => (
//   <Layout>
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <ul>
//       {data.allStrapiArticle.edges.map(document => (
//         <li key={document.node.id}>
//           <h2>
//             <Link to={`/${document.node.id}`}>{document.node.title}</Link>
//           </h2>
//           <GatsbyImage image={document.node.image.localFile.childImageSharp.gatsbyImageData} alt={'test'} />
//           <p>{document.node.content}</p>
//         </li>
//       ))}
//     </ul>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )

const IndexPage = function({ data }){
  console.log(data);
  const document = data.strapiFleetOwners;
  console.log(document.Theme)
  const classes = useStyles()
  return(
  <Layout>
    <ThemeContext.Provider value={presets[document.Theme]}>
    <Themed.root sx={{ bg: 'background'}}>
    <Box sx={{
      color: 'primary',
      bg: 'background',
      padding:'10px',
      fontFamily: 'body !important',
      // raw CSS value
      boxShadow: '0 0 1px 3px rgba(0, 0, 0, .125)',
    }}>

      
    <Card className={classes.root}>
      <CardActionArea>
      <Image src={document.logoUrl} />
        <CardContent>
          <Heading>
            {document.title}
          </Heading>
          <Text>
          {document.content}
          </Text>
        </CardContent>
      </CardActionArea>
    </Card>

    </Box>
    </Themed.root>
        </ThemeContext.Provider>
  </Layout>
  )
}


export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery($title: String) {
      strapiFleetOwners(
        title: {eq:  $title }
      ) {
        title
        content,
        logoUrl,
        Theme
      }
    }
`