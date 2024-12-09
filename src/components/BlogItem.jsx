import React from 'react';

const BlogItem = ({ blog, onDelete, onEdit }) => {
  return (
    <div className="bg-white shadow-md rounded px-6 py-4 mb-4 border border-gray-200">
      <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
      <p className="text-gray-600 text-sm mb-2">Author: {blog.author}</p>
      <p className="text-gray-800 mb-4">{blog.content}</p>
      <p className="text-gray-500 text-sm mb-4">
        Tags: <span className="italic">{blog.tags.join(', ')}</span>
      </p>
      <button
        onClick={() => onDelete(blog._id)}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
      >
        Delete
      </button>
      <button
        onClick={() => onEdit(blog)}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 mr-2"
        >
        Edit
        </button>

    </div>
  );
};

export default BlogItem;
