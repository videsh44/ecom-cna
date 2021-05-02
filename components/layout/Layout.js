import useWindowSize from '../common/custom-hooks/useWindowSize';

import DesktopNav from './desktop/DesktopNav';
import MobileNav from './mobile/MobileNav';

//#3366ff - navbar color
const Layout = ({ children, deviceType }) => {
  const size = useWindowSize();

  const { width } = size;

  if (width <= 768 || deviceType === 'mobile') {
    return <MobileNav>{children}</MobileNav>;
  }

  return <DesktopNav>{children}</DesktopNav>;
};

export default Layout;
