import { MainLayout } from "./Layout"
import * as Section from "./Sections"
function App() {
  return (
    <MainLayout>
      <Section.Hero />
      <Section.Featured />
      <Section.Jackets />
      <Section.TextBand />
      <Section.PictureSlide />
      <Section.TextBand />
    </MainLayout>
  )
}

export default App
