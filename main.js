var keysdown = {};



$tabk=$('.key-tab');
$tabs=$('.shadow-tab');

$qk=$('.key-q');
$qs=$('.shadow-q');

$wk=$('.key-w');
$ws=$('.shadow-w');

$ek=$('.key-e');
$es=$('.shadow-e');

$rk=$('.key-r');
$rs=$('.shadow-r');

$tk=$('.key-t');
$ts=$('.shadow-t');

$yk=$('.key-y');
$ys=$('.shadow-y');

$uk=$('.key-u');
$us=$('.shadow-u');

$ik=$('.key-i');
$is=$('.shadow-i');

$ok=$('.key-o');
$os=$('.shadow-o');

$pk=$('.key-p');
$ps=$('.shadow-p');

$bckk=$('.key-bck');
$bcks=$('.shadow-bck');



$capsk=$('.key-caps');
$capss=$('.shadow-caps');

$ak=$('.key-a');
$as=$('.shadow-a');

$sk=$('.key-s');
$ss=$('.shadow-s');

$dk=$('.key-d');
$ds=$('.shadow-d');

$fk=$('.key-f');
$fs=$('.shadow-f');

$gk=$('.key-g');
$gs=$('.shadow-g');

$hk=$('.key-h');
$hs=$('.shadow-h');

$jk=$('.key-j');
$js=$('.shadow-j');

$kk=$('.key-k');
$ks=$('.shadow-k');

$lk=$('.key-l');
$ls=$('.shadow-l');

$enterk=$('.key-enter');
$enters=$('.shadow-enter');






$shiftk=$('.key-shift');
$shifts=$('.shadow-shift');

$spacek=$('.key-space');
$spaces=$('.shadow-space');

$xk=$('.key-x');
$xs=$('.shadow-x');

$ck=$('.key-c');
$cs=$('.shadow-c');

$vk=$('.key-v');
$vs=$('.shadow-v');

$bk=$('.key-b');
$bs=$('.shadow-b');

$nk=$('.key-n');
$ns=$('.shadow-n');

$mk=$('.key-m');
$ms=$('.shadow-m');

$quk=$('.key-qu');
$qus=$('.shadow-qu');




// keydown handler
$(document).keydown(function(e){

  // Do we already know it's down?
  if (keysdown[e.keyCode]) {
      // Ignore it
      return;
  }

  keysdown[e.keyCode] = true;

  console.log(e.keyCode);


  switch(e.keyCode){

    case 32:
      $($spacek).toggleClass('key-pressed');
      $($spaces).toggleClass('key-pressed');
      break;

    case 16:
      $($shiftk).toggleClass('key-pressed');
      $($shifts).toggleClass('key-pressed');
      break;

    case 20:
      $($capsk).toggleClass('key-pressed');
      $($capss).toggleClass('key-pressed');
      break;

    case 13:
      $($enterk).toggleClass('key-pressed');
      $($enters).toggleClass('key-pressed');
      break;

    case 9:
      $($tabk).toggleClass('key-pressed');
      $($tabs).toggleClass('key-pressed');
      break;

    case 8:
      $($bckk).toggleClass('key-pressed');
      $($bcks).toggleClass('key-pressed');
      break;






    case 81:
      $($qk).toggleClass('key-pressed');
      $($qs).toggleClass('key-pressed');
      break;

    case 87:
      $($wk).toggleClass('key-pressed');
      $($ws).toggleClass('key-pressed');
      break;
    
    case 69:
        $($ek).toggleClass('key-pressed');
        $($es).toggleClass('key-pressed');
        break;

    case 82:
        $($rk).toggleClass('key-pressed');
        $($rs).toggleClass('key-pressed');
        break;

    case 84:
        $($tk).toggleClass('key-pressed');
        $($ts).toggleClass('key-pressed');
        break;

    case 89:
        $($yk).toggleClass('key-pressed');
        $($ys).toggleClass('key-pressed');
        break;

    case 85:
        $($uk).toggleClass('key-pressed');
        $($us).toggleClass('key-pressed');
        break;

    case 73:
        $($ik).toggleClass('key-pressed');
        $($is).toggleClass('key-pressed');
        break;

    case 79:
        $($ok).toggleClass('key-pressed');
        $($os).toggleClass('key-pressed');
        break;

    case 80:
        $($pk).toggleClass('key-pressed');
        $($ps).toggleClass('key-pressed');
        break;





    case 65:
      $($ak).toggleClass('key-pressed');
      $($as).toggleClass('key-pressed');
      break;

    case 83:
      $($sk).toggleClass('key-pressed');
      $($ss).toggleClass('key-pressed');
      break;

    case 68:
      $($dk).toggleClass('key-pressed');
      $($ds).toggleClass('key-pressed');
      break;
      
    case 70:
      $($fk).toggleClass('key-pressed');
      $($fs).toggleClass('key-pressed');
      break;

    case 71:
      $($gk).toggleClass('key-pressed');
      $($gs).toggleClass('key-pressed');
      break;

    case 72:
      $($hk).toggleClass('key-pressed');
      $($hs).toggleClass('key-pressed');
      break;

    case 74:
      $($jk).toggleClass('key-pressed');
      $($js).toggleClass('key-pressed');
      break;

    case 75:
      $($kk).toggleClass('key-pressed');
      $($ks).toggleClass('key-pressed');
      break;

    case 76:
      $($lk).toggleClass('key-pressed');
      $($ls).toggleClass('key-pressed');
      break;






    case 90:
      $($zk).toggleClass('key-pressed');
      $($zs).toggleClass('key-pressed');
      break;

    case 88:
      $($xk).toggleClass('key-pressed');
      $($xs).toggleClass('key-pressed');
      break;

    case 67:
      $($ck).toggleClass('key-pressed');
      $($cs).toggleClass('key-pressed');
      break;

    case 86:
      $($vk).toggleClass('key-pressed');
      $($vs).toggleClass('key-pressed');
      break;

    case 66:
      $($bk).toggleClass('key-pressed');
      $($bs).toggleClass('key-pressed');
      break;

    case 78:
      $($nk).toggleClass('key-pressed');
      $($ns).toggleClass('key-pressed');
      break;

    case 77:
      $($mk).toggleClass('key-pressed');
      $($ms).toggleClass('key-pressed');
      break;

    case 191:
      $($quk).toggleClass('key-pressed');
      $($qus).toggleClass('key-pressed');
      break;
  }
});






