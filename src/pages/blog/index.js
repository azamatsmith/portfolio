import React from 'react';
// import PropTypes from 'prop-types';
import Layout from 'components/Layout';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const Post = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px;
  width: 400px;
  margin: 10px;
`;

function Blog() {
  const data = useStaticQuery(query);
  console.log({ data });
  return (
    <Layout>
      {data.allContentfulBlogPost.nodes.map((post) => (
        <Post key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body.body}</p>
          <Link to={`/blog/${post.slug}`}>Link</Link>
        </Post>
      ))}
    </Layout>
  );
}

Blog.propTypes = {};

Blog.defaultProps = {};

export default Blog;

const query = graphql`
  query AllBlogPostQuery {
    allContentfulBlogPost {
      nodes {
        id
        body {
          body
        }
        createdAt
        slug
        title
      }
    }
  }
`;
