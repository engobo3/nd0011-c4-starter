// src/aboutPage.js

// This import likely gives you an object, not a direct string path
import aboutPageImage from "../images/aboutImage.png";

import {
  createHeader,
  createElement,
  createImage,
} from "./utilityRenderFunctions.js";

export const renderAboutPage = () => {
  // Clear the main content area
  const main = document.querySelector("main");
  main.innerHTML = "";

  // Create the outer container for the about section
  const containerOuter = document.createElement("div");
  containerOuter.className = "aboutContainer";

  // Create the text container for the heading, subheading, and paragraph
  const textContainer = document.createElement("div");
  textContainer.className = "textContainer";

  // Create and set up the heading
  const heading = createHeader("h2", "About Study Night", "about_page");

  // Create and set up the subheading
  const subHeading = createElement("h3", "Flash Cards Anywhere Anytime");

  // Create and set up the paragraph
  let text =
    "Whether you're studying at night or during the day, Study Night's flashcard application is designed to help you grow your skills in any subject. Whether you're preparing for an exam or learning a new language, Study Night makes it easy to create flashcard sets that are available anytime, anywhere.\n\nStudy Night was created by experienced educators and developers who are passionate about helping students achieve their goals and making learning more accessible.";
  const aboutP = createElement("p", text);

  // --- THIS IS THE CRITICAL CHANGE ---
  // Access the .default property if aboutPageImage is an object
  const imagePath = (typeof aboutPageImage === 'string') ? aboutPageImage : aboutPageImage.default;

  // Optional: Log for verification
  console.log('Resolved image path for src attribute:', imagePath);

  // Create and set up the image using the resolved path
  const imageElement = createImage(imagePath, "Child Studying");
  // --- END CRITICAL CHANGE ---

  // Append the text elements to the text container
  textContainer.append(heading, subHeading, aboutP);

  // Append the text container and image to the outer container
  containerOuter.append(textContainer, imageElement);

  // Append the outer container to the main content area
  main.append(containerOuter);
};