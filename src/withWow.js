import React, { useEffect } from "react";
import WOW from "wowjs";
import "animate.css/animate.min.css";

const withWow = (WrappedComponent) => {
  const WithWow = (props) => {
    useEffect(() => {
      const wow = new WOW.WOW({
        live: false,
      });
      wow.init();
    }, []);

    return <WrappedComponent {...props} />;
  };

  return WithWow;
};

export default withWow;
