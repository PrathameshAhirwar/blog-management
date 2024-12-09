import React, { useState } from 'react';

const EditBlogForm = ({ blog, onSave, onCancel }) => {
  const [title, setTitle] = useState(blog.title);
  const [author, setAuthor] = useState(blog.author);
  const [content, setContent] = useState(blog.content);
  const [tags, setTags] = useState(blog.tags.join(', '));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass updated blog details to onSave
    onSave(blog._id, {
      title,
      author,
      content,
      tags: tags.split(',').map(tag => tag.trim()), // Convert comma-separated tags into an array
    });
  };

  return (
    <div className="bg-white shadow-md rounded p-6 border border-gray-200">
      <h2 className="text-xl font-bold mb-4">Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            rows="5"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Tags (comma-separated)</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBlogForm;
