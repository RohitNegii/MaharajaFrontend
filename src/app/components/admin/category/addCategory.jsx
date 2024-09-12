import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddCategory = ({
  formData,
  setFormData,
  handleFormSubmit,
  handleClose,
  isEditing,
}) => {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({ ...formData, logo: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box sx={modalStyle}>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <Typography variant="h6" component="h2">
        {isEditing ? "Edit Category" : "Add Category"}
      </Typography>
      <form onSubmit={handleFormSubmit}>
        <TextField
          label="Category Name"
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <Button
          variant="contained"
          component="label"
          fullWidth
          sx={{ marginBottom: 2 }}
        >
          Upload Category Logo
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleLogoUpload}
          />
        </Button>
        {formData.logo && (
          <img
            src={formData.logo}
            alt="Logo"
            style={{ width: "100%", marginBottom: "16px" }}
          />
        )}
        <Button
          variant="contained"
          component="label"
          fullWidth
          sx={{ marginBottom: 2 }}
        >
          Upload Category Image
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageUpload}
          />
        </Button>
        {formData.image && (
          <img
            src={formData.image}
            alt="Uploaded"
            style={{ width: "100%", marginBottom: "16px" }}
          />
        )}
        <TextField
          label="Description"
          fullWidth
          margin="normal"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          {isEditing ? "Update Category" : "Add Category"}
        </Button>
      </form>
    </Box>
  );
};

export default AddCategory;
