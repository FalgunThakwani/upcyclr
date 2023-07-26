import React, { useState, useEffect } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';

const PickupRequests = () => {
  const [pickupRequests, setPickupRequests] = useState([]);

  useEffect(() => {
    // Fetch the pickup requests data from the API
    const fetchData = async () => {
      try {
        const url = 'https://324q8p7pd4.execute-api.us-east-1.amazonaws.com/dev/pickup-request/1234934934';
        const response = await axios.get(url);
        console.log(response)
        const { data } = response.data;
        
        setPickupRequests(data);
      } catch (error) {
        console.error('API Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Pickup Requests
      </Typography>
      {pickupRequests.length === 0 ? (
        <Typography variant="body1" align="center">
          No pickup requests found.
        </Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>User Name</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Street</TableCell>
                <TableCell>Unit</TableCell>
                <TableCell>Postal Code</TableCell>
                <TableCell>Pickup Start Time</TableCell>
                <TableCell>Pickup End Time</TableCell>
                <TableCell>Reward</TableCell>
                <TableCell>Request Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pickupRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell>{request.id}</TableCell>
                  <TableCell>{request.user.name}</TableCell>
                  <TableCell>{request.pickup_address.city}</TableCell>
                  <TableCell>{request.pickup_address.street}</TableCell>
                  <TableCell>{request.pickup_address.unit}</TableCell>
                  <TableCell>{request.pickup_address.postal}</TableCell>
                  <TableCell>{request.pickup_start_ts}</TableCell>
                  <TableCell>{request.pickup_end_ts}</TableCell>
                  <TableCell>{request.reward}</TableCell>
                  <TableCell>{request.request_status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default PickupRequests;
