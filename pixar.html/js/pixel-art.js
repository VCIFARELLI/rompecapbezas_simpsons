var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
var grilla = document.getElementById("grilla-pixeles");
var paleta = document.getElementById("paleta");
var pincel ;
var pintando = 0;
var botonBorrar = document.getElementById("borrar");
var shbatman =document.getElementById("batman");
var shwonder =document.getElementById("wonder");
var shflash =document.getElementById("flash");
var shinvisible =document.getElementById("invisible");
var botonGuardar =document.getElementById("guardar");

function generarPaleta (){ 
  nombreColores.forEach(function(color){
    var pixel = document.createElement("div");
    paleta.appendChild(pixel);  
    pixel.style.backgroundColor=color;
    pixel.className="pixel";
  });
}

function generarGrilla (){ 
  for (var i=0;i<1750; i++){
    var pixel = document.createElement("div");
    grilla.appendChild(pixel);  
    pixel.className="pixelGrilla";
    pixel.addEventListener("mousedown", pintar);
    pixel.addEventListener("mouseover", pintarOver);
    pixel.addEventListener("mouseup", pintarUp);
  };
}

function pintar (e) {
  pintando=1;
  e.target.style.backgroundColor=pincel;
}

function pintarOver (e) {
  if (pintando){
    e.target.style.backgroundColor=pincel;
  }
}

function pintarUp (e) {
  pintando=0;
}

  function generarLinks (){
  $(".pixel").click(function(e){
        $ ("#indicador-de-color").css("background-color",this.style.backgroundColor);
        pincel=this.style.backgroundColor;
      });
   $(".pixelGrilla").click(function(e){
    this.style.backgroundColor = pincel;
    });
}

botonBorrar.addEventListener('click',(function(){
    borrarTodo();
  })
);

function borrarTodo (){
  var $pixeles = document.querySelectorAll("#grilla-pixeles div");
  $pixeles.forEach(function(pixel) {
    pixel.style.backgroundColor = "white"; 
  });
}
botonGuardar.addEventListener('click',(function()
  {
    guardarPixelArt();
  })
);

shbatman.addEventListener('click',
  (function(){
    cargarSuperheroe(batman);
  })
);

shwonder.addEventListener('click',
  (function(){
    cargarSuperheroe(wonder);
  })
);

shflash.addEventListener('click',
  (function(){
    cargarSuperheroe(flash);
  })
);

shinvisible.addEventListener('click',
  (function(){
    cargarSuperheroe(invisible);
  })
);



$(".imgs img").click(function(event){
  var n = event.target.id;
  switch(n)
  {
    case "batman":
      cargarSuperheroe(batman);
      break;
    case "wonder":
      cargarSuperheroe(wonder);
      break;
    case "flash":
      cargarSuperheroe(flash);
      break;
    case "invisible":
      cargarSuperheroe(invisible);
      break;
  } 
  });

colorPersonalizado.addEventListener('change', (function() {
  colorActual = colorPersonalizado.value;
  document.getElementById('indicador-de-color').style.backgroundColor = colorActual;
  pincel = colorActual;
  })
);

function iniciar (){
  generarPaleta();
  generarGrilla();
  generarLinks();
}
iniciar();
