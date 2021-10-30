import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useWindowSize from 'hooks/useWindowSize';
import PrivateSection from 'route/PrivateSection';
import PublicRoutes from 'route/PublicRoutes';
import { useSelector } from 'react-redux';

function Routes() {
    const { pathname } = useLocation();
    // eslint-disable-next-line no-unused-vars
    const [width, height] = useWindowSize();
      const user = useSelector((state) => state.user);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
// console.log(user);
    return user.role ? <PrivateSection /> : <PublicRoutes />;
}

export default Routes;
