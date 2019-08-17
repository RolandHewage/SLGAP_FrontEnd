<template>
    <div class="google-map" :id="mapName"></div>
</template>

<script>
//6.0536111
//80.2116667
//51.501527
//-0.1921837
export default {
  name: "google-map",
  props: ["name"],
  data: function() {
    return {
      mapName: this.name + "-map",
      markerCoordinates: [
        {
          latitude: 6.0536111,
          longitude: 80.2116667
        },
        {
          latitude: 51.505874,
          longitude: -0.1838486
        },
        {
          latitude: 51.4998973,
          longitude: -0.202432
        }
      ],
      map: null,
      bounds: null,
      markers: [],
      t1: null
    };
  },
  mounted: function() {
    this.bounds = new google.maps.LatLngBounds();
    const element = document.getElementById(this.mapName);
    const mapCentre = this.markerCoordinates[0];
    const options = {
      center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude)
    };
    this.map = new google.maps.Map(element, options);
    // this.markerCoordinates.forEach((coord) => {
    //   const position = new google.maps.LatLng(coord.latitude, coord.longitude);
    //   const marker = new google.maps.Marker({
    //     position,
    //     draggable: true,
    //     map: this.map
    //   });

    // this.markers.push(marker);
    //   this.map.fitBounds(this.bounds.extend(position));
    // });


/////////

    const position = new google.maps.LatLng(47.651968, 9.478485);
    var myMarker = new google.maps.Marker({
      position,
      draggable: true
    });
    myMarker.setMap(this.map);

    // this.markers.push(myMarker);
    this.map.fitBounds(this.bounds.extend(position));

/////////

    google.maps.event.addListener(myMarker, "dragend", function(evt) {
      document.getElementById("current").innerHTML =
        "<p>Marker dropped: Current Lat: " +
        evt.latLng.lat() +
        " Current Lng: " +
        evt.latLng.lng() +
        "</p>";
      // this.t1 = evt.latLng.lat().toFixed(3);
      this.t1 = evt.latLng.lat();
      console.log(evt.latLng.lat());
    });
    console.log(this.t1);
  }
};
</script>

<style scoped>
.google-map {
  width: 800px;
  height: 600px;
  margin: 0 auto;
  background: gray;
}
</style>
