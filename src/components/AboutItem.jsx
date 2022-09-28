import React from "react"
import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react"

function AboutItem({ title, description, image, reversed }) {
  return (
    <Flex
      margin="10"
      justifyContent="space-between"
      shadow="lg"
      flexDirection={reversed && "row-reverse"}
    >
      <Box padding={5} borderWidth="1px">
        <Heading fontSize="xl">{title}</Heading>
        <Text mt={4}>{description}</Text>
      </Box>
      {image && <Image src={image} />}
    </Flex>
  )
}

export default AboutItem
