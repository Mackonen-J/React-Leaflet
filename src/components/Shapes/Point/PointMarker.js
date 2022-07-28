import { FeatureGroup, Marker, Tooltip } from "react-leaflet";
import { defaultIcon } from "../../utils/iconUtils";
import PopupElement from "../../Elements/PopupElement";

const PointMarker = ({ data, isSingle, eventHandlers }) => {
  if (!data) return null;

  return isSingle ? (
    <Marker
      position={data.coordinates}
      icon={data.myIcon || defaultIcon()}
      eventHandlers={eventHandlers}
    >
      <PopupElement text={`${data.popoverText}`} position={data.coordinates} />
      <Tooltip>{data.toolTipText}</Tooltip>
    </Marker>
  ) : (
    <FeatureGroup>
      {data?.map((point, i) => (
        <Marker
          key={i}
          position={point.coordinates}
          icon={point.myIcon || defaultIcon()}
          eventHandlers={eventHandlers}
        >
          <PopupElement
            text={`${point.popoverText}`}
            position={point.coordinates}
          />
          <Tooltip>{point.toolTipText}</Tooltip>
        </Marker>
      ))}
    </FeatureGroup>
  );
};

export default PointMarker;
