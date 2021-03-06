


$("document").ready(function() {

  
  $( function() {
    $( ".list-group" ).sortable({
      update: function( event, ui ) {
  
   $.get("http://localhost:8080/update?newList=" + JSON.stringify($(".list-group").sortable('toArray')), function(data) {
    //console.log($(".list-group-item"));
    $(".list-group-item").each(function(i){
      $(this).attr("id", i);
      //console.log($(this).attr("id", i));
      });
    });
  
      }
      }
      );

  } );


var map = L.map('mapid').setView([$(".coordLat").val(), $(".coordLon").val()], 5);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

$("li").on("click",function() {
    map.flyTo([$(this).find(".coordLat").val(), $(this).find(".coordLon").val()], 10);
  
});


$("li").each(function(i){
L.marker([$(this).find(".coordLat").val(), $(this).find(".coordLon").val()]).addTo(map)
.bindPopup($(this).find(".city").text() + "  " + "<img src=" + $(this).find(".logo-meteo").attr("src") + '>' + "  " + $(this).find(".desc").text() + "  " + $(this).find(".label").text())
.openPopup();
});
  


})


