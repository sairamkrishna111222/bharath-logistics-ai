import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet with Vite (run once)
let iconFixApplied = false;
if (!iconFixApplied) {
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  });
  iconFixApplied = true;
}

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
  // Create icons only once using useRef to prevent recreation on every render
  const portIconRef = useRef<L.Icon | null>(null);
  const plantIconRef = useRef<L.Icon | null>(null);

  useEffect(() => {
    if (!portIconRef.current) {
      portIconRef.current = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
    }

    if (!plantIconRef.current) {
      plantIconRef.current = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
    }
  }, []);

  // Return early if icons aren't ready
  if (!portIconRef.current || !plantIconRef.current) {
    return (
      <div className="h-[600px] w-full rounded-lg overflow-hidden border border-border shadow-elevated flex items-center justify-center">
        <p className="text-muted-foreground">Loading map...</p>
      </div>
    );
  }

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
          <React.Fragment key={index}>
            {/* From location (Port) */}
            <Marker position={route.fromCoords} icon={portIconRef.current!}>
              <Popup>
                <div className="text-sm">
                  <strong>{route.from}</strong>
                  <br />
                  Origin Port
                </div>
              </Popup>
            </Marker>

            {/* To location (Steel Plant) */}
            <Marker position={route.toCoords} icon={plantIconRef.current!}>
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
          </React.Fragment>
        ))}
      </MapContainer>
    </div>
  );
};

export default RouteMap;
