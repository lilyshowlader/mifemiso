import { useState } from "react";

const Popover = ({ children }) => {
  const [show, setShow] = useState(false);

  if(!children) return null;

  const showOn = () => setShow(true);
  const showOff = () => setShow(false);

  return (
    <div style={{ position: "relative" }}>
      <>
        <div>
          {children}
          <span><img src="https://i.imgur.com/LyU6SxK.png" width={10} height={10} /></span>
        </div>
        <div style={{ position: "absolute" }}></div>
      </>
    </div>
  )
}

export default Popover;
