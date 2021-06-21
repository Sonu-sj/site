import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../components/layout'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
  const classes = useStyles()
  return(
  <Layout>
    <div>
    {data.allStrapiArticle.edges.map(document => (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
        >
        <GatsbyImage image={document.node.image.localFile.childImageSharp.gatsbyImageData} alt={'Reupload Image in Strapi'} />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {document.node.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {document.node.content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    ))}
    </div>
  </Layout>
  )
}


export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          image {
            localFile{
            childImageSharp {
               gatsbyImageData(
                width: 200,
                height:125
        
       )
            }
          }
        }
          title
          content
        }
      }
    }
  }
`