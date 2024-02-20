// InteractiveMaps.js
import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const InteractiveMaps = ({ google }) => {
  const [communityCenters, setCommunityCenters] = useState([
    {
      id: 1,
      name: 'Local Community Center 1',
      address: '123 Main St, Cityville, Country',
      position: { lat: 40.7128, lng: -74.0060 }, // Example coordinates for New York
    },
    // Add more community centers as needed
  ]);

  const [activeMarker, setActiveMarker] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [showInfoWindow, setShowInfoWindow] = useState(false);

  const onMarkerClick = (props, marker) => {
    setSelectedPlace(props);
    setActiveMarker(marker);
    setShowInfoWindow(true);
  };

  const onCloseInfoWindow = () => {
    setActiveMarker(null);
    setShowInfoWindow(false);
  };

  useEffect(() => {
    // You can use the Geocoding API to convert addresses into coordinates
    // For simplicity, we're using hardcoded coordinates in this example
  }, [communityCenters]); // Include communityCenters as a dependency

  return (
    <div>
      <h2>Interactive Maps</h2>
      <Map
        google={google}
        initialCenter={{ lat: 40.7128, lng: -74.0060 }} // Example initial center (New York)
        zoom={12}
        style={{ width: '100%', height: '400px', position: 'relative' }}
      >
        {communityCenters.map((center) => (
          <Marker
            key={center.id}
            title={center.name}
            name={center.name}
            position={center.position}
            onClick={onMarkerClick}
          />
        ))}
        <InfoWindow
          marker={activeMarker}
          visible={showInfoWindow}
          onClose={onCloseInfoWindow}
        >
          <div>
            <h4>{selectedPlace && selectedPlace.name}</h4>
            <p>{selectedPlace && selectedPlace.address}</p>
          </div>
        </InfoWindow>
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDOeLssy2xaRvClUoLDr_zShuoUNrEvyzs', // Replace with your correct API key
})(InteractiveMaps);

