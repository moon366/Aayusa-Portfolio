import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import MusicPlayer from "./components/MusicPlayer";
import DivBox from "./components/DivBox";
import Button from "./components/Button";

const SUNFLOWER_URL = "https://aayusasunflower.vercel.app/#/gallery";
const HAPPY_BIRTHDAY_URL = "https://aayusasunflower.vercel.app/#/happybirthday";

function App() {
  const [routeType, setRouteType] = useState(null);
  const [showGate, setShowGate] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      let type = null;
      if (hash === "#ankitamiss" || hash === "#/ankitamiss") {
        type = "ankitamiss";
      } else if (hash === "#happy20sbirthday" || hash === "#/happy20sbirthday") {
        type = "happybirthday";
      }
      setRouteType(type);
      if (!type) setShowGate(false);
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  useEffect(() => {
    if (routeType === "happybirthday") {
      window.location.replace(HAPPY_BIRTHDAY_URL);
    } else if (unlocked) {
      window.location.replace(SUNFLOWER_URL);
    }
  }, [unlocked, routeType]);

  if (routeType === "happybirthday") {
    return null;
  }

  if (routeType === "ankitamiss") {
    if (showGate) {
      return <DivBox onUnlock={() => setUnlocked(true)} />;
    }
    return <Button onExplore={() => setShowGate(true)} />;
  }

  return (
    <div className="bg-white text-gray-900 antialiased">
      <ScrollToTop />
      <MusicPlayer />
      <Home />
    </div>
  );
}

export default App;
