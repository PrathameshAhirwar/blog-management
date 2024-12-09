import React, { useState, useEffect } from 'react';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';
import EditBlogForm from './components/EditBlogForm';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);

  console.log(process.env.VITE_API_BASE_URL);


  // Fetch all blogs
  const fetchBlogs = async () => {
    try {
      const response = await fetch(`${process.env.VITE_API_BASE_URL}/blogs`);
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  // Add a new blog
  const addBlog = async (blog) => {
    try {
      const response = await fetch(`${process.env.VITE_API_BASE_URL}/blogs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blog),
      });
      const data = await response.json();
      setBlogs((prevBlogs) => [...prevBlogs, data.blog]);
    } catch (error) {
      console.error('Error adding blog:', error);
    }
  };

  // Delete a blog
  const deleteBlog = async (id) => {
    try {
      await fetch(`${process.env.VITE_API_BASE_URL}/blogs/${id}`, {
        method: 'DELETE',
      });
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  // Update a blog
  const updateBlog = async (id, updatedBlog) => {
    try {
      const response = await fetch(`${process.env.VITE_API_BASE_URL}/blogs/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedBlog),
      });
      const data = await response.json();
      setBlogs((prevBlogs) =>
        prevBlogs.map((blog) => (blog._id === id ? data.blog : blog))
      );
      setEditingBlog(null); // Exit edit mode
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  // Handle Cancel Edit
  const cancelEdit = () => {
    setEditingBlog(null);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog Management</h1>
      {editingBlog ? (
        <EditBlogForm
          blog={editingBlog}
          onSave={updateBlog}
          onCancel={cancelEdit}
        />
      ) : (
        <>
          <BlogForm onAddBlog={addBlog} />
          <BlogList
            blogs={blogs}
            onDeleteBlog={deleteBlog}
            onEditBlog={setEditingBlog}
          />
        </>
      )}
    </div>
  );
};

export default App;
