import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Hana!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack gap={4}>
      <Avatar size="lg" src={require("../images/9.jpg")}/>
      <Heading size="md">{greeting}</Heading>
      <Heading size="xl">{bio1}</Heading>
      <Heading size="xl">{bio2}</Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
