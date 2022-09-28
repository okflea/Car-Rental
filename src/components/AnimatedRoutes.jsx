import React from "react"
import { Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import About from "../routes/About"
import Cars from "../routes/Cars"
import Contact from "../routes/Contact"
import Home from "../routes/Home"

function AnimatedRoutes(props) {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
