const reportWebVitals = (onPerfEntry) => {
  // Check if the onPerfEntry function is provided and is a valid function
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    // Dynamically import the web-vitals module
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Execute the Web Vitals functions and pass the onPerfEntry callback
      getCLS(onPerfEntry);  // Cumulative Layout Shift
      getFID(onPerfEntry);  // First Input Delay
      getFCP(onPerfEntry);  // First Contentful Paint
      getLCP(onPerfEntry);  // Largest Contentful Paint
      getTTFB(onPerfEntry); // Time to First Byte
    });
  }
};

export default reportWebVitals;
