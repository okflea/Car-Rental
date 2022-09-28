import React from "react"
import { Flex } from "@chakra-ui/react"
import { motion } from "framer-motion"
import TextImage from "../components/TextImage"

import image from "../images/image2.jpg"
import AboutItem from "../components/AboutItem"
import MemberProfile from "../components/MemberProfile"

import profiles from "../dummy-api/profiles.json"

function About(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <TextImage image={image} text="About" />
      <AboutItem
        title="Welcome to Car Renting Service"
        description="We ensures that car renting is delightful, accessible and simple for all. Fixed price assurance saves you from the unnecessary loop of negotiations and haggling and ensures you get the best deal upfront, right away. We use pricing data from market transactions and detailed inspection reports to arrive at a fair and fixed price."
        image={require("../images/cars-img/offer-toyota.png")}
      />

      <AboutItem
        title="Where there’s quality, happiness follows."
        description="Our cars are the reason we are in business and will be why we continue to exist and attract customers. Quality at every touchpoint for our customers, is just as important to us for we are a service-first brand."
        reversed
        image={require("../images/cars-img/nissan-offer.png")}
      />

      <Flex margin="8" justifyContent="space-around">
        {profiles.map(({ name, experience, image }) => (
          <MemberProfile
            name={name}
            experience={experience}
            image={require(`../images/avatars/${image}`)}
          />
        ))}
      </Flex>
    </motion.div>
  )
}

export default About
