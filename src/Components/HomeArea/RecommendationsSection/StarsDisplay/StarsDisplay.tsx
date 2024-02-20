interface StarsDisplayProps {
    rank: number;
}

function StarsDisplay(props: StarsDisplayProps): JSX.Element {
    return (
        <div className="StarsDisplay">
            {Array.from({ length: props.rank }, (_, index) => (
                <span key={index} className={index < props.rank ? "star filled" : "star"}>
                    &#9733;
                </span>
            ))}
        </div>
    );
}

export default StarsDisplay;
