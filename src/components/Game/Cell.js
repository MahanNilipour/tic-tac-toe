const Cell = ({ content, onClick }) => {
  const textColor =
    content === "X"
      ? "var(--player1)"
      : content === "O"
      ? "var(--player2)"
      : "black";

  return (
    <button
      onClick={onClick}
      style={{
        width: "100px",
        height: "100px",
        border: "1px solid black",
        backgroundColor: "#fff",
        fontSize: "20px",
        fontWeight: "bold",
        cursor: "pointer",
        color: textColor,
      }}
    >
      {content}
    </button>
  );
};

export default Cell;
