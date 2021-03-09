import { useState, useEffect } from 'react';

export default function useMediaQuery(query) {
  const [isQueryMatch, setIsQueryMatch] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    // Example of "media" Object if the query was "(max-width: 768px)":
    // {
    //   listeners: {change: Array},
    //   matches: true/false,
    //   media: "(max-width: 768px)",
    //   onchange: null
    // }

    // update state when condition changes
    if (media.matches !== isQueryMatch) setIsQueryMatch(media.matches);

    // handle listener for MediaQueryList
    const listener = () => setIsQueryMatch(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [isQueryMatch, query]);

  // either true or false
  return isQueryMatch;
}
