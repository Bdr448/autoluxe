import { useEffect } from "react";

const GoogleVerification = () => {
  useEffect(() => {
    // Check if the tag already exists to avoid duplicates
    const existingMeta = document.querySelector(
      '<meta name="google-site-verification" content="RULZ_GC9mTHdwsb-iMzku2HgNwbrKCCM48Q7skXxqts" />'
    );

    if (!existingMeta) {
      // Create the new meta tag
      const metaTag = document.createElement("meta");
      metaTag.name = "google-site-verification";
      metaTag.content = "RULZ_GC9mTHdwsb-iMzku2HgNwbrKCCM48Q7skXxqts";

      // Append it to the <head> section
      document.head.appendChild(metaTag);
    }
  }, []); // The empty dependency array ensures this runs only once on mount.

  // This component doesn't render anything visible
  return null;
};

export default GoogleVerification;
