import { LayersControl } from "react-leaflet";

const Overlay = ({ className, checked, name, childComponent }) => {
  return (
    <LayersControl.Overlay
      name={name}
      checked={checked}
      className={`LayersControlOverlay ${className ? className : ""} `}
    >
      {childComponent}
    </LayersControl.Overlay>
  );
};

export default Overlay;
