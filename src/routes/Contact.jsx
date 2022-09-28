import React from "react"
import {
  Box,
  Button,
  Flex,
  FormControl,
  HStack,
  Icon,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import TextImage from "../components/TextImage"

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

import image from "../images/image3.jpg"

function Contact(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box>
        <TextImage image={image} text="Contact" />
        <Flex margin="8" justifyContent="space-around">
          <VStack width="50%">
            <FormControl>
              <Input placeholder="Full Name" />
            </FormControl>
            <FormControl>
              <Input placeholder="Email" />
            </FormControl>
            <FormControl>
              <Textarea placeholder="Message" />
            </FormControl>
            <FormControl>
              <Button colorScheme="purple">Send Message!</Button>
            </FormControl>
          </VStack>
          <VStack gap="2" alignItems="start">
            <Text fontSize="2xl" fontWeight="medium">
              Contact Information
            </Text>
            <Text>ABC Office, City XYZ</Text>
            <Text>Phone: +123456789</Text>
            <Text>Email: example@gmail.com</Text>
            <Text>Follow Us:</Text>
            <HStack>
              <Icon width={8} height={8} as={FaFacebook} />
              <Icon width={8} height={8} as={FaInstagram} />
              <Icon width={8} height={8} as={FaLinkedin} />
              <Icon width={8} height={8} as={FaTwitter} />
            </HStack>
          </VStack>
        </Flex>
      </Box>
    </motion.div>
  )
}

export default Contact
