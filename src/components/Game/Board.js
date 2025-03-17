import Cell from "./Cell";

const Board = ({ board, handleClickCell, gameResult }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 100px)",
        gap: "5px",
        margin: "auto",
        maxWidth: "320px",
      }}
    >
      {board.map((cell, index) => (
        <Cell
          key={index}
          content={cell || index}
          onClick={() => handleClickCell(index)}
          disabled={gameResult !== null || cell !== null}
        />
      ))}
    </div>
  );
};

export default Board;
