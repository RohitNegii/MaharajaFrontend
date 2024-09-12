"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddCategory from "@/app/components/admin/category/addCategory";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const CategoryAdmin = () => {
  const [categories, setCategories] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    logo: "", // Added logo field
    image: "", // Include image in formData
  });
  const [editingId, setEditingId] = useState(null);

  const apiEndpoint = "http://localhost:4000/api/categories";
  const imageBaseURL = "http://localhost:4000"; // Base URL to access images

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(apiEndpoint);
      setCategories(response.data.data);
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };

  const handleEdit = (category) => {
    setFormData(category);
    setEditingId(category._id);
    setIsCategoryOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiEndpoint}/${id}`);
      fetchCategories();
    } catch (error) {
      console.error("Error deleting category", error);
    }
  };

  const handleModalClose = () => {
    setIsCategoryOpen(false);
    setFormData({
      name: "",
      description: "",
      logo: "", // Reset logo on close
      image: "", // Reset image on close
    });
    setEditingId(null);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await axios.put(`${apiEndpoint}/${editingId}`, formData);
      } else {
        await axios.post(apiEndpoint, formData
        );
      }
      fetchCategories();
      handleModalClose();
    } catch (error) {
      console.error("Error saving category", error);
    }
  };

  const openCategory = () => {
    setIsCategoryOpen(true);
  };

  return (
    <>
      <Modal
        open={isCategoryOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AddCategory
          formData={formData}
          setFormData={setFormData}
          handleFormSubmit={handleFormSubmit}
          handleClose={handleModalClose}
          isEditing={editingId !== null}
        />
      </Modal>

      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">
          Dish Category Admin Panel
        </h2>
        <Button variant="contained" color="primary" onClick={openCategory}>
          Add Category
        </Button>

        <h3 className="text-xl font-semibold my-4">Existing Categories</h3>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Logo</th> {/* New Logo column */}
              <th className="px-4 py-2">Image</th> {/* New Image column */}
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {console.log(categories)}
            {categories.length != 0 && (
              <>
                {categories?.map((category) => (
                  <tr key={category._id} className="border-b">
                    <td className="px-4 py-2">{category.name}</td>
                    <td className="px-4 py-2">{category.description}</td>
                    <td className="px-4 py-2">
                      {category?.logo && (
                        <img
                          src={`${imageBaseURL}/${category?.logo}`} // Correct URL
                          alt={category?.name}
                          className="w-16 h-16 object-cover"
                        />
                      )}
                    </td>{" "}
                    {/* Display logo*/}
                    <td className="px-4 py-2">
                      {category?.image && (
                        <img
                          src={`${imageBaseURL}/${category?.image}`} // Construct full image URL
                          alt={category?.name}
                          className="w-16 h-16 object-cover"
                        />
                      )}
                    </td>{" "}
                    {/* Display image */}
                    <td className="px-4 py-2">
                      <IconButton
                        onClick={() => handleEdit(category)}
                        color="primary"
                        aria-label="edit"
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => handleDelete(category._id)}
                        color="secondary"
                        aria-label="delete"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CategoryAdmin;
