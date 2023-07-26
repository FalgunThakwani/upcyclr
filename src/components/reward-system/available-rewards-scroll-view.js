import { RewardCard } from "./reward-card";
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../App.js';

export const AvailableRewardsScrollView = () => {
    const { rewards } = useContext(AppContext);
    const unredeemedRewards = rewards.filter((reward) => !reward.isRedeemed);
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Available Rewards
            </Typography>
            <Box sx={{ display: 'flex', overflowX: 'auto', padding: 2 }}>
                {unredeemedRewards.map((reward) => (
                // Add a conditional check to ensure the reward is valid
                reward && reward.title ? (
                <Link key={reward.id} to={`/rewards/${reward.id}`} style={{ textDecoration: 'none' }}>
                    <RewardCard reward={reward} />
                </Link>
                ) : null
                ))}
            </Box>
        </div>
    );
}