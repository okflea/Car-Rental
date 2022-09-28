import React from "react"

import { Link } from "react-router-dom"
import { Box, Button, Flex, Text } from "@chakra-ui/react"

function Nav(props) {
  return (
    <React.Fragment>
      <Flex
        height="12"
        alignItems="center"
        paddingX="6"
        justifyContent="space-between"
      >
        <Text>Need Help? +1-2345-678</Text>
        <Flex>
          <Button marginX="2" colorScheme="purple">
            Login
          </Button>
          <Button marginX="2" colorScheme="purple">
            Register
          </Button>
        </Flex>
      </Flex>
      <Flex
        bgGradient="linear(to-l, #3B2667, #667eea)"
        // bgGradient="linear(to-l, purple.400, purple.700, purple.600)"
        color="white"
        padding="4"
        alignItems="center"
        justifyContent="space-around"
      >
        <Text fontSize="2xl">Car Renting System</Text>
        <Flex>
          <Box margin="2">
            <Link to="/">Home</Link>
          </Box>
          <Box margin="2">
            <Link to="/about">About</Link>
          </Box>
          <Box margin="2">
            <Link to="/cars">Cars</Link>
          </Box>
          <Box margin="2">
            <Link to="/contact">Contact</Link>
          </Box>
        </Flex>
      </Flex>
    </React.Fragment>
  )
}

export default Nav
