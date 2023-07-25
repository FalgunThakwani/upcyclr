export const RewardCard = ( { reward }) => {
    return (
        <div className="reward-card">
            <h3>{reward.title}</h3>
            <p>{reward.description}</p>
        </div>
    )
    
}