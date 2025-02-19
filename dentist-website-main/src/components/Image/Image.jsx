import React from "react";

const Image = ({
  source,
  alt,
  fallback = "", // TODO: Set fallback image
  width = "auto",
  height = "auto",
  className = "max-w-full",
  ...props
}) => {
  const handleError = (e) => (e.target.src = fallback);

  return (
    <img
      src={source || fallback}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
      height={height}
      width={width}
      {...props}
    />
  );
};

export default Image;
