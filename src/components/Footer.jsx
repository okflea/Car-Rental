import React from "react"
import { Box, Text } from "@chakra-ui/react"

function Footer(props) {
  return (
    <Box paddingY="4" bgColor="purple.800" color="white">
      <Text align="center">
        &copy; Car Renting System - All rights reserved!
      </Text>
    </Box>
  )
}

export default Footer
