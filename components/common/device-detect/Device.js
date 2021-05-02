import * as rdd from 'react-device-detect';

export default function Device({ children }) {
  return <div className="device-layout-component">{children(rdd)}</div>;
}
