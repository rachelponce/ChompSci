import React from 'react'
import SignIn from '../SignIn/Signin-page'

describe('<SignIn />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SignIn />)
  })
})