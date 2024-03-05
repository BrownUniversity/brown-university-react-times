export const triggerWindowResize = ({
  width = global.window.innerWidth,
  height = global.window.innerHeight,
}) => {
  global.window.innerWidth = width;
  global.window.innerHeight = height;
  global.window.dispatchEvent(new Event("resize"));
};

export const resetWindowSize = () =>
  triggerWindowResize({ width: 1024, height: 768 });
