import { useEffect, useRef } from 'react'

const useClickOut = (handler) => {
    let domNode = useRef();
  
    useEffect(() => {
      let maybeHandler = (event) => {
        if (!domNode?.current?.contains(event.target)) {
          handler();
        }
      };
  
      document.addEventListener("mousedown", maybeHandler);
  
      return () => {
        document.removeEventListener("mousedown", maybeHandler);
      };
    },[handler]);
  
    return domNode;
}

export default useClickOut