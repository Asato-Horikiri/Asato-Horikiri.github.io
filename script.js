'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const Yesbutton = document.getElementById("Yesbutton");
Yesbutton.addEventListener("click",Yesjudge);

// // function Yesjudge(){
//   window.alert("Yhank you !")
  // const answer = document.createElement("p");
  // answer.innerText ="ありがとうございます！"
  // document.getElementById("Yesfield").appendChild(answer);
// }

function Yesjudge(){
  const YesAnswer = document.createElement("p");
  YesAnswer.textContent = "Thank you for your purchase ! Fill out forms."    
  document.getElementById("Yesfield").appendChild(YesAnswer);
  window.alert("Thank you for your purchase ! Fill out forms.")
}


const Nobutton = document.getElementById("Nobutton");
Nobutton.addEventListener("click",Nojudge);

function Nojudge(){
  const background = document.body;
  background.style.backgroundColor = "gray";
  const NoAnswer = document.createElement("p");
  NoAnswer.textContent = "";
  NoAnswer.textContent = "I'm sorry. Hopefully next time... 佐瀬さん、次のプレゼンよろしくお願いします！"    
  document.getElementById("Nofield").appendChild(NoAnswer);
  window.alert("I'm sorry. Hopefully next time... ")
}
