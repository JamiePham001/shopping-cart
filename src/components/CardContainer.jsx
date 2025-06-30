import "../styles/CardContainer.css";

export const CardContainer = ({ children, highscore, currentScore }) => {
  return (
    <section>
      <div className="score-container">
        <div>highscore: {highscore}</div>
        <div>score: {currentScore}</div>
      </div>
      {children}
    </section>
  );
};
