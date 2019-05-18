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
const indikatorSoalDOM = document.getElementById("indikator-soal");
const timerIsiDOM = document.getElementById("timer-isi");
const resultContainerDOM = document.getElementById("result-container");
const scoreDOM = document.getElementById("score");

let currentSoal = [];
let totalBenar = 0;
let totalSoal = 0;

function populateSoal() {
  const r = Math.floor(Math.random() * soals.length);

  currentSoal = soals.splice(r, 1)[0];

  soalDOM.innerHTML = currentSoal.pertanyaan;
  for (let i = 0; i < opsiGroupDOM.childElementCount; i++) {
    opsiGroupDOM.children[i].innerHTML = currentSoal.opsi[i];
  }
}

function populateIndicatorSoal() {
  indikatorSoalDOM.innerHTML = `${totalBenar}/${totalSoal}`;
  totalSoal++;
}

nextSoal();

function checkJawaban(indexJawaban) {
  if (indexJawaban === currentSoal.jawaban) {
    totalBenar += 1;
    resetTimer();
  } else {
    resetTimer();
  }
}

function nextSoal() {
  if (soals.length === 0) {
    populateIndicatorSoal();
    timerIsiDOM.classList.remove("timer-animation");
    resultContainerDOM.style.display = "flex";
    scoreDOM.innerHTML = `score: ${totalBenar}`;
    return;
  }

  populateSoal();
  populateIndicatorSoal();
}

timerIsiDOM.addEventListener("animationend", function() {
  if (soals.length === 0) {
    timerIsiDOM.classList.remove("timer-animation");
    populateIndicatorSoal();
    return;
  }
  resetTimer();
});

function resetTimer() {
  nextSoal();
  timerIsiDOM.classList.remove("timer-animation");
  void timerIsiDOM.offsetWidth;
  timerIsiDOM.classList.add("timer-animation");
}
