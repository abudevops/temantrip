(function(e){function n(t,n,r,i){var s={zoom:n,mapTypeId:google.maps.MapTypeId.ROADMAP};var o=new google.maps.Map(t,s);var u=new google.maps.Geocoder;var a=null;var f="";u.geocode({address:r},function(e,t){if(t==google.maps.GeocoderStatus.OK){o.setCenter(e[0].geometry.location)}else{console.log("Geocode was not successful for the following reason: "+t)}});e.each(i.markers,function(e,t){latitude=t.latitude;longitude=t.longitude;icon=t.icon;var n=t.baloon_text;if(latitude!=""&&longitude!=""){var r=new google.maps.Marker({map:o,position:new google.maps.LatLng(latitude,longitude),animation:google.maps.Animation.DROP,icon:icon});google.maps.event.addListener(r,"click",function(){if(a){a.close()}a=new google.maps.InfoWindow({content:n});a.open(o,r)})}})}e.fn.mapmarker=function(t){var r=e.extend({},e.fn.mapmarker.defaults,t);return this.each(function(){var e=this;n(e,r.zoom,r.center,r.markers)})};var t={markers:[]};e.fn.mapmarker.defaults={zoom:8,center:"United States",markers:t}})(jQuery)
;
