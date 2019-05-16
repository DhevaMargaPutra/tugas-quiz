// get soal object from json
// saat awal ke menu quiz, populate soal, jawaban

const soals = [
  {
    pertanyaan: "ini jawabannya a",
    opsi: ["ini a", "ini b", "ini c", "ini d"],
    jawaban: 0
  },
  {
    pertanyaan: "ini jawabannya b",
    opsi: ["ini a", "ini b", "ini c", "ini d"],
    jawaban: 1
  },
  {
    pertanyaan: "ini jawabannya c",
    opsi: ["ini a", "ini b", "ini c", "ini d"],
    jawaban: 2
  },
  {
    pertanyaan: "ini jawabannya d",
    opsi: ["ini a", "ini b", "ini c", "ini d"],
    jawaban: 3
  }
];

const soalDOM = document.getElementById("soal");
const opsiGroupDOM = document.getElementById("opsi-group");

let currentSoal = [];

function populateSoal() {
  if (soals.length === 0) {
    console.error("soal habis!");
    return;
  }

  const r = Math.floor(Math.random() * soals.length);

  currentSoal = soals.splice(r, 1)[0];

  soalDOM.innerHTML = currentSoal.pertanyaan;
  for (let i = 0; i < opsiGroupDOM.childElementCount; i++) {
    opsiGroupDOM.children[i].innerHTML = currentSoal.opsi[i];
  }
}

// function
