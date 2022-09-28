import { Grid, GridItem } from "@chakra-ui/react"

import Nav from "./components/Nav"
import Footer from "./components/Footer"
import AnimatedRoutes from "./components/AnimatedRoutes"

function App() {
  return (
    <Grid height="100vh" templateRows="min-content 1fr min-content">
      <GridItem>
        <Nav />
      </GridItem>
      <GridItem>
        <AnimatedRoutes />
      </GridItem>
      <GridItem>
        <Footer />
      </GridItem>
    </Grid>
  )
}

export default App
