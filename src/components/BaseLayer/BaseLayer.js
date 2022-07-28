import { LayersControl, TileLayer } from "react-leaflet";

const BaseLayer = ({ name, checked, attribution, url }) => {
  return (
    <LayersControl.BaseLayer checked={checked} name={name}>
      <TileLayer
        attribution={attribution}
        url={url}
      />
    </LayersControl.BaseLayer>
  );
};
export default BaseLayer;
