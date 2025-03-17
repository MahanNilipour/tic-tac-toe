const NameInputs = ({
  player1Name,
  setPlayer1Name,
  player2Name,
  setPlayer2Name,
  setNamesConfirmed,
}) => {
  const isButtonDisabled = !player1Name || !player2Name;

  return (
    <div>
      <label>
        Player 1 Name:
        <input
          type="text"
          value={player1Name}
          onChange={(ev) => setPlayer1Name(ev.target.value)}
          maxLength={20}
        />
      </label>
      <label>
        Player 2 Name:
        <input
          type="text"
          value={player2Name}
          onChange={(ev) => setPlayer2Name(ev.target.value)}
          maxLength={20}
        />
      </label>
      <button
        onClick={() => setNamesConfirmed(true)}
        disabled={isButtonDisabled}
      >
        Confirm Names
      </button>
    </div>
  );
};

export default NameInputs;
