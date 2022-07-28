import * as L from "leaflet";

export const defaultIcon = (props) =>L.icon({
    ...props,
    iconUrl:
      "https://image.shutterstock.com/image-vector/location-pin-icon-on-transparent-260nw-1096787816.jpg",
    iconSize: props?.iconSize || [20, 35],
  });

