import React from 'react'
import About from './About-page'

describe('<About />', () => {
  Cypress.on('uncaught:exception', () => false)
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<About />)
    
    cy.get("[data-test='about-paragraph']").should('contains.text', 'Our team of')

    cy.get('[alt="logo"]').should('be.visible')
    
  })
})