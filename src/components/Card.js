import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box bg="white"  borderRadius="md">
    <VStack align="start" >
      <Image src={imageSrc} alt="Placeholder Image" objectFit="cover" rounded="md"/>
      <Box m="4">
      <Heading as="h2" size='md' color="black">{title}</Heading>
      <Text color="gray">{description}</Text>
      <HStack><Text color="black">See more</Text><FontAwesomeIcon icon={faArrowRight} size="1x" color="black"/></HStack>
      </Box>
    </VStack>
    </Box>
  );
};

export default Card;
