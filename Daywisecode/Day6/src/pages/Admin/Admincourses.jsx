import React, { useState } from 'react';
import { Dialog, DialogOverlay, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

const AdminCourses = () => {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Dummy course list
  const courses = [
    { id: 1, name: 'Math 101', description: 'Introduction to Mathematics' },
    { id: 2, name: 'History 201', description: 'World History Overview' }
  ];

  const openAddModal = () => setAddModalOpen(true);
  const closeAddModal = () => setAddModalOpen(false);

  const openDeleteModal = (course) => {
    setSelectedCourse(course);
    setDeleteModalOpen(true);
  };
  const closeDeleteModal = () => setDeleteModalOpen(false);

  const openEditModal = (course) => {
    setSelectedCourse(course);
    setEditModalOpen(true);
  };
  const closeEditModal = () => setEditModalOpen(false);

  const handleAddCourse = (e) => {
    e.preventDefault();
    // Add your backend integration here
    closeAddModal();
  };

  const handleEditCourse = (e) => {
    e.preventDefault();
    // Add your backend integration here
    closeEditModal();
  };

  const handleDeleteCourse = () => {
    // Add your backend integration here
    closeDeleteModal();
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Courses</h2>
      
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-2">List of Courses</h3>
        <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
  <tr>
    <th className="px-6 py-3 text-left text-base font-bold text-gray-500">S.No</th>
    <th className="px-6 py-3 text-left text-base font-bold text-gray-500">Name</th>
    <th className="px-6 py-3 text-left text-base font-bold text-gray-500">Description</th>
    <th className="px-6 py-3 text-left text-base font-bold text-gray-500">Actions</th>
  </tr>
</thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {courses.map((course, index) => (
              <tr key={course.id}>
                <td className="px-6 py-4 font-medium text-gray-900">{index + 1}</td>
                <td className="px-6 py-4 text-gray-500">{course.name}</td>
                <td className="px-6 py-4 text-gray-500">{course.description}</td>
                <td className="px-6 py-4 font-medium">
                  <button onClick={() => openEditModal(course)} className="bg-green-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                  <button onClick={() => openDeleteModal(course)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Course Modal */}
      <Dialog open={isAddModalOpen} onOpenChange={setAddModalOpen}>
        <DialogOverlay />
        <DialogContent className="bg-white p-4 rounded shadow-lg max-w-md mx-auto mt-20">
          <DialogHeader>
            <DialogTitle>Add New Course</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAddCourse}>
            <div className="mb-2">
              <label className="block mb-1">Name</label>
              <input type="text" id="courseName" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-2">
              <label className="block mb-1">Description</label>
              <input type="text" id="courseDescription" className="w-full p-2 border rounded" />
            </div>
            <div className="flex justify-center space-x-2 mt-4">
              <button type="button" onClick={closeAddModal} className="bg-gray-300 text-black p-2 rounded">Cancel</button>
              <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Course</button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Edit Course Modal */}
      <Dialog open={isEditModalOpen} onOpenChange={setEditModalOpen}>
        <DialogOverlay />
        <DialogContent className="bg-white p-4 rounded shadow-lg max-w-md mx-auto mt-20">
          <DialogHeader>
            <DialogTitle>Edit Course</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleEditCourse}>
            <div className="mb-2">
              <label className="block mb-1">Name</label>
              <input type="text" id="editCourseName" defaultValue={selectedCourse?.name} className="w-full p-2 border rounded" />
            </div>
            <div className="mb-2">
              <label className="block mb-1">Description</label>
              <input type="text" id="editCourseDescription" defaultValue={selectedCourse?.description} className="w-full p-2 border rounded" />
            </div>
            <div className="flex justify-center space-x-2 mt-4">
              <button type="button" onClick={closeEditModal} className="bg-gray-300 text-black p-2 rounded">Cancel</button>
              <button type="submit" className="bg-blue-500 text-white p-2 rounded">Save Changes</button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Course Confirmation Modal */}
      <Dialog open={isDeleteModalOpen} onOpenChange={setDeleteModalOpen}>
        <DialogOverlay />
        <DialogContent className="bg-white p-4 rounded shadow-lg max-w-md mx-auto mt-20">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>
          <div className="mb-4">
            Are you sure you want to delete {selectedCourse?.name}?
          </div>
          <DialogFooter>
            <button onClick={closeDeleteModal} className="bg-gray-300 text-black p-2 rounded mr-2">Cancel</button>
            <button onClick={handleDeleteCourse} className="bg-red-500 text-white p-2 rounded">Delete</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="bg-white p-4 rounded shadow mb-4 flex justify-center">
        <button onClick={openAddModal} className="bg-blue-500 text-white p-2 rounded">Add New Course</button>
      </div>
    </div>
  );
};

export default AdminCourses;
