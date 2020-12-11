import React from 'react';
// * * * * *
// Developer: Ben Elferink
// https://github.com/belferink1996
// * * * * *
// How to use this hook:
// 1) import UseFetch from './UseFetch.js';
// 2) const {apiData, isLoading} = UseFetch('https://api.github.com');  <-- Remember this is a Hook! Do this at the top of component.
// 3) return isLoading ? (
//      <div>Loading...</div>
//    ) : (
//      <div>{apiData}</div>
//    );

export default function UseFetch(url) {
  const [apiData, setApiData] = React.useState(false); // will receive API's promise

  const [isLoading, setIsLoading] = React.useState(true); // 'true' until promise is resolved
  // -> can be used to present an alternative UI when waiting for the data

  const isMounted = React.useRef(true); // reference if do setState, or no setState
  // -> required to prevent memory leaks within the app (can happen when asynchronously rendering the component and fetching an API, the following warning would occur:
  // Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.)

  const fetchData = async () => {
    // JavaScript function responsible for fetching and handling the data from the API
    try {
      const response = await fetch(url); // url from ->  UseFetch ( url ) ;
      const data = await response.json(); // data object from response
      console.log(`✅ -FETCHED- : ${url}`, data);

      if (isMounted.current) {
        // if component is mounted -> do setState
        setApiData(data);
        setIsLoading(false);
      } // else{ component will unmount -> cannot setState }
    } catch (error) {
      // fetching error
      console.warn(`❌ -FAILED- : ${url}`, error);
    }
  };

  React.useEffect(() => {
    // keep updating API data (if given link changes dynamically)
    fetchData();

    return () => {
      // component will unmount
      isMounted.current = false; // disable setState
      console.warn(`❌ -FAILED- : ${url}`, "Warning: Can't perform a React state update on an unmounted component.");
    };
    // eslint-disable-next-line
  }, [url]);

  // returns a rendering object
  return {
    apiData, // has the data object from API
    isLoading, // has 'true' for data not fetched yet, and 'false' for data is recieved
  };
}
