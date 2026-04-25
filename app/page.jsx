"use client";

import Canvas from "./Movement/AppleJacks.jsx";
import Counter from "./Reset/application.jsx";
import Counter1 from "./intervals/aprilfools.jsx";
import Counter2 from "./Delay/applephone.jsx";
import Counter3 from "./useCounter/application.jsx";

export default function CaptainHook() {
  return (
    <>
      <div>
        <Counter />
      </div>
      <div>
        <Counter1 />
      </div>
      <div>
        <Counter2 />
      </div>
      <div>
        <Counter3 />
      </div>
      <div>
        <Canvas />
      </div>
    </>
  );
}
