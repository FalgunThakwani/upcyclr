import React, { useContext } from 'react';
import { AppContext } from '../../App';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Link } from '@mui/material';


export const RedeemedRewards = () => {
    const { rewards } = useContext(AppContext);
    const redeemedRewards = rewards.filter((reward) => reward.isRedeemed);
  
    return (
        <div>
        <Typography variant="h4" gutterBottom>
          Redeemed Rewards
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {redeemedRewards.map((reward) => (
                <TableRow key={reward.id} component={Link} to={`/rewards/${reward.id}`} style={{ textDecoration: 'none' }}>
                  <TableCell component="th" scope="row">
                    {reward.title}
                  </TableCell>
                  <TableCell>{reward.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };
  

// export const RedeemedRewards = () => {
//   const { rewards } = useContext(AppContext);
//   const redeemedRewards = rewards.filter((reward) => reward.isRedeemed);

//   return (
//     <div>
//       {redeemedRewards.map((reward) => (
//         <div key={reward.id}>
//           <h3>{reward.title}</h3>
//           <p>{reward.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };
