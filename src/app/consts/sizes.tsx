const size = {
  mobile: "600px",
  laptop: "1366px",
  desktop: "1920px",
};

const device = {
  mobile: `(max-width: ${size.mobile})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
};
export default device;
