import "../styles/card.css";

export const Card = ({ rotation, children }) => {
  return (
    <div className="flip-card">
      <div
        className="flip-card-inner"
        style={{ transform: `rotateY(${rotation}deg)` }}
      >
        <div className="flip-card-front">
          <h1>{children}</h1>
        </div>
        <div className="flip-card-back"></div>
      </div>
    </div>
  );
};
