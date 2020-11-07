//useClick hook
export const useclick = (onclick) => {
  if (typeof onclick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onclick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onclick);
      }
    };
  }, []);
  return element;
};
