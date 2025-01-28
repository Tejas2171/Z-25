import React, { useEffect } from "react";
import { useRef } from "react";
import ProjectItem from "./ProjectItem";
import CustomCursor from "./CustomCursor";
import CursorManager from "./CursorManager";
import { pageData } from "../../data";
import { useState } from "react";
import "../../styles/reset.css"
import "../../styles/events.scss"
import Header from "../Layout/Header";
// import Footer from "../components/Footer";
const WindowSize = { width: window.innerWidth, height: window.innerHeight };

const  Events=() => {
  const menuItems = useRef(null);
  const [renderItems, setRenderItems] = useState(pageData);

  const cloneItems = () => {
    // Get the height of one menu item
    const itemHeight = menuItems.current.childNodes[0].offsetHeight;
    // How many items fit in the window?
    const fitMax = Math.ceil(WindowSize.height / itemHeight);
    // Create [fitIn] clones from the beginning of the list

    // Add clones
    const clonedItems = [...renderItems]
      .filter((_, index) => index < fitMax)
      .map((target) => {
        return target;
      });

    // All clones height

    setRenderItems([...renderItems, ...clonedItems]);
    return clonedItems.length * itemHeight;
  };

  const getScrollPos = () => {
    return (
      (menuItems.current.pageYOffset || menuItems.current.scrollTop) -
      (menuItems.current.clientTop || 0)
    );
  };
  const setScrollPos = (pos) => {
    menuItems.current.scrollTop = pos;
  };

  const initScroll = () => {
    // Scroll 1 pixel to allow upwards scrolling
    const scrollPos = getScrollPos();
    if (scrollPos <= 0) {
      setScrollPos(1);
    }
  };

  useEffect(() => {
    const clonesHeight = cloneItems();
    initScroll();
  
    if (menuItems.current) {
      menuItems.current.style.scrollBehavior = "unset";
  
      const scrollUpdate = () => {
        const scrollPos = getScrollPos();
  
        if (clonesHeight + scrollPos >= menuItems.current.scrollHeight) {
          setScrollPos(1);
        } else if (scrollPos <= 0) {
          setScrollPos(menuItems.current.scrollHeight - clonesHeight);
        }
      };
  
      const currentMenuItems = menuItems.current;
      currentMenuItems.addEventListener("scroll", scrollUpdate);
  
      return () => {
        currentMenuItems.removeEventListener("scroll", scrollUpdate);
      };
    }
  }, []);

  return (
    <CursorManager>
      <CustomCursor />

      <Header />
      <div className="main-container" id="main-container">
        <ul ref={menuItems}>
          {renderItems.map((project, index) => (
            <ProjectItem key={index} project={project} itemIndex={index} />
          ))}
        </ul>
      </div>
      {/* <Footer /> */}
    </CursorManager>
  );
}
export default Events;
