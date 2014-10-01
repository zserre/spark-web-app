function getLEDValue(name, idx){
  var sIdx = idx.toString()
  $.get(name, function(data) {
      if (data.result == 0){
        $('#btnLed' + sIdx).html('OFF, (Click to turn ON LED ' + sIdx + ')')
        $('#btnLed' + sIdx).removeClass('btn-warning').addClass('btn-default')
      }else if(data.result == 1){
        $('#btnLed' + sIdx).html('ON, (Click to turn OFF LED ' + sIdx + ')')
        $('#btnLed' + sIdx).removeClass('btn-default').addClass('btn-warning')
      }
  }, 'json')
}

function toggleLEDValue(name, idx){
  var ledValue = ''
  var sIdx = idx.toString()

  if ($('#btnLed' + sIdx).html().substring(0,3) =='OFF') ledValue = 'HIGH'
  else if ($('#btnLed' + sIdx).html().substring(0,2) =='ON') ledValue = 'LOW'
  else return

  $.post(name + '/' + ledValue,{ func: "donePosting" }, function(data) {


     
  }, "json");

  setTimeout(function(){getLEDValues()},500); 
}

function readAnalogValue(name){
  $.get(name, function(data) {
    $('#lblAnalog1').html(data.result)
  }, 'json')
}



function getLEDValues(){
  getLEDValue('led1', 1)
  getLEDValue('led2', 2)
  readAnalogValue('analog1')
}


$(document).ready(function(){

  getLEDValues()

  // $('#btnLed1').on('click', toggleLEDValue('#btnLed1'))
  $('#btnLed1').on('click', function(event) { toggleLEDValue('led1', 1) })
  $('#btnLed2').on('click', function(event) { toggleLEDValue('led2', 2) })
  $('#btnAnalog1').on('click', function(event) { readAnalogValue('analog1') })
  
})
