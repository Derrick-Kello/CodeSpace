'use client';

import React from 'react';
import AddProblemForm from '@/components/Admin/AddProblemForm'; // Import the form component
import { useAuthState } from 'react-firebase-hooks/auth';

const AdminDashboardPage = () => {

  return (
    <div className="min-h-screen bg-dark-layer-2 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <p className="text-lg">Welcome to the admin dashboard. Here you can manage problems.</p>
      {/* Placeholder for Add Problem Form */}
      <div className="mt-8">
        <AddProblemForm /> {/* Render the AddProblemForm */}
      </div>
    </div>
  );
};

export default AdminDashboardPage;
