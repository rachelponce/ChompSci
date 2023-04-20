import React from 'react'
import Opportunities from './Opportunities-page'
import Navbar from '../../components/Navbar/Navbar-NotSignedIn'


describe('<Opportunities />', () => {
  Cypress.on('uncaught:exception', () => false)
  it('displays custom text for button', () => { 
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Opportunities/>)
    cy.get("[data-test='message-bubble']").should('contains.text', 'New research opportunity')
  })
})