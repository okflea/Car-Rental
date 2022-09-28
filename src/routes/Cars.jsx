import React from "react"
import { motion } from "framer-motion"
import {
  Grid,
  GridItem,
  VStack,
  HStack,
  Image,
  Text,
  Icon,
  Box,
} from "@chakra-ui/react"

import { FaCarAlt, FaRoad, FaSitemap } from "react-icons/fa"

import cars from "../dummy-api/cars.json"

function Cars(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Grid
        gridTemplateColumns="repeat(3, auto)"
        gap="15"
        marginX="20"
        marginY="5"
      >
        {cars.map(({ name, rent, model, transmission, milage, image }) => (
          <GridItem>
            <Box
              shadow="md"
              boxShadow="lg"
              border="1px"
              borderColor="purple.300"
              rounded="lg"
            >
              <VStack>
                <Image
                  src={require(`../images/cars-img/${image}`)}
                  width="100%"
                  height="300"
                  objectFit="cover"
                />
                <Text fontSize="2xl" fontWeight="medium">
                  {name}
                </Text>
                <Text fontWeight="medium">${rent}/Day</Text>
              </VStack>
              <HStack justifyContent="space-evenly" marginY="4">
                <VStack>
                  <Icon as={FaCarAlt} />
                  <Text>{model}</Text>
                </VStack>
                <VStack>
                  <Icon as={FaSitemap} />
                  <Text>{transmission}</Text>
                </VStack>
                <VStack>
                  <Icon as={FaRoad} />
                  <Text>{milage} kmpl</Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </motion.div>
  )
}

export default Cars
