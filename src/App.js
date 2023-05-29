import "./App.css";
import { motion } from "framer-motion";
import images from "./images";
import { useEffect, useRef, useState } from "react";

function App() {
  const [width, setWidth] = useState(0);
  const widthRed = useRef();
  useEffect(() => {
    setWidth(widthRed.current.scrollWidth - widthRed.current.offsetWidth);
  }, []);
  return (
    <motion.div ref={widthRed} className="container">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="drawer"
      >
        {images.map((image) => (
          <motion.div key={image} className="item">
            <img src={image} alt="" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default App;
