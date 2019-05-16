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
const indikatorSoal = document.getElementById("indikator-soal");

let currentSoal = [];
let nomorSoal = 0;
let totalSoal = soals.length;

function populateSoal() {
  const r = Math.floor(Math.random() * soals.length);

  currentSoal = soals.splice(r, 1)[0];

  soalDOM.innerHTML = currentSoal.pertanyaan;
  for (let i = 0; i < opsiGroupDOM.childElementCount; i++) {
    opsiGroupDOM.children[i].innerHTML = currentSoal.opsi[i];
  }
}

function populateIndicatorSoal() {
  nomorSoal += 1;
  indikatorSoal.innerHTML = `${nomorSoal}/${totalSoal}`;
}

nextSoal();

function checkJawaban(indexJawaban) {
  if (indexJawaban === currentSoal.jawaban) {
    console.log("benar");
    nextSoal();
    return;
  }

  console.log("salah");
}

function nextSoal() {
  if (soals.length === 0) {
    alert("soal habis!");
    return;
  }

  populateSoal();
  populateIndicatorSoal();
}
