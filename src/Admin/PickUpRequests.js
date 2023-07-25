import React, { useState } from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  Button,
  Paper,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const ContainerWrapper = styled(Container)({
  width: "100%",
  paddingTop: "16px", // You can adjust the padding value as needed
  margin: 0,
});

const TableWrapper = styled(TableContainer)(({ theme }) => ({
  width:"1400px",
  marginBottom: theme.spacing(2), // You can adjust the margin value as needed
  marginTop: theme.spacing(2), // Reduce the top margin
  "& table": {
  tableLayout: "fixed", // Set the tabl  
  },
}));

const ActionButtonsWrapper = styled(TableCell)(({ theme }) => ({
  "& > *": {
    margin: theme.spacing(0.5), // Reduce the margin on the buttons
  },
  padding: theme.spacing(1), // Add padding to prevent buttons from disappearing
}));

const statuses = ["In-Progress", "PickUp-Scheduled", "Complete"];

const PickUpRequests = () => {
  const [items, setItems] = useState([
    {
      id: "1",
      user_id: "aaljsdljf",
      user_name: "Falgun",
      user_address: "1333 South Park Street",
      pickup_date: "2023-07-28",
      pickup_time: "5:00 pm - 6:00 pm",
      pickup_by: "Ronil",
      status: "PickUp Scheduled",
      reward: "0",
      items_in_bag: [
        { type: "Plastic", weight: "500", unit: "miligrams" },
        { type: "Clothes", weight: "200", unit: "miligrams" },
      ],
    },
    {
      id: "2",
      user_id: "aasdfljlkj",
      user_name: "John",
      user_address: "456 Oak Avenue",
      pickup_date: "2023-07-29",
      pickup_time: "3:00 pm - 4:00 pm",
      pickup_by: "Alice",
      status: "In-Progress",
      reward: "10",
      items_in_bag: [
        { type: "Electronics", weight: "1000", unit: "grams" },
        { type: "Paper", weight: "300", unit: "grams" },
      ],
    },
  ]);

  const [editingItemId, setEditingItemId] = useState(null);

  const handleStatusChange = (itemId, newStatus) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, status: newStatus } : item
    );
    setItems(updatedItems);
  };

  const handleBagItemChange = (itemId, index, field, value) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        const updatedBagItems = item.items_in_bag.map((bagItem, bagIndex) =>
          bagIndex === index ? { ...bagItem, [field]: value } : bagItem
        );
        return { ...item, items_in_bag: updatedBagItems };
      } else {
        return item;
      }
    });
    setItems(updatedItems);
  };

  const handleEdit = (itemId) => {
    setEditingItemId(itemId);
  };

  const handleSave = () => {
    // Call API to save the changes
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
    // fetch(YOUR_API_ENDPOINT, {
    //   method: 'PUT',
    //   body: JSON.stringify(items),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    setEditingItemId(null); // Disable editing mode
  };

  return (
    <ContainerWrapper>
      <Typography variant="h4" gutterBottom>
        Pick Up Requests
      </Typography>
      <TableWrapper component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell >User Name</TableCell>
              <TableCell >User Address</TableCell>
              <TableCell >Pickup Date</TableCell>
              <TableCell >Pickup Time</TableCell>
              <TableCell >Pickup By</TableCell>
              <TableCell width="250px">Items in Bag</TableCell>
              <TableCell >Status</TableCell>
              <TableCell>Reward</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  {editingItemId === item.id ? (
                    <TextField
                      type="text"
                      value={item.user_name}
                      onChange={(e) => handleStatusChange(item.id, e.target.value)}
                    />
                  ) : (
                    item.user_name
                  )}
                </TableCell>
                <TableCell>
                  {editingItemId === item.id ? (
                    <TextField
                      type="text"
                      value={item.user_address}
                      onChange={(e) => handleStatusChange(item.id, e.target.value)}
                    />
                  ) : (
                    item.user_address
                  )}
                </TableCell>
                <TableCell>{item.pickup_date}</TableCell>
                <TableCell>{item.pickup_time}</TableCell>
                <TableCell>
                  {editingItemId === item.id ? (
                    <TextField
                      type="text"
                      value={item.pickup_by}
                      onChange={(e) => handleStatusChange(item.id, e.target.value)}
                    />
                  ) : (
                    item.pickup_by
                  )}
                </TableCell>
                <TableCell>
                  {editingItemId === item.id ? (
                    <Table>
                      {/* <TableHead>
                        <TableRow>
                          <TableCell>Type</TableCell>
                          <TableCell>Weight</TableCell>
                          <TableCell>Unit</TableCell>
                        </TableRow>
                      </TableHead> */}
                      <TableBody>
                        {item.items_in_bag.map((bagItem, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <TextField
                                value={bagItem.type}
                                onChange={(e) =>
                                  handleBagItemChange(item.id, index, "type", e.target.value)
                                }
                              />
                            </TableCell>
                            <TableCell>
                              <TextField
                                value={bagItem.weight}
                                onChange={(e) =>
                                  handleBagItemChange(item.id, index, "weight", e.target.value)
                                }
                              />
                            </TableCell>
                            <TableCell>
                              <TextField
                                value={bagItem.unit}
                                onChange={(e) =>
                                  handleBagItemChange(item.id, index, "unit", e.target.value)
                                }
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  ) : (
                    // Display items in bag
                    <Table>
                      {/* <TableHead>
                        <TableRow>
                          <TableCell>Type</TableCell>
                          <TableCell>Weight</TableCell>
                          <TableCell>Unit</TableCell>
                        </TableRow>
                      </TableHead> */}
                      <TableBody>
                        {item.items_in_bag.map((bagItem, index) => (
                          <TableRow key={index}>
                            <TableCell>{bagItem.type}</TableCell>
                            <TableCell>{bagItem.weight}</TableCell>
                            <TableCell>{bagItem.unit}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  )}
                </TableCell>
                <TableCell>
                  {editingItemId === item.id ? (
                    <Select
                      value={item.status}
                      onChange={(e) => handleStatusChange(item.id, e.target.value)}
                    >
                      {statuses.map((status) => (
                        <MenuItem key={status} value={status}>
                          {status}
                        </MenuItem>
                      ))}
                    </Select>
                  ) : (
                    item.status
                  )}
                </TableCell>
                <TableCell>{item.reward}</TableCell>
                <ActionButtonsWrapper>
                  {editingItemId === item.id ? (
                    <Button variant="contained" color="primary" onClick={handleSave}>
                      Save
                    </Button>
                  ) : (
                    <Button variant="contained" color="primary" onClick={() => handleEdit(item.id)}>
                      Edit
                    </Button>
                  )}
                </ActionButtonsWrapper>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    </ContainerWrapper>
  );
};

export default PickUpRequests;
