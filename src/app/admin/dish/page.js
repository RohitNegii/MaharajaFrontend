"use client";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import { Delete, Edit, Add } from "@mui/icons-material";
import AddDishModal from "@/app/components/admin/dish/addDish";

const apiEndpoint = "http://localhost:4000/api";

const AdminDishManager = () => {
  const [dishes, setDishes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [editingDishId, setEditingDishId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDishes = async () => {
    try {
      const res = await fetch(`${apiEndpoint}/dishes`);
      const data = await res.json();
      setDishes(data.data);
    } catch (err) {
      setError("Failed to fetch dishes.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${apiEndpoint}/categories`);
        const data = await res.json();
        setCategories(data.data);
      } catch (err) {
        setError("Failed to fetch categories.");
      }
    };

    fetchDishes();
    fetchCategories();
  }, []);

  const handleSaveDish = async (dish) => {
    try {
      if (editingDishId) {
        // Edit dish
        await fetch(`${apiEndpoint}/dishes/${editingDishId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dish),
        });
        fetchDishes();
      } else {
        // Add dish
        const res = await fetch(`${apiEndpoint}/dishes`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dish),
        });
        const addedDish = await res.json();
        fetchDishes();
      }
      setEditingDishId(null);
      setModalOpen(false);
    } catch (err) {
      setError("Failed to save the dish.");
    }
  };

  const handleEdit = (dish) => {
    setEditingDishId(dish._id);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${apiEndpoint}/dishes/${id}`, {
        method: "DELETE",
      });
      setDishes(dishes.filter((dish) => dish._id !== id));
    } catch (err) {
      setError("Failed to delete the dish.");
    }
  };

  const handleAddNewDish = () => {
    setEditingDishId(null);
    setModalOpen(true);
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Manage Dishes
      </Typography>

      <Button
        variant="contained"
        color="primary"
        startIcon={<Add />}
        onClick={handleAddNewDish}
        sx={{ mb: 2 }}
      >
        Add Dish
      </Button>

      <AddDishModal
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
        handleSave={handleSaveDish}
        categories={categories}
        editingDish={dishes.find((dish) => dish._id === editingDishId)}
      />

      {dishes.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Dish Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dishes.map((dish) => (
                <TableRow key={dish._id}>
                  <TableCell>{dish.name}</TableCell>
                  <TableCell>{dish.category.name}</TableCell>
                  <TableCell>{dish.price}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleEdit(dish)}>
                      <Edit />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(dish._id)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography variant="body1" mt={2}>
          No dishes available. Please add a new dish.
        </Typography>
      )}
    </div>
  );
};

export default AdminDishManager;
