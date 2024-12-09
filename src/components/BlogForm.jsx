import React, { useState } from 'react';

const BlogForm = ({ onAddBlog }) => {
  const [formData, setFormData] = useState({ title: '', author: '', content: '', tags: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tagsArray = formData.tags.split(',').map((tag) => tag.trim());
    onAddBlog({ ...formData, tags: tagsArray });
    setFormData({ title: '', author: '', content: '', tags: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
          Author
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="author"
          name="author"
          type="text"
          value={formData.author}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
          Content
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tags">
          Tags (comma separated)
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="tags"
          name="tags"
          type="text"
          value={formData.tags}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Blog
      </button>
    </form>
  );
};

export default BlogForm;
