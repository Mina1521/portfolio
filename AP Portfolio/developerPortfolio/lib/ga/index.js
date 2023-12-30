// log the pageview with their URL
export const pageview = (url) => {
    window.gtag("config", 'G-4476H1QDD1', {
      page_path: url,
    });
  };
  
  // log specific events happening.
  export const event = ({ action, params }) => {
    window.gtag("event", action, params);
  };
  
