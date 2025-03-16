import React from "react";
import Image from "../Image/Image";
import playLogo from "../../assets/icons/play.png";

const HeroText = () => {
  return (
    <div className="flex flex-col justify-evenly pl-10">
      <div className="py-4">
        <h1 className="text-subheading uppercase font-bold">
          Welcome to confident
        </h1>
      </div>
      <SubHeading content={"High Quality &"} hasHighlightedText={false} />
      <SubHeading
        content={"Dentistry"}
        highlightedText={"Painless "}
        hasHighlightedText={true}
      />
      <LightText
        content={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius cumlabore fuga, architecto possimus quibusdam veniam sunt ex inciduntducimus asperiores optio natus similique explicabo commodi?"
        }
      />
    </div>
  );
};

export const SubHeading = ({
  content,
  hasHighlightedText,
  highlightedText,
  textBefore,
}) => {
  return hasHighlightedText ? (
    <h2
      className="text-heading font-extrabold text-4xl md:text-7xl pt-4"
      aria-label="subheading"
    >
      {textBefore && content}
      <span className="text-titleBlue">{highlightedText}</span>
      {textBefore ? "" : content}
    </h2>
  ) : (
    <h2
      className="text-heading font-extrabold text-4xl md:text-7xl"
      aria-label="subheading"
    >
      {content}
    </h2>
  );
};

export const LightText = ({ content }) => {
  return (
    <p className="text-textLight font-light py-8 pr-2 md:text-lg">{content}</p>
  );
};

export default HeroText;
