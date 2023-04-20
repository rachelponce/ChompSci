import React from 'react'
import Footer from './Footer'
import GitHubIcon from '@mui/icons-material/GitHub'
import "../Footer/Footer.css"


describe('<Footer />', () => {
  Cypress.on('uncaught:exception', () => false)
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Footer />)
  })
})