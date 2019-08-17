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
    //   markerCoordinates: [
    //     {
    //       latitude: 6.0536111,
    //       longitude: 80.2116667
    //     },
    //     {
    //       latitude: 51.505874,
    //       longitude: -0.1838486
    //     },
    //     {
    //       latitude: 51.4998973,
    //       longitude: -0.202432
    //     }
    //   ],
      markerCoordinates1: [
        {
          latitude: 5.938092,
          longitude: 80.576134,
          type: "bean"
        },
        {
          latitude: 6.017447,
          longitude: 80.248863,
          type: "potato"
        },
        {
          latitude: 6.072259,
          longitude: 80.238449,
          type: "tomato"
        },
        {
          latitude: 6.068124,
          longitude: 80.264268,
          type: "tomato"
        },
        {
          latitude: 6.100507,
          longitude: 80.477510,
          type: "potato"
        },
      ],
      // markerCoordinates1: [
      //   {
      //     latitude: 20.0536111,
      //     longitude: 80.2116667,
      //     type: "bean"
      //   },
      //   {
      //     latitude: 21.505874,
      //     longitude: -50.1838486,
      //     type: "potato"
      //   },
      //   {
      //     latitude: 1.4998973,
      //     longitude: -0.202432,
      //     type: "tomato"
      //   }
      // ],
      map: null,
      bounds: null,
      markers: []
    };
  },
  mounted: function() {
    var goldStar = {
      path:
        "M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z",
      fillColor: "yellow",
      fillOpacity: 0.8,
      scale: 0.1,
      strokeColor: "gold",
      strokeWeight: 1
    };
    var greenStar = {
      path:
        "M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z",
      fillColor: "green",
      fillOpacity: 0.8,
      scale: 0.1,
      strokeColor: "gold",
      strokeWeight: 1
    };
    var redStar = {
      path:
        "M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z",
      fillColor: "red",
      fillOpacity: 0.8,
      scale: 0.1,
      strokeColor: "gold",
      strokeWeight: 1
    };

    // var iconBase = "https://maps.google.com/mapfiles/kml/shapes/";
    var icons = {
      potato: {
        icon: goldStar
      },
      tomato: {
        icon: redStar
      },
      bean: {
        icon: greenStar
      }
    };
    this.bounds = new google.maps.LatLngBounds();
    const element = document.getElementById(this.mapName);
    const mapCentre = this.markerCoordinates1[0];
    const options = {
      center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude)
    };
    this.map = new google.maps.Map(element, options);
    this.markerCoordinates1.forEach(coord => {
      const position = new google.maps.LatLng(coord.latitude, coord.longitude);
      const marker = new google.maps.Marker({
        position,
        icon: icons[coord.type].icon,
        map: this.map
      });

      this.markers.push(marker);
      this.map.fitBounds(this.bounds.extend(position));
    });
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