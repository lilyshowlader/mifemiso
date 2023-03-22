import { useState, useCallback } from "react";

const useAnimateOut = () => {
  const [moveToNext, setMoveToNext] = useState(false)

  console.log(moveToNext);

  const animateOut = useCallback(() => {
    document.querySelectorAll(".animateOut").forEach(el => {
      el.className = el.className
        .split(" ")
        .filter(name => !name.includes("fadeIn") && !name.includes("animate__delay"))
        .concat("animate__animated","animate__fadeOut")
        .join(" ")
    })

    setTimeout(() => setMoveToNext(true), 2000)
  }, [])

  return [moveToNext, animateOut];
}

export default useAnimateOut;
