import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet with Vite
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface RouteMapProps {
  routes: Array<{
    from: string;
    to: string;
    fromCoords: [number, number];
    toCoords: [number, number];
    status: string;
  }>;
}

const RouteMap = ({ routes }: RouteMapProps) => {
  // Custom icons for different locations
  const portIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const plantIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return (
    <div className="h-[600px] w-full rounded-lg overflow-hidden border border-border shadow-elevated">
      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={5}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {routes.map((route, index) => (
          <div key={index}>
            {/* From location (Port) */}
            <Marker position={route.fromCoords} icon={portIcon}>
              <Popup>
                <div className="text-sm">
                  <strong>{route.from}</strong>
                  <br />
                  Origin Port
                </div>
              </Popup>
            </Marker>

            {/* To location (Steel Plant) */}
            <Marker position={route.toCoords} icon={plantIcon}>
              <Popup>
                <div className="text-sm">
                  <strong>{route.to}</strong>
                  <br />
                  Destination
                </div>
              </Popup>
            </Marker>

            {/* Route line */}
            <Polyline
              positions={[route.fromCoords, route.toCoords]}
              color={route.status === 'Active' ? '#0ea5e9' : '#94a3b8'}
              weight={3}
              opacity={0.7}
              dashArray={route.status === 'Active' ? undefined : '10, 10'}
            />
          </div>
        ))}
      </MapContainer>
    </div>
  );
};

export default RouteMap;
