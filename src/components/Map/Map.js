import { MapContainer } from "react-leaflet";
import LayerController from "../LayerController/LayerController";

const Map = () => {
  const centerPosition = [15.0, 40.0];
  const zoom = 7;
  return (
    <MapContainer center={centerPosition} zoom={zoom} scrollWheelZoom={true}>
      <LayerController center={centerPosition} />
    </MapContainer>
  );
};

export default Map;
