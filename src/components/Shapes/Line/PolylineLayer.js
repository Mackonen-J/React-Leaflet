import { FeatureGroup, Polyline, Popup, Tooltip } from "react-leaflet";

const PolylineLayer = ({ data, popupText, pathOptions, tooltipText }) => {
  return data ? (
    <FeatureGroup pathOptions={pathOptions || {}}>
      {popupText && <Popup>{popupText}</Popup>}
      <Polyline positions={data} />
      {tooltipText && <Tooltip>{tooltipText}</Tooltip>}
    </FeatureGroup>
  ): null
};
export default PolylineLayer;
