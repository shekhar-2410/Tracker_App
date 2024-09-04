const socket = io();

// Check if Geolocation is available in the browser
if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords;

      // Emit location data to the server
      socket.emit("send-location", { latitude, longitude }, (error) => {
        if (error) {
          console.log("Error sending location:", error);
        }
      });
    },
    (error) => {
      console.log("Error getting location:", error);
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );
}

// Initialize the Leaflet map
const map = L.map("mapid").setView([0, 0], 16);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
  map
);

const markers = {};

// Listen for location updates from the server
socket.on("recive-location", (data) => {
  const { id, latitude, longitude } = data;

  if (!markers[id]) {
    // Create a new marker for the user
    markers[id] = L.marker([latitude, longitude]).addTo(map);
  } else {
    // Update the marker position
    markers[id].setLatLng([latitude, longitude]);
  }

  // Recenter the map to the new location
  map.setView([latitude, longitude], 16);
});

socket.on("user-disconnected", (id) => {
  if (markers[id]) {
    map.removeLayer(markers[id]);
    delete markers[id];
  }
});
