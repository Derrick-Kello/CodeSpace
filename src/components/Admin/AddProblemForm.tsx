'use client';

import { auth } from '@/firebase/firebase';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const AddProblemForm: React.FC = () => {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    difficulty: 'Easy',
    category: '',
    order: 0,
    starterCode: '',
    handlerFunction: '',
    videoId: '',
  });
  const [user] = useAuthState(auth);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'order' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/problems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Problem added successfully!');
        // Clear form
        setFormData({
          id: '',
          title: '',
          difficulty: 'Easy',
          category: '',
          order: 0,
          starterCode: '',
          handlerFunction: '',
          videoId: '',
        });
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || 'Failed to add problem.');
      }

      console.log(user);
    } catch (error: any) {
      toast.error(error.message || 'An unexpected error occurred.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-dark-layer-1 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-4">Add New Problem</h2>

      <div>
        <label htmlFor="id" className="block text-sm font-medium text-gray-300">ID (unique slug)</label>
        <input
          type="text"
          id="id"
          name="id"
          value={formData.id}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md bg-dark-fill-3 border-dark-border text-white shadow-sm p-2"
          required
        />
      </div>

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-300">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md bg-dark-fill-3 border-dark-border text-white shadow-sm p-2"
          required
        />
      </div>

      <div>
        <label htmlFor="difficulty" className="block text-sm font-medium text-gray-300">Difficulty</label>
        <select
          id="difficulty"
          name="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md bg-dark-fill-3 border-dark-border text-white shadow-sm p-2"
          required
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-300">Category</label>
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md bg-dark-fill-3 border-dark-border text-white shadow-sm p-2"
          required
        />
      </div>

      <div>
        <label htmlFor="order" className="block text-sm font-medium text-gray-300">Order</label>
        <input
          type="number"
          id="order"
          name="order"
          value={formData.order}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md bg-dark-fill-3 border-dark-border text-white shadow-sm p-2"
          required
        />
      </div>

      <div>
        <label htmlFor="videoId" className="block text-sm font-medium text-gray-300">Video ID (Optional)</label>
        <input
          type="text"
          id="videoId"
          name="videoId"
          value={formData.videoId}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md bg-dark-fill-3 border-dark-border text-white shadow-sm p-2"
        />
      </div>

      <div>
        <label htmlFor="starterCode" className="block text-sm font-medium text-gray-300">Starter Code</label>
        <textarea
          id="starterCode"
          name="starterCode"
          rows={8}
          value={formData.starterCode}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md bg-dark-fill-3 border-dark-border text-white shadow-sm p-2"
          required
        ></textarea>
      </div>

      <div>
        <label htmlFor="handlerFunction" className="block text-sm font-medium text-gray-300">Handler Function (JavaScript string)</label>
        <textarea
          id="handlerFunction"
          name="handlerFunction"
          rows={10}
          value={formData.handlerFunction}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md bg-dark-fill-3 border-dark-border text-white shadow-sm p-2"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Add Problem
      </button>
    </form>
  );
};

export default AddProblemForm;
