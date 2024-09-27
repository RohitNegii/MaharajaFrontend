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
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

const apiEndpoint = "http://localhost:4000/api";

const AdminReservationManager = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchReservations = async () => {
    try {
      const res = await fetch(`${apiEndpoint}/reservations`);
      const data = await res.json();
      setReservations(data.data);
    } catch (err) {
      setError("Failed to fetch reservations.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`${apiEndpoint}/reservations/${id}`, {
        method: "DELETE",
      });
      setReservations(
        reservations.filter((reservation) => reservation._id !== id)
      );
    } catch (err) {
      setError("Failed to delete the reservation.");
    }
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
        Manage Reservations
      </Typography>

      {reservations.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Number of People</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reservations.map((reservation) => (
                <TableRow key={reservation._id}>
                  <TableCell>{reservation.name}</TableCell>
                  <TableCell>{reservation.date}</TableCell>
                  <TableCell>{reservation.time}</TableCell>
                  <TableCell>{reservation.numberOfPeople}</TableCell>
                  <TableCell>{reservation.phoneNumber}</TableCell>
                  <TableCell>{reservation.email}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleDelete(reservation._id)}>
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
          No reservations available.
        </Typography>
      )}
    </div>
  );
};

export default AdminReservationManager;
