import React from "react"
import { Box, Image, Text } from "@chakra-ui/react"

function TextImage({ image, text, ...otherProps }) {
  return (
    <Box
      height="36"
      position="relative"
      width="100%"
      textAlign="center"
      color="white"
      bgColor="purple.900"
      {...otherProps}
    >
      <Image
        src={image}
        height="100%"
        width="100%"
        objectFit="cover"
        opacity="0.5"
      />
      <Text
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        fontSize="6xl"
      >
        {text}
      </Text>
    </Box>
  )
}

export default TextImage
