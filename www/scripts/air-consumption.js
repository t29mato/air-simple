var calculator = function (entry, exit, volume, depth, time) {
  var consumedAir = entry - exit;
  var pressure = depth / 10 + 1;

  var result =  consumedAir * volume / pressure / time;

  return Math.round(result * 10) / 10;
}

$(function () {
  var recalc = function () {
    var entry = $('#entry').text();
    var exit = $('#exit').text();
    var volume = $('#volume').text();
    var depth = $('#depth').text();
    var time = $('#time').text();

    var result = calculator(entry, exit, volume, depth, time);

    $('#result').text(result);
  }

  $('input').on('input', function () {
    var name = $(this).attr('name');
    var value = $(this).val();

    $('#'+name).text(value);

    recalc();
  });

  recalc();
})
