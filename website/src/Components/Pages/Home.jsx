import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import "./home.css";
import Lenis from "lenis";
import Tooltip from "./share";
import Button from "./downloadApp";

const Home = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // Adjust for scroll speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Default easing function
      smooth: true, // Enable smooth scrolling
      direction: "vertical", // Scroll direction: "vertical" or "horizontal"
      gestureDirection: "vertical", // Gesture direction: "vertical" or "both"
      smoothTouch: false, // Smooth scrolling for touch devices
    });

    // Scroll event listener
    const onScroll = (e) => {
      console.log("Scroll position:", e.scroll);
    };
    lenis.on("scroll", onScroll);

    // Request animation frame loop
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Cleanup on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");
    const frames = {
      currentIndex: 1,
      maxIndex: 317,
    };
    const images = [];
    var loaded = 0;

    function preloadImages() {
      for (var i = 1; i <= frames.maxIndex; i++) {
        const imageUrl = `images/hui/frame_${i
          .toString()
          .padStart(4, "0")}.jpeg`;
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
          loaded++;
          if (loaded === frames.maxIndex) {
            loadImage(frames.currentIndex);
            startanimation();
          }
        };
        images.push(img);
      }
    }

    function loadImage(index) {
      if (index >= 0 && index <= frames.maxIndex) {
        const img = images[index - 1];
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const scaleX = canvas.width / img.width;
        const scaleY = canvas.height / img.height;
        const scale = Math.max(scaleX, scaleY);

        const newWidth = scale * img.width;
        const newHeight = scale * img.height;

        const offsetX = (canvas.width - newWidth) / 2;
        const offsetY = (canvas.height - newHeight) / 2;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "high";
        context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
        frames.currentIndex = index;
      }
    }

    function startanimation() {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".parent",
          start: "top center",
          end: "bottom bottom",
          scrub: 3,
        //   markers: true,
        },
      });

      window.addEventListener("resize", function () {
        loadImage(Math.floor(frames.currentIndex));
      });

      function updateFrame(index) {
        return {
          currentIndex: index,
          ease: "linear",
          onUpdate: function () {
            loadImage(Math.floor(frames.currentIndex));
          },
        };
      }

      tl.to(frames, updateFrame(10), "zero")

        .to(frames, updateFrame(30), "first")
        .to(".animate1", { opacity: 1, ease: "linear", x: -60 }, "first")

        .to(frames, updateFrame(80), "second")

        .to(frames, updateFrame(100), "third")
        .to(
          ".animate1",
          { opacity: 0, ease: "linear", x: 60, scale: 0.8 },
          "third"
        )

        .to(frames, updateFrame(120), "fourth")
        .to(".animate2", { opacity: 1, ease: "linear", x: 60 }, "fourth")

        .to(frames, updateFrame(180), "fifth")

        .to(frames, updateFrame(200), "sixth")
        .to(
          ".animate2",
          { opacity: 0, ease: "linear", x: -60, scale: 0.8 },
          "sixth"
        )

        .to(frames, updateFrame(240), "seventh")
        .to(".animate3", { opacity: 1, ease: "linear", scale: 2 }, "seventh")

        .to(frames, updateFrame(280), "eighth")

        .to(frames, updateFrame(290), "ninth")
        .to(".animate3", { opacity: 0, ease: "linear", scale: 1 }, "ninth")

        .to(frames, updateFrame(300), "tenth")
        .to(".animate4", { opacity: 0.8, ease: "linear", scale: 3 }, "tenth")

        .to(frames, updateFrame(315), "eleventh")

        .to(frames, updateFrame(frames.maxIndex), "twelvth");
      // .to(".animate4", { opacity: 0, ease: "linear", scale:100 }, "twelvth");
    }

    preloadImages();
  });

  return (
    <>
      <div className="w-full bg-zinc-900 font-serif">
        <div className="relative w-full h-screen text-white bg-[#d8bf78]">
          <div
            className="absolute lg:top-20 top-12 left-5 lg:left-10 h-24 w-40 lg:h-44 lg:w-72 bg-cover opacity-70"
            style={{ backgroundImage: "url('/images/bothLogos.png')" }}
          ></div>
          <div className="absolute flex flex-col justify-center items-center h-full w-full g-red-500 pt-10">
            <div
              className="bg-cover lg:h-[70%] lg:w-[50%] h-[38%] w-[90%] opacity-5"
              style={{
                backgroundImage:
                  "url('images/zest-black-removebg-preview.png')",
              }}
            >
              {" "}
              ZESt logo
            </div>
            <div className="text-xl lg:text-3xl">{`7th, 8th & 9th of Feb'25`}</div>
            <div className="absolute bottom-20 lg:right-20 lg:z-50 lg:opacity-100 opacity-0 scale-125">
                <Tooltip />
            </div>
            <div className="absolute bottom-28 lg:bottom-20 lg:right-64 z-50 scale-125">
                <Button />
            </div>
          </div>
        </div>
        <div className="parent relative top-0 left-0 w-full h-[500vh]">
          <div className="cnav bg-white/20 sticky top-0 left-0 w-full h-screen">
            <canvas className="opacity-80 w-full h-screen"></canvas>
          </div>
          {/* <div className="animate1 absolute w-full h-screen top-0 left-0 text-white overflow-x-hidden">
                <div className="w-full relative h-screen flex justify-center items-center text-nowrap">
                  <div className="loop absolute top-[40%] left-0 text-[250px] flex justify-center items-center gap-64">
                    <h1 className="">AAROHANAM : <span style={{color: "transparent", WebkitTextStroke: "5px white", }}>THE ASCEND TO</span> GLORY</h1>
                    <h1 className="">AAROHANAM : <span style={{color: "transparent", WebkitTextStroke: "5px white", }}>THE ASCEND TO</span> GLORY</h1>
                    <h1 className="">AAROHANAM : <span style={{color: "transparent", WebkitTextStroke: "5px white", }}>THE ASCEND TO</span> GLORY</h1>
                  </div>
                </div>
          </div> */}
          <div className="animate1 px-5 md:px-10 py-5 fixed -right-6 md:right-8 lg:right-16 top-32 md:top-40 lg:top-48 z-20 opacity-0 text-[#4e2d11] w-full md:w-[70%] lg:w-[45%] max-w-[90%]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
              OUR THEME
            </h2>
            <p className="pt-6 md:pt-8 lg:pt-10 text-sm md:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet consectetur earum exercitationem,
              temporibus nulla molestias, porro blanditiis magnam dolorum
              officia quod sed eum ducimus iste praesentium accusantium
              distinctio saepe? Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Omnis praesentium voluptatibus autem eum?
              Excepturi maiores iusto, delectus illum eaque obcaecati molestias
              sequi doloribus voluptatem, quaerat aperiam, sed vitae. Velit,
              explicabo veniam ipsam eveniet neque totam autem molestias!
            </p>
          </div>

          <div className="animate2 fixed lg:left-16 left-16 top-20 lg:top-48 animate2 z-20 opacity-0 text-[#4e2d11]">
            <h2 className="text-3xl lg:text-5xl font-bold text-center">
              ZEST BY NUMBERS
            </h2>
            <div className="flex flex-col pt-10 gap-10 justify-center items-center">
              <div className="flex gap-10 text-xl font-semibold">
                <div>
                  <div className="text-center">200+</div>Colleges
                </div>
                <div>
                  <div className="text-center">4+</div>FOOTFALL
                </div>
              </div>
              <div className="flex gap-10 text-xl font-semibold">
                <div>
                  <div className="text-center">25K+</div>EYEBALLS
                </div>
                <div>
                  <div className="text-center">100+</div>PARTICIPANTS
                </div>
              </div>
            </div>
          </div>
          <div className="animate3 fixed right-24 md:right-32 lg:right-64 top-64 z-20 opacity-0 text-[#4e2d11] w-[40%] lg:w-[25%]">
            <h2 className="textmd sm:text-2xl lg:text-3xl font-bold text-center py-3">
              MARATHON
            </h2>
            <p className="text-[9px] sm:text-base lg:text-xs">
              Lore nam, fugiat recusandae suscipit. Quo, adipisci quidem. Odio
              veritatis quaerat nisi laudantium. Officia aperiam culpa
              repellendus beatae placeat est adipisci id aliquid at. Veritatis
              at esse mollitia itaque? Animi unde id consectetur.
            </p>
          </div>

          <div className="animate4 fixed lg:right-28 lg:top-96 top-72 left-32 z-20 opacity-0 text-[#4e2d11]">
            <h2 className="text-xl lg:text-5xl font-bold text-center pt-20">
              !! GO ZEST !!
            </h2>
          </div>
        </div>
        {/* <div className="w-full h-screen"></div> */}
      </div>
    </>
  );
};

export default Home;
