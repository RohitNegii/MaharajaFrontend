import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  Box,
  Modal,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const dishTypes = ["breakfast", "lunch", "dinner", "special combo"];

const AddDishModal = ({
  open,
  handleClose,
  handleSave,
  categories,
  editingDish,
}) => {
  const [dishName, setDishName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [dishType, setDishType] = useState([]);
  const [dishNumber, setDishNumber] = useState("");
  const [description, setDescription] = useState("");
  const [showDishToHomePage, setShowDishToHomePage] = useState(true);
  const [showDrinks, setShowDrinks] = useState(false);
  const [showToopins, setShowToopins] = useState(false);

  useEffect(() => {
    if (editingDish) {
      console.log("editi", editingDish);
      setDishName(editingDish.name || "");
      setCategory(editingDish.category ? editingDish.category._id : "");
      setPrice(editingDish.price || 0);
      setDishType(editingDish.type || []);
      setDishNumber(editingDish.number || "");
      setDescription(editingDish.description || "");
      setShowDishToHomePage(editingDish.showDishToHomePage ?? true);
      setShowDrinks(editingDish.showDrinks ?? false);
      setShowToopins(editingDish.showToopins ?? false);
    } else {
      console.log("else");
      // Reset form if not editing
      setDishName("");
      setCategory("");
      setPrice(0);
      setDishType([]);
      setDishNumber("");
      setDescription("");
      setShowDishToHomePage(true);
      setShowDrinks(false);
      setShowToopins(false);
    }
  }, [editingDish]);

  const handleDishTypeChange = (event) => {
    setDishType(event.target.value);
  };

  const handleSubmit = () => {
    handleSave({
      name: dishName,
      categoryId: category,
      type: dishType,
      number: dishNumber,
      description,
      price,
      showDishToHomePage,
      showDrinks,
      showToopins,
    });
    handleClose(); // Close the modal after saving
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          {editingDish ? "Edit Dish" : "Add New Dish"}
        </Typography>
        <form>
          <TextField
            label="Dish Name"
            value={dishName}
            onChange={(e) => setDishName(e.target.value)}
            fullWidth
            required
            margin="normal"
          />
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
            required
            margin="normal"
          >
            {categories.map((cat) => (
              <MenuItem key={cat._id} value={cat._id}>
                {cat.name}
              </MenuItem>
            ))}
          </Select>
          <TextField
            label="Price"
            type="number"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Dish Number"
            value={dishNumber}
            onChange={(e) => setDishNumber(e.target.value)}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            required
            margin="normal"
          />
          <Typography variant="subtitle1" gutterBottom>
            Dish Type
          </Typography>
          {dishTypes.map((type) => (
            <FormControlLabel
              key={type}
              control={
                <Checkbox
                  checked={dishType.includes(type)}
                  onChange={() => {
                    setDishType((prev) =>
                      prev.includes(type)
                        ? prev.filter((t) => t !== type)
                        : [...prev, type]
                    );
                  }}
                />
              }
              label={type}
            />
          ))}
          <FormControlLabel
            control={
              <Checkbox
                checked={showDishToHomePage}
                onChange={(e) => setShowDishToHomePage(e.target.checked)}
              />
            }
            label="Show Dish to Home Page"
            sx={{ marginTop: 2 }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={showDrinks}
                onChange={(e) => setShowDrinks(e.target.checked)}
              />
            }
            label="Show Drinks"
            sx={{ marginTop: 2 }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={showToopins}
                onChange={(e) => setShowToopins(e.target.checked)}
              />
            }
            label="Show Toppings"
            sx={{ marginTop: 2 }}
          />
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
          >
            {editingDish ? "Save Changes" : "Add Dish"}
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default AddDishModal;
