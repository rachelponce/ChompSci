import React from 'react'
import SignUp from '../SignUp/Signup-page-NEW'

describe('<SignUp />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SignUp />)
  })
})