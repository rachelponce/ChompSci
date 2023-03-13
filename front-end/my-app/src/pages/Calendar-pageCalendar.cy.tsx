import React from 'react'
import Calendar from './Calendar/Calendar-page'

describe('<Calendar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Calendar />)
  })
})