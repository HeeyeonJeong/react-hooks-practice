export const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
        //firefox
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
        //opera
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullScreen();
        //ms
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      runCb(true);
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (document.exitFullscreen) {
      document.exitFullscreen();
      //firefox
    } else if (document.mozRequestFullScreen) {
      document.mozCancelFullScreen();
      //opera
    } else if (document.webkitRequestFullscreen) {
      document.webkitExitFullScreen();
      //ms
    } else if (document.msRequestFullscreen) {
      document.msExitFullscreen();
    }
    runCb(false);
  };
  return { element, triggerFull, exitFull };
};
