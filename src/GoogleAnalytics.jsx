import { useEffect } from "react";

const GoogleAnalytics = () => {
  useEffect(() => {
    // Create script elements
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${
      import.meta.env.VITE_GOOGLE_TRACKING_ID
    }`;

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${import.meta.env.VITE_GOOGLE_TRACKING_ID}');
    `;

    // Append scripts to the body
    document.body.appendChild(script1);
    document.body.appendChild(script2);

    // Cleanup function
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return null; // This component doesn't render anything
};

export default GoogleAnalytics;
