import { Box, Image, Text } from "@chakra-ui/react"
import React from "react"

function MemberProfile({ name, experience, image }) {
  return (
    <Box shadow="md" borderRadius={12} margin="4" overflow="hidden">
      <Image src={image} />
      <Box padding="4">
        <Text>{name}</Text>
        <Text>{experience} years experience</Text>
      </Box>
    </Box>
  )
}

export default MemberProfile
