function getIt() {
  $('p').on("click", function() {
    alert('Hey!')
  })
}

function frameIt() {
  $('img').on("load", function () {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('#typing').on("keydown", function(key) {
    if (key.keyCode === 71) {
      alert("g has been pressed")
    }
  })
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){

// call functions here
  getIt()
  frameIt()
  pressIt()
  submitIt()

});
