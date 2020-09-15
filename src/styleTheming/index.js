import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./globalStyle"
import { theme } from "./theme"

export default function index({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
