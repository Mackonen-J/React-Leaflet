import { LayersControl } from "react-leaflet";
import BaseLayer from "../BaseLayer/BaseLayer";
import baseLayers from "../BaseLayer/BaseLayerData";
import Overlay from "../Overlay/Overlay";
import overlays from "../Overlay/OverlayGeometry";

const LayerController = () => (
  <LayersControl position="topright">
    {baseLayers?.map((b) => (
      <BaseLayer
        key={b.id}
        checked={b.checked}
        name={b.name}
        attribution={b.attribution}
        url={b.url}
      />
    ))}
    {overlays?.map((o, i) => {
      return (
        <Overlay
          key={o.id || i}
          name={o.name}
          checked={o.checked}
          className={o.className}
          childComponent={o.childComponent}
        />
      );
    })}
  </LayersControl>
);

export default LayerController;
