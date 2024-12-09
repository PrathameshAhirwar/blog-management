import React from 'react';
import BlogItem from './BlogItem';

const BlogList = ({ blogs, onDeleteBlog, onEditBlog }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <BlogItem
          key={blog._id}
          blog={blog}
          onDelete={onDeleteBlog}
          onEdit={onEditBlog} 
        />
      ))}
    </div>
  );
};

export default BlogList;
