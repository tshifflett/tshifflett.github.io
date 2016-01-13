var map;
var code = "1e-jTXyWyMe2tQyIa15R_ShTvTCsvseJyUUar6wTKrG0"

document.addEventListener('DOMContentLoaded',function(){
  map = L.map('map').setView([0, 0], 1);
  L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  Tabletop.init({ 
    key: code,
    callback: function(sheet, tabletop){ 
      for (var i in sheet){
        			var place = sheet[i];
					
		var popup = L.popup()
			.setContent("<b>Program</b>" + place.program + "<br>" + "<b>Employer</b>" + place.employer)
			

        L.marker([place.lat, place.lon])
          .addTo(map)
          .bindPopup(popup)
		  		
      }
    },
    simpleSheet: true 
  })
  
})