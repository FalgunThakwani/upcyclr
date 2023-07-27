import React, { useState, useEffect } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';
import './pickup-history.css';
const PickupRequests = () => {
  const [pickupRequests, setPickupRequests] = useState([]);

  useEffect(() => {
    // Fetch the pickup requests data from the API
    const fetchData = async () => {
        try {
            const url = 'https://324q8p7pd4.execute-api.us-east-1.amazonaws.com/dev/pickup-request/1234934934';
            
            // Make the fetch request
            const response = await fetch(url);
            
            // Check if the response was successful (status code 200-299)
            if (!response.ok) {
              throw new Error(`API Error: ${response.status} ${response.statusText}`);
            }

            // Parse the response JSON
            const data = await response.json();
            console.log(data);
            console.log(data.data)
            
            // Assuming 'data' contains the 'Items' array from the response
            setPickupRequests(data.data);
            console.log(pickupRequests)
          } catch (error) {
            console.error('API Error:', error);
          }
          
    };

    fetchData();
  }, []);

  
  return (
    <div style={{ paddingBottom: '20px' }}>
      <Typography variant="h5" sx={{ py: 2 }} align="center" className='heading'>
        Pickup history
      </Typography>
      {pickupRequests.length === 0 ? (
        <Typography variant="body1" align="center">
          No pickup requests found.
        </Typography>
      ) : (
        <div className='history-table-container'>
          <TableContainer sx={{ maxWidth: '75%' }} component={Paper}>
            <Table stickyHeader size='medium'>
              <TableHead>
                <TableRow sx={{
                    "& th": {
                      color: "black",
                      backgroundColor: "#f5ecfa",
                      fontWeight: 'bold',
                    }
                  }}>
                  <TableCell>User Name</TableCell>
                  <TableCell>City</TableCell>
                  <TableCell>Street</TableCell>
                  <TableCell>Unit</TableCell>
                  <TableCell>Postal Code</TableCell>
                  <TableCell>Items in Bag</TableCell>
                  <TableCell>Pickup Start Time</TableCell>
                  <TableCell>Pickup End Time</TableCell>
                  <TableCell>Reward</TableCell>
                  <TableCell>Request Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pickupRequests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell>{request.user.name}</TableCell>
                    <TableCell>{request.pickup_address.city}</TableCell>
                    <TableCell>{request.pickup_address.street}</TableCell>
                    <TableCell>{request.pickup_address.unit}</TableCell>
                    <TableCell>{request.pickup_address.postal}</TableCell>
                    <TableCell>
                      {request.items_in_bag.length > 0 ? (
                        <ul>
                          {request.items_in_bag.map((item, index) => (
                            <li key={index}>{`${item.weight} ${item.unit} of ${item.type}`}</li>
                          ))}
                        </ul>
                      ) : "None"}
                    </TableCell>
                    <TableCell>{request.pickup_start_ts}</TableCell>
                    <TableCell>{request.pickup_end_ts}</TableCell>
                    <TableCell>{request.reward}</TableCell>
                    <TableCell>{request.request_status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
};

export default PickupRequests;

