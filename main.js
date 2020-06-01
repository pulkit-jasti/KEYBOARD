var keysdown = {};

$a=$('.key-a');
$d=$('.key-d');

// keydown handler
$(document).keydown(function(e){

  // Do we already know it's down?
  if (keysdown[e.keyCode]) {
      // Ignore it
      return;
  }

  // Remember it's down
  keysdown[e.keyCode] = true;

  // Do our thing
  switch(e.keyCode){
    case 65: //left (a)

      console.log('pressed');
      $($a).toggleClass('key-pressed');
      break;

    case 68: //right (d)

      console.log('right');
      $($d).toggleClass('key-pressed');
      break;

  }
});

document.addEventListener('keyup', event => {
  const key = event.key.toLowerCase();
  
  if(key=='a'){
    console.log("released")
    $($a).toggleClass('key-pressed');
  }
  else if(key=='d'){
    $($d).toggleClass('key-pressed');
  }
});

// keyup handler
$(document).keyup(function(e){
  // Remove this key from the map
  delete keysdown[e.keyCode];
});










/*$(document).ready(function(){
    $pressed=$('button')

    $(document).on('keypress',function(e){
        if(e.which == 119){
            $($pressed).toggleClass('key-pressed')
        }
    })
});*/