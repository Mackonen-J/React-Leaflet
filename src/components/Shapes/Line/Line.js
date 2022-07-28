import PolylineLayer from "./PolylineLayer";

const Line = ({ checked, data, name, pathOptions, popupText }) => ({
  id: name,
  name: name,
  checked: checked,
  childComponent: (
    <PolylineLayer
      data={data}
      checked={true}
      popupText={popupText}
      pathOptions={pathOptions}
    />
  ),
});

export default Line;
