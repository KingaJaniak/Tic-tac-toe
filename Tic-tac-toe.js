const winner = document.querySelector("#winner");
const field0 = document.querySelector("#field0");
const field1 = document.querySelector("#field1");
const field2 = document.querySelector("#field2");
const field3 = document.querySelector("#field3");
const field4 = document.querySelector("#field4");
const field5 = document.querySelector("#field5");
const field6 = document.querySelector("#field6");
const field7 = document.querySelector("#field7");
const field8 = document.querySelector("#field8");
const reset = document.querySelector(".reset");

const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const fields = [
  { no: 0, position: field0 },
  { no: 1, position: field1 },
  { no: 2, position: field2 },
  { no: 3, position: field3 },
  { no: 4, position: field4 },
  { no: 5, position: field5 },
  { no: 6, position: field6 },
  { no: 7, position: field7 },
  { no: 8, position: field8 },
];

let currentXO = "X";
const isDraw = fields.every((field) => field.position.innerText !== "");

//Winner checking function
const checkWinner = () => {
  const xFields = fields
    .filter((field) => field.position.innerText === "X")
    .map((field) => field.no);

  const oFields = fields
    .filter((field) => field.position.innerText === "O")
    .map((field) => field.no);

  const didXWin = winningLines.some(
    (
      line //[6,7,8] Array of numbers
    ) =>
      xFields.includes(line[0]) &&
      xFields.includes(line[1]) &&
      xFields.includes(line[2])
  );

  const didOWin = winningLines.some(
    (line) =>
      oFields.includes(line[0]) &&
      oFields.includes(line[1]) &&
      oFields.includes(line[2])
  );

  if (didXWin) {
    winner.innerHTML = `<p class="x">Awesome! Winner is X!</p>`;
  } else if (didOWin) {
    winner.innerHTML = `<p class="o">Awesome! Winner is O!</p>`;
  } else if (isDraw) {
    winner.innerText = "draw";
  }
};

//place X or O
fields.forEach((field) => {
  field.position.addEventListener("click", (event) => {
    if (event.target.innerText === "") {
      event.target.innerText = currentXO;
      currentXO = currentXO === "X" ? "O" : "X";
      checkWinner();
    }
  });
});
reset.addEventListener("click", (event) => {
  fields.forEach((field) => {
    field.position.innerHTML = "";
  });
  currentXO = "X";
  winner.innerText = "No winner just yet...";
});
