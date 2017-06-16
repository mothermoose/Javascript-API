function getData() {
  var vehiclesDiv = document.getElementById('vehicles');
  vehiclesDiv.innerHTML = "Loading...";

    $.get('https://data.cityofchicago.org/resource/rp42-fxjt.json', function(vehicles){

      var htmlString = "";

      for (var i = 0; i < vehicles.length; i++) {
        var vehicle = vehicles[i];
        htmlString += '<div class="vehicle" onclick="changeVehicle(this)">';
          htmlString += '<h2>' + vehicle.make +  '</h2>';
          htmlString += '<h2>' + vehicle.model +  '</h2>';
          htmlString += '<p>Plate: ' + vehicle.plate + '</p>';
          htmlString += '<p>Color: ' + vehicle.color + '</p>';
          htmlString += '<p>State: ' + vehicle.state + '</p>';
        htmlString += '</div>';
        htmlString += '</br>';
      }

      vehiclesDiv.innerHTML = htmlString;
    }); 
} 

function changeVehicle(vehicleDiv) {
    if (vehicleDiv.style.color === 'lightgray') {
      vehicleDiv.style.color = '';
    } else {
    vehicleDiv.style.color = 'lightgray';
  }
}

function showAll(){
  var vehicles = document.getElementsByClassName('vehicle');

  for (var i = 0; i <vehicles.length; i++) {
    var vehicle = vehicles[i];
    vehicle.classList.remove('hidden');
  }
}

function showFord() {
  var vehicles = document.getElementsByClassName('vehicle');

  for (var i = 0; i <vehicles.length; i++) {
    var vehicle = vehicles[i];
      if (vehicle.innerHTML.indexOf('BMW') !== -1) {
        vehicle.classList.remove('hidden');
    } else {
      vehicle.classList.add('hidden');
    }
  }
}