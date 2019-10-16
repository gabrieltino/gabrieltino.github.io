import React from "react"
import SEO from "../components/seo"
import Layout from '../components/layout'

import { graphql } from "gatsby"





 const Blog = ({data}) => (

 
    <Layout>

    <SEO
        title="Blog | Miracle Gabriel (sixpathdev)"
      />  

      {   console.log(data.allDevArticles.nodes)
}

        <div className="container">
            <div className="blog">

                <h1 className="heading-main">
                    iWrite
                </h1>

                <div className="blog-container">

                { data.allDevArticles.nodes.map((node , index )=>  (
                    <div className="blog-card" key={node.article.id}>
                    <em> {node.article.readable_publish_date} </em>
                    <h2 >{node.article.title}</h2>
                    <p> {node.article.description} </p>
                    <a href={node.article.url} target="_blank" rel="noopener noreferrer">Read more <span> &rarr; </span></a>
                    </div>
                ))}
                </div>
               

            </div>
           
            
        </div>

    


    </Layout>
)

export default Blog

export const query = graphql`
query Blog {
    allDevArticles {
      nodes {
        article {
          title
          tags
          url
          tag_list
          readable_publish_date
          id
          description
        }
      }
    }
  }
  
`;

