import { useEffect } from "react";

import Scene from "./Scene";
import SimpleSlide from "./SimpleSlide";

// We add a CSS file here so we can style components
import "./App.css";

import {CameraTimeline} from "./AnimatedCamera";

/**
 * This function will calculate how much the user has scrolled (0-1)
 * @returns {number} The percentage of how much the user has scrolled (0-1)
 */
function getScrollProgress() {
  // This will calculate how many pixels the page is vertically
  const winScroll = window.document.documentElement.scrollTop;

  // This is responsible for subtracticing the total height of the page - where the users page is scrolled to
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  // This will calculate the final total of the percentage of how much the user has scrolled (0-1)
  return winScroll / height;
}

function App() {
  // Set the animation to play based on scroll position
  useEffect(() => {
    // We then register a callback that executes every time the user scrolls
    window.onscroll = (e) => {
      const scrolled = getScrollProgress();
    CameraTimeline.progress(scrolled);
      return () => {
        // We unregister the callback when the component unmounts
        window.onscroll = null;
      };
    };
  }, []);

  return (
    <div id="article_wrapper">
      {/* vh coords - 0, 100, 1000 HTML slides are nested here and we use vh values to specify where they are */}
      
      <SimpleSlide viewportPosition={25}>1. salmon sees main and side channel</SimpleSlide>
      <SimpleSlide viewportPosition={100}>2.Salmon chooses side and goes to sea</SimpleSlide>
      <SimpleSlide viewportPosition={200}>2.5 Salmon swims forward </SimpleSlide>
      <SimpleSlide viewportPosition={500}>2.75 Salmon u-turn </SimpleSlide>
            <SimpleSlide viewportPosition={700}>2.75 Salmon u-turn </SimpleSlide>
      <SimpleSlide viewportPosition={950}>3. Salmon returns to spawn </SimpleSlide>
      <SimpleSlide viewportPosition={1050}>4. salmon fry growing with more prey</SimpleSlide> 

      {/* 3D scene container */}
      <Scene />
    </div>
  );
}

export default App;
