import * as React from "react"
import { ThemeProvider } from 'styled-components'
import { theme } from "../styles/theme"
import { GlobalStyle } from "../styles/GlobalStyle"
import { Hero } from "../components/Hero/Hero"
import { Features } from "../components/Features/Features"
import { HowItWorks } from "../components/HowItWorks/HowItWorks"
import { Testimonials } from "../components/Testimonials/Testimonials"
import { FAQ } from "../components/FAQ/FAQ"
import { DownloadCTA } from "../components/DownloadCTA/DownloadCTA"

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <DownloadCTA />
      </main>
    </ThemeProvider>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>오잉 - 하루 5분 영어 학습</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  </>
)
