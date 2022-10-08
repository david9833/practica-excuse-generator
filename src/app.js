var title = document.getElementById("the-excuse");

window.onload = () => {
  title.innerHTML = generateExcuse();
};

let generateExcuse = () => {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  var aleatorio1 = Math.floor(Math.random() * who.length);
  var aleatorio2 = Math.floor(Math.random() * what.length);
  var aleatorio3 = Math.floor(Math.random() * when.length);

  return who[aleatorio1] + " " + what[aleatorio2] + " " + when[aleatorio3];
};
