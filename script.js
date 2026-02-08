let coins = 0;
const questions = [
  {
    text: "What is 2 + 2?",
    options: ["3","4","5","6"],
    correct: 1,
    image: "https://i.imgur.com/yourSampleImage.png", // free Imgur link
    audio: "" // optional audio
  },
  {
    text: "Which is a fruit?",
    options: ["Carrot","Apple","Potato","Celery"],
    correct: 1,
    image: "",
    audio: ""
  }
];

document.getElementById("startBtn").onclick = () => {
  const nick = document.getElementById("nickname").value || "Player1";
  document.getElementById("room").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  showQuestion(0);
};

function showQuestion(index){
  if(index >= questions.length){
    alert("Game Over! Coins: " + coins);
    return;
  }
  const q = questions[index];
  document.getElementById("questionText").textContent = q.text;

  const imgEl = document.getElementById("questionImage");
  if(q.image){ imgEl.src = q.image; imgEl.style.display="block"; } 
  else { imgEl.style.display="none"; }

  const audEl = document.getElementById("questionAudio");
  if(q.audio){ audEl.src = q.audio; audEl.style.display="block"; audEl.play(); } 
  else { audEl.style.display="none"; }

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  q.options.forEach((opt,i)=>{
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = ()=>{
      if(i === q.correct){
        alert("Correct!");
        coins += 10;
      } else {
        alert("Nice try, so close!");
      }
      document.getElementById("coins").textContent = "Coins: " + coins;
      showQuestion(index+1);
    };
    optionsDiv.appendChild(btn);
  });
}
