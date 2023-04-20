import React from 'react'
import Navbar from './Navbar'

describe('<Navbar />', () => {
  Cypress.on('uncaught:exception', () => false)
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Navbar />)
  })
})