import { useEffect } from 'react';
import store from '../store';

function Prefetch({ children }) {
  useEffect(() => {
    // const user = store.dispatch(userApiSlice.endpoints.getUserInfo.initiate());

    return () => {
      // user.unsubscribe();
    };
  }, []);

  return children;
}

export default Prefetch;