//KEY RELEASE CHECK


document.addEventListener('keyup', event => {
  const key = event.key.toLowerCase();
  console.log(key);
  
  switch(key){

    case 'q':
      $($qk).toggleClass('key-pressed');
      $($qs).toggleClass('key-pressed');
      break;

    case 'w':
      $($wk).toggleClass('key-pressed');
      $($ws).toggleClass('key-pressed');
      break;
    
    case 'e':
        $($ek).toggleClass('key-pressed');
        $($es).toggleClass('key-pressed');
        break;

    case 'r':
        $($rk).toggleClass('key-pressed');
        $($rs).toggleClass('key-pressed');
        break;

    case 't':
        $($tk).toggleClass('key-pressed');
        $($ts).toggleClass('key-pressed');
        break;

    case 'y':
        $($yk).toggleClass('key-pressed');
        $($ys).toggleClass('key-pressed');
        break;

    case 'u':
        $($uk).toggleClass('key-pressed');
        $($us).toggleClass('key-pressed');
        break;

    case 'i':
        $($ik).toggleClass('key-pressed');
        $($is).toggleClass('key-pressed');
        break;

    case 'o':
        $($ok).toggleClass('key-pressed');
        $($os).toggleClass('key-pressed');
        break;

    case 'p':
        $($pk).toggleClass('key-pressed');
        $($ps).toggleClass('key-pressed');
        break;





    case 'a':
      $($ak).toggleClass('key-pressed');
      $($as).toggleClass('key-pressed');
      break;

    case 's':
      $($sk).toggleClass('key-pressed');
      $($ss).toggleClass('key-pressed');
      break;

    case 'd':
      $($dk).toggleClass('key-pressed');
      $($ds).toggleClass('key-pressed');
      break;
      
    case 'f':
      $($fk).toggleClass('key-pressed');
      $($fs).toggleClass('key-pressed');
      break;

    case 'g':
      $($gk).toggleClass('key-pressed');
      $($gs).toggleClass('key-pressed');
      break;

    case 'h':
      $($hk).toggleClass('key-pressed');
      $($hs).toggleClass('key-pressed');
      break;

    case 'j':
      $($jk).toggleClass('key-pressed');
      $($js).toggleClass('key-pressed');
      break;

    case 'k':
      $($kk).toggleClass('key-pressed');
      $($ks).toggleClass('key-pressed');
      break;

    case 'l':
      $($lk).toggleClass('key-pressed');
      $($ls).toggleClass('key-pressed');
      break;




    case 'z':
      $($zk).toggleClass('key-pressed');
      $($zs).toggleClass('key-pressed');
      break;

    case 'x':
      $($xk).toggleClass('key-pressed');
      $($xs).toggleClass('key-pressed');
      break;

    case 'c':
      $($ck).toggleClass('key-pressed');
      $($cs).toggleClass('key-pressed');
      break;

    case 'v':
      $($vk).toggleClass('key-pressed');
      $($vs).toggleClass('key-pressed');
      break;

    case 'b':
      $($bk).toggleClass('key-pressed');
      $($bs).toggleClass('key-pressed');
      break;

    case 'n':
      $($nk).toggleClass('key-pressed');
      $($ns).toggleClass('key-pressed');
      break;

    case 'm':
      $($mk).toggleClass('key-pressed');
      $($ms).toggleClass('key-pressed');
      break;

    case '/':
      $($quk).toggleClass('key-pressed');
      $($qus).toggleClass('key-pressed');
      break;

    case ' ':
      $($spacek).toggleClass('key-pressed');
      $($spaces).toggleClass('key-pressed');
      break;

    default:
      if(key=="tab"){
        $($tabk).toggleClass('key-pressed');
        $($tabs).toggleClass('key-pressed');
      }
      else if(key=="backspace"){
        $($bckk).toggleClass('key-pressed');
        $($bcks).toggleClass('key-pressed');
      }
      else if(key=="capslock"){
        $($capsk).toggleClass('key-pressed');
        $($capss).toggleClass('key-pressed');
      }
      else if(key=="enter"){
        $($enterk).toggleClass('key-pressed');
        $($enters).toggleClass('key-pressed');
      }
      else if(key=="shift"){
        $($shiftk).toggleClass('key-pressed');
        $($shifts).toggleClass('key-pressed');
      }
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