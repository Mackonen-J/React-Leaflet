import { Popup } from "react-leaflet";

const PopupElement = ({
  text,
  attribution,
  childComponent,
  position,
  eventHandlers,
}) => {
  return (
      <Popup
        attribution={attribution}
        children={childComponent}
        eventHandlers={eventHandlers}
        text={text}
        position={position}
      >
        {text && text}
        {childComponent && childComponent}
      </Popup>
  );
};

export default PopupElement;
