<template>
  <div class="home uk-flex uk-flex-column">
    <div class="uk-position-center textul uk-flex uk-flex-middle uk-flex-center uk-height-1-1"><span>Scroll down</span> <span uk-icon="icon:chevron-down;ratio:2" class="iconn"></span></div>
<div class="background"></div>
    <div class="uk-text-center  trandafir" style="" uk-parallax="stroke: 100%; viewport: 1">
          <img class="svg "  src="../assets/trandafirMini1.svg" alt="" uk-svg="">
    </div>
      <div class="uk-text-center trandafir " uk-parallax="stroke: 100%; viewport: 1">
            <img class="svg "  src="../assets/trandafirMini2.svg" alt="" uk-svg="">
      </div>
        <div class="uk-text-center trandafir " uk-parallax="stroke: 100%; viewport: 1">
              <img class="svg "  src="../assets/trandafirMini3.svg" alt="" uk-svg="">
        </div>
     <div class="umplutura"></div>
  </div>
</template>

<script>
function Scrolldown() {
     window.scroll(0,22); 
}

window.onload = Scrolldown;

</script>
<style >

@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Ubuntu&display=swap');
html{background: #c94b4b;  /* fallback for old browsers */
overflow-x:hidden;
color:white;
}
svg{color:white}
.background{

    background: rgb(2,0,36);
   background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(102,9,19,1) 0%, rgba(0,0,0,1) 100%);
   position:fixed;
   width:120vw;
   height:120vh;
   top:0;
   left:0;
   left:-20vw;
}
.gradient{
  position:absolute;
  width:200vw;
  height:200vh;
  background: radial-gradient(90deg,#ba5370 0%, #ba5370 15%, #f4e2d8 90% , white 100%); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.textul{font-family: 'Dancing Script', cursive;
color:white;
z-index:995;
position:relative;
font-size:2em;}
.home{
  width:100%;
}
.trandafir{
  position: fixed;
  top:0;
}
.umplutura {
  height: 200vh;
  width:100%;
}
.svg{width:100%;

}
.iconn[uk-icon="icon:chevron-down"] svg polyline{
    stroke: white;
}
.iconn svg{transform:translateY(0.35em)!important;
stroke: white!important;
}

    .svg{max-width:100vw!important;}
</style>
