const PlayerTracker = ({
  player1Name,
  player2Name,
  activePlayer,
  gameResult,
}) => {
  return (
    <div>
      {!gameResult && (
        <>
          <p
            style={{
              color: activePlayer === 1 ? "var(--player1)" : "initial",
            }}
          >
            {player1Name}
          </p>
          <p
            style={{
              color: activePlayer === 2 ? "var(--player2)" : "initial",
            }}
          >
            {player2Name}
          </p>
        </>
      )}
    </div>
  );
};

export default PlayerTracker;
