const calculateResult = (board) => {
  for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
    const rowStartIndex = rowIndex * 3;
    if (
      board[rowStartIndex] &&
      board[rowStartIndex] === board[rowStartIndex + 1] &&
      board[rowStartIndex] === board[rowStartIndex + 2]
    ) {
      return board[rowStartIndex] === "X" ? 1 : 2;
    }
  }
  for (let colIndex = 0; colIndex < 3; colIndex++) {
    if (
      board[colIndex] &&
      board[colIndex] === board[colIndex + 3] &&
      board[colIndex] === board[colIndex + 6]
    ) {
      return board[colIndex] === "X" ? 1 : 2;
    }
  }
  if (board[0] && board[0] === board[4] && board[0] === board[8]) {
    return board[0] === "X" ? 1 : 2;
  }
  if (board[2] && board[2] === board[4] && board[2] === board[6]) {
    return board[2] === "X" ? 1 : 2;
  }
  if (!board.includes(null)) {
    return 3;
  }
  return 0;
};

export default calculateResult;
