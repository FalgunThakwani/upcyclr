import { Button, Card, CardContent, Typography } from '@mui/material';
import { useContext } from 'react';
import { AppContext } from '../../App';

export const RewardCard = ( { reward }) => {
    const {rewards, setRewards} = useContext(AppContext);
    return (
        <Card sx={{ minWidth: 250, height: 280, marginRight: 2 }}>
            <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                    {reward.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {reward.description}
                </Typography>
                <Typography variant="body3" color="text.secondary">
                    Points: {reward.points}
                </Typography>
                <Button>
                    Redeem
                </Button>
            </CardContent>
        </Card>
    )
    
}