$(document).ready(function () {
    $("#keyboard-upper-container").hide();
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
    $(document).keypress(function (e) {
        $(`#${e.keyCode}`).css("background-color", "yellow")
        $("#yellow-block").css("left", "+=17.5px")
    })

    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    $('#sentence').append(sentences[0]);
}); 
 
