import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxGeocoder from "@mapbox/mapbox-sdk/services/geocoding";

mapboxgl.accessToken =
  "pk.eyJ1Ijoicm96MjVkZXYiLCJhIjoiY2x4amtkZ2wxMjA0eDJqcG9kdDJubTUxYSJ9.Wx-2_8kW9EMj4LeEDXdhbw";

const MapComponent = () => {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);
  const [lng, setLng] = useState(-79.383186);
  const [lat, setLat] = useState(43.653225);
  const [zoom, setZoom] = useState(10);

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
                "../assets/logo/icons8-map-marker-50.png";
              el.style.width = "30px";
              el.style.height = "30px";
              el.style.backgroundSize = "cover";
              el.style.borderRadius = "50%";

              new mapboxgl.Marker(el)
                .setLngLat(feature.geometry.coordinates)
                .setPopup(
                  new mapboxgl.Popup({ offset: 25 }).setHTML(
                    `<h3>${feature.text}</h3><p>${feature.place_name}</p>`
                  )
                )
                .addTo(map);
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
