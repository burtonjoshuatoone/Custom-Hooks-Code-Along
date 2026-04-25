// import { useEffect } from "react";
// import { useEffectEvent } from "react";

// export function useInterval(callback, delay) {
//   const onTick = useEffectEvent(callback);
//   useEffect(() => {
//     const id = setInterval(onTick, delay);
//     return () => clearInterval(id);
//   }, [delay]);
// }

import { useEffect, useCallback } from "react";

export function useInterval(callback, delay) {
  const onTick = useCallback(() => {
    callback();
  }, [callback]);

  useEffect(() => {
    const id = setInterval(onTick, delay);
    return () => clearInterval(id);
  }, [delay, onTick]);
}
