import { RewardCard } from "./RewardCard";

export const AvailableRewards = ( { rewards } ) => {
    return (
        <div className="side-scrolling-card-view">
          {rewards.map((reward, index) => (
            <RewardCard key={index} reward={reward} />
          ))}
        </div>
      );
};