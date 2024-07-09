import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxGeocoder from "@mapbox/mapbox-sdk/services/geocoding";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoicm96MjVkZXYiLCJhIjoiY2x4amtkZ2wxMjA0eDJqcG9kdDJubTUxYSJ9.Wx-2_8kW9EMj4LeEDXdhbw";

const MapComponent = () => {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);
  const [lng, setLng] = useState(-79.383186);
  const [lat, setLat] = useState(43.653225);
  const [zoom, setZoom] = useState(12);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLng(position.coords.longitude);
      setLat(position.coords.latitude);
    });

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    setMap(map);

    return () => map.remove();
  }, [lng, lat, zoom]);

  useEffect(() => {
    if (map) {
      map.flyTo({ center: [lng, lat] });

      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
      });

      geocoder
        .forwardGeocode({
          query: "pet store",
          proximity: [lng, lat],
          limit: 5,
        })
        .send()
        .then((response) => {
          if (response && response.body && response.body.features) {
            const features = response.body.features;
            console.log("Geocoding results:", features); // Debugging log

            features.forEach((feature) => {
              const el = document.createElement("div");
              el.className = "marker";
              el.style.backgroundImage =
                "url('../assets/logo/icons8-map-marker-50.png')";
              el.style.width = "30px";
              el.style.height = "30px";
              el.style.backgroundSize = "cover";
              el.style.borderRadius = "50%";

              const coordinates = feature.geometry.coordinates;

              const marker = new mapboxgl.Marker(el)
                .setLngLat(coordinates)
                .setPopup(
                  new mapboxgl.Popup({ offset: 25 }).setHTML(
                    `<h3>${feature.text}</h3><p>${feature.place_name}</p><button class="get-directions" data-lng="${coordinates[0]}" data-lat="${coordinates[1]}">Get Directions</button>`
                  )
                )
                .addTo(map);
            });

            map.on("click", ".get-directions", function (e) {
              const button = e.target;
              const destLng = button.getAttribute("data-lng");
              const destLat = button.getAttribute("data-lat");

              const directions = new MapboxDirections({
                accessToken: mapboxgl.accessToken,
                unit: "metric",
                profile: "mapbox/driving",
              });

              map.addControl(directions, "top-left");

              directions.setOrigin([lng, lat]);
              directions.setDestination([destLng, destLat]);
            });
          } else {
            console.error("No features found");
          }
        })
        .catch((err) => {
          console.error("Error with geocoding request:", err);
        });
    }
  }, [map, lng, lat]);

  return (
    <div
      className="map-container"
      ref={mapContainerRef}
      style={{ height: "50vh", width: "95vw" }}
    />
  );
};

export default MapComponent;
