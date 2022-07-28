import { reverseCoordinates } from "../utils/reverseCoordinatesUtils";
import { countryBorders } from "../data/countryBorders";
import { cult } from "../data/cult";
import { ansebaBorders } from "../data/ansebaBorders";
import { tesseneyBorders } from "../data/tesseneyBorders";
import { riversAndStreams } from "../data/riversAndStreams";
import { waterAreas } from "../data/waterAreas";
import { railroad } from "../data/railroad";
import { roads } from "../data/roads";
import { powerplants } from "../data/powerPlant";
import { politicalBoundary } from "../data/politicalBoundary";

import "../../App.css";

//Map through coordinates
const anseba = ansebaBorders.features.map((d) => d.geometry.coordinates);
const border = countryBorders.features.map((d) => d.geometry.coordinates);
const cultBorder = cult.features.map((d) => d.geometry.coordinates);
const railRoads = railroad.features.map((d) => d.geometry.coordinates);
const road = roads.features.map((d) => d.geometry.coordinates);
const politicalBorders = politicalBoundary.features.map(
  (d) => d.geometry.coordinates
);
const tesseney = tesseneyBorders.features.map((d) => d.geometry.coordinates);
const waterline = riversAndStreams.features.map((d) => d.geometry.coordinates);
const water = waterAreas.features.map((d) => d.geometry.coordinates);

const powerplant = powerplants.features.map((d) => ({
  coordinates: [d.geometry.coordinates[1], d.geometry.coordinates[0]],
  popoverText: `Coordinates: ${d.geometry.coordinates[1]}, ${d.geometry.coordinates[0]}`,
  toolTipText: (
    <div className="PointTooltip">
      <div>
        <b>Energy type:</b> Energy type: {d.properties.GEN_TYPE}
      </div>
      <div>
        <b>Plant:</b> {d.properties.PLANT}{" "}
      </div>
      <div>
        <b>Status: </b> {d.properties.STATUS}{" "}
      </div>
    </div>
  ),
}));

//Reverse Latitude and Longitude
let ansebaBorder = reverseCoordinates(anseba[0]);
let countryBorder = reverseCoordinates(border[0]);
let roadLines = reverseCoordinates(road);
let rails = reverseCoordinates(railRoads);
let politicalBorder = reverseCoordinates(politicalBorders[0]);
let tesseneyBorder = reverseCoordinates(tesseney[0]);
let cultBorders = reverseCoordinates(cultBorder[0]);
let waterlines = reverseCoordinates(waterline);
let waterArea = reverseCoordinates(water);

export {
  ansebaBorder,
  countryBorder,
  cultBorders,
  politicalBorder,
  powerplant,
  rails,
  roadLines,
  tesseneyBorder,
  waterArea,
  waterlines,
};
