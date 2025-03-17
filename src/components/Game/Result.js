const Result = ({ player1Name, player2Name, result }) => {
  let message = "";

  if (result === 3) {
    message = "It's a draw!";
  } else if (result === 1) {
    message = `${player1Name} wins!`;
  } else if (result === 2) {
    message = `${player2Name} wins!`;
  }

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};

export default Result;
