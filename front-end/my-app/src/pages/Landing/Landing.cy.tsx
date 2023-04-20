import React from 'react'
import Landing from './Landing'
import './Landing.css'

describe('<Landing />', () => {
  Cypress.on('uncaught:exception', () => false)
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Landing />)
  })
})