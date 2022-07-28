import {
  ansebaBorder,
  countryBorder,
  cultBorders,
  powerplant,
  rails,
  roadLines,
  politicalBorder,
  tesseneyBorder,
  waterArea,
  waterlines,
} from "./OverlayData";
import Line from "../Shapes/Line/Line";
import Point from "../Shapes/Point/Point";

const anseba = Line({
  checked: true,
  data: ansebaBorder,
  name: "Anseba",
  pathOptions: { color: "#888" },
});

const borders = Line({
  checked: true,
  data: countryBorder,
  name: "Borders",
  pathOptions: { color: "rgba(0, 0, 0, 0.7)" },
});

const cultivation = Line({
  checked: true,
  data: cultBorders,
  name: "Cultivation",
  pathOptions: { color: "lightgreen" },
});

const politicalBorders = Line({
  checked: true,
  data: politicalBorder,
  name: "Political Borders",
  pathOptions: { color: "green" },
});

const powerplants = Point({ data: powerplant, name: "Powerplants" });

const railRoads = Line({
  checked: true,
  data: rails,
  name: "Rail Roads",
  pathOptions: { color: "rgba(255,0,0,0.6)" },
});

const roads = Line({
  checked: true,
  data: roadLines,
  name: "Roads",
  pathOptions: { color: "rgba(255,0,0,0.3)" },
});

const tesseney = Line({
  checked: true,
  data: tesseneyBorder,
  name: "Tesseney",
  pathOptions: { color: "brown" },
});

const water = Line({
  checked: true,
  data: waterlines,
  name: "Waterlines",
});

const waterAreas = Line({
  checked: true,
  data: waterArea,
  name: "Water Areas",
  pathOptions: { color: "darkblue" },
});

export const overlays = [
  borders,
  anseba,
  tesseney,
  cultivation,
  railRoads,
  roads,
  politicalBorders,
  powerplants,
  water,
  waterAreas,
];

export default overlays;
