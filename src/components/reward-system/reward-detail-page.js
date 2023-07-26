import { useParams } from 'react-router-dom';
import React, { useContext } from 'react';
import { AppContext } from '../../App'; 


export const RewardDetail = () => {
  const { rewardId } = useParams();
  const {rewards, setRewards } = useContext(AppContext);
  const reward = rewards.find((reward) => reward.id === parseInt(rewardId));

  const handleRedeemReward = () => {
    const updatedRewards = rewards.map((r) =>
      r.id === parseInt(rewardId) ? { ...r, isRedeemed: true } : r
    );
    setRewards(updatedRewards);
  };

  return (
    <div>
      {reward ? (
        <div>
          <h2>{reward.title}</h2>
          <p>{reward.description}</p>
          <p>Is Redeemed: {reward.isRedeemed ? 'Yes' : 'No'}</p>
          <button onClick={handleRedeemReward}>Redeem Reward</button>
        </div>
      ) : (
        <p>Reward not found.</p>
      )}
    </div>
  );
};
