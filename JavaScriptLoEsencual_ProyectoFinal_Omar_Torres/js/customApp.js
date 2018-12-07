var Estudiantes = {
  "Estudiantes" : [
    {
      "Codigo":"001",
      "Nombre":"Camilo",
      "Apellido":"Martinez",
      "Nota":10.0
    },{
      "Codigo":"002",
      "Nombre":"Lucia",
      "Apellido":"Hernandez",
      "Nota":4.3
    },{
      "Codigo":"003",
      "Nombre":"Andrea",
      "Apellido":"Rocha",
      "Nota":7.3
    },{
      "Codigo":"004",
      "Nombre":"Paula",
      "Apellido":"Olivar",
      "Nota":9.3
    },{
      "Codigo":"005",
      "Nombre":"Carlos",
      "Apellido":"Olivieri",
      "Nota":3.2
    },{
      "Codigo":"006",
      "Nombre":"Popeye",
      "Apellido":"Marino",
      "Nota":6.4
    },{
      "Codigo":"007",
      "Nombre":"Marco",
      "Apellido":"Vidal",
      "Nota":2.0
    },{
      "Codigo":"008",
      "Nombre":"Rosa",
      "Apellido":"Rodriguez",
      "Nota":4.4
    },{
      "Codigo":"009",
      "Nombre":"Laura",
      "Apellido":"Henao",
      "Nota":5.0
    },{
      "Codigo":"010",
      "Nombre":"Blanca",
      "Apellido":"Mendoza",
      "Nota":8.2
    }
  ]
};

function cargarJSON(){

  const contador = Estudiantes.Estudiantes.length;
  var mostrarTodos = '';
  var sumatoria = 0;
  var promedio = 0;
  var notas = [];
  var max = 0;
  var min = 10;
  var x;
  for(var i=0; i<contador;i++){
    notas.push(parseFloat(Estudiantes.Estudiantes[i].Nota));
    mostrarTodos += `<tr>
    <td>${Estudiantes.Estudiantes[i].Codigo}</td>
    <td>${Estudiantes.Estudiantes[i].Nombre}</td>
    <td>${Estudiantes.Estudiantes[i].Apellido}</td>
    <td>${Estudiantes.Estudiantes[i].Nota}</td>
    </tr>`;
    document.getElementById('table-content').innerHTML = mostrarTodos;

    var value = Number(Estudiantes.Estudiantes[i].Nota)
    if(value > max){
      max = value;
      var mayorNota = `<tr>
      <td>${Estudiantes.Estudiantes[i].Codigo}</td>
      <td>${Estudiantes.Estudiantes[i].Nombre}</td>
      <td>${Estudiantes.Estudiantes[i].Apellido}</td>
      <td>${Estudiantes.Estudiantes[i].Nota}</td>
      </tr>`
    }
    if(value < min){
      min = value;
      var menorNota = `<tr>
      <td>${Estudiantes.Estudiantes[i].Codigo}</td>
      <td>${Estudiantes.Estudiantes[i].Nombre}</td>
      <td>${Estudiantes.Estudiantes[i].Apellido}</td>
      <td>${Estudiantes.Estudiantes[i].Nota}</td>
      </tr>`
    }
    document.getElementById('table-max').innerHTML = mayorNota;
    document.getElementById('table-min').innerHTML = menorNota;
  };

  for(x in notas){
    sumatoria += notas[x];
  };
  promedio = sumatoria/contador;
  document.getElementById('text-prom').innerHTML = promedio;
};

window.onload = cargarJSON;


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var options = [];
    var instances = M.Collapsible.init(elems, options);
});
