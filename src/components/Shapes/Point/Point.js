import PointMarker from './PointMarker'

const Point = ({ className, checked, eventHandlers, data, name }) => ({
  id: name,
  name: name || '',
  checked: checked || false,
  className: className || '',
  childComponent: <PointMarker data={data} eventHandlers={eventHandlers} />,
});

export default Point;
