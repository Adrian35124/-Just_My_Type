$(document).ready(function () {
    // let gameState = {
    //     charIndex: 0,
    //     arrayIndex: 0,
    //     start: null,
    //     finish: null,
    //     numMistakes: 0
    // }

  $("#keyboard-upper-container").hide();
  let charIndex = 0;
  let arrayIndex = 0;
  let start = null;
  let finish = null;
  let numMistakes = 0;
  // shows the uppercase keyboard when the shift key is pressed
  $(document).keydown(function (e) {
    if (e.keyCode == 16) {
      $("#keyboard-lower-container").hide();
      $("#keyboard-upper-container").show();
    }
  });
  // hides the uppercase keyboard when the shift key is pressed
  $(document).keyup(function (e) {
    if (e.keyCode == 16) {
      $("#keyboard-upper-container").hide();
      $("#keyboard-lower-container").show();
    }
    let asciiLetter = e.key.charCodeAt(0);
    $(`#${asciiLetter}`).css("background-color", "#f5f5f5");
  });

  function disableKeys() {
    $(document).unbind("keypress");
    $(document).unbind("keyup");
    $(document).unbind("keydown");
  }

  $(document).keypress(function (e) {
    if (sentences[arrayIndex] === undefined) {
      finish = Date.now();
      let time = finish - start;
      time /= 60000;
      let score = Math.round(54 / time - 2 * numMistakes);

      $("#feedback").html(`Your Score is ${score}!`);
      let btn = `<button id="restart-btn">Play again?<button>`;
      $("#feedback").append(btn);
      $("#restart-btn").click(gameOver);

      disableKeys();
    } else {
      $(`#${e.keyCode}`).css("background-color", "yellow"); // gives its this yellow highlight once clicked
      $("#yellow-block").css("left", "+=17.5px"); // moves the yellow block right
      $("#target-letter").html(sentences[arrayIndex][charIndex]);
      if (start === null) {
        start = Date.now();
      }

      if (e.key === sentences[arrayIndex][charIndex]) {
        $("#feedback").html("<span class= 'glyphicon glyphicon-ok'></span>");
      } else {
        $("#feedback").html(
          "<span class= 'glyphicon glyphicon-remove'></span>"
        );
        numMistakes++;
      }
      if (charIndex === sentences[arrayIndex].length) {
        arrayIndex++;
        charIndex = 0;
        $("#sentence").html(sentences[arrayIndex]);
        $("#yellow-block").css({ left: 17 });
      }
      $("#target-letter").html(sentences[arrayIndex][charIndex]);
      charIndex++;
    }
  });
  function gameOver() {
    charIndex = 0;
    arrayIndex = 0;
    start = null;
    finish = null;
    numMistakes = 0;
    $("#target-letter").html(sentences[arrayIndex][charIndex]);
    $("#sentence").html(sentences[arrayIndex]);
    $("#feedback").empty();
  }

  let sentences = [
    "ten ate neite ate nee enet ite ate inet ent eate",
    "Too ato too nOt enot one totA not anot tOO aNot",
    "oat itain oat tain nate eate tea anne inant nean",
    "itant eate anot eat nato inate eat anot tain eat",
    "nee ene ate ite tent tiet ent ine ene ete ene ate",
  ];
  $("#sentence").append(sentences[arrayIndex]);
  let sentLength = sentence[0] === sentences.length;
  $("#target-letter").html(sentences[arrayIndex][charIndex]);
});
