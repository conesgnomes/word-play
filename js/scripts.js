$(function() {
  $("form").submit(function() {
    // debugger;
    var sentence = $("input#sentence").val();

    var sentence_arrays = sentence.split(" ");

    var big_word_array = [];

    sentence_arrays.forEach(function(sentence_array) {
      big_word_array.push(sentence_array.length >= 3);
    });



    // sentence_array.forEach(function() {
    //   big_word_array.push(sentence_array.substr(0));
    // });


  });
});
