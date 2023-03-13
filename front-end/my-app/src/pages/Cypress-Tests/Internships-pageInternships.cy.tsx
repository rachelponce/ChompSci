import React from 'react'
import Internships from '../Internships/Internships-page'

describe('<Internships />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Internships />)
  })
})