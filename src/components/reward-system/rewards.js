import { AvailableRewardsScrollView } from "./available-rewards-scroll-view";
import { useContext } from 'react';
import { AppContext } from '../../App.js';
import { RedeemedRewards } from "./redeemed-rewards";

export const Rewards = () => {
  const {rewards} = useContext(AppContext);
    return (
      <div>
          <AvailableRewardsScrollView />
          <RedeemedRewards />
      </div>
    );
}