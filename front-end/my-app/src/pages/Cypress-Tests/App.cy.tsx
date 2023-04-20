import React from 'react'
import App from '../../App'

describe('<App />', () => {
  Cypress.on('uncaught:exception', () => false)

  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />)
  })
})