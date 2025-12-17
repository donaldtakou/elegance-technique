'use client'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Importez les images d'icônes Leaflet
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Créez une nouvelle instance d'icône par défaut avec les bonnes URLs
const DefaultIcon = L.Icon.Default.extend({
  options: {
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
  },
});

// Appliquez cette icône par défaut à tous les marqueurs
L.Marker.prototype.options.icon = new DefaultIcon();

const yaoundePosition: [number, number] = [3.848, 11.502]; // Komkana, Yaoundé

export default function DynamicMap() {
  return (
    <MapContainer
      center={yaoundePosition}
      zoom={15}
      style={{ height: '400px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={yaoundePosition}>
        <Popup>Notre boutique à Komkana, Yaoundé</Popup>
      </Marker>
    </MapContainer>
  );
}
