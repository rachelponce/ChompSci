import React from 'react'
import ImageSlider from './Slider'

describe('<ImageSlider />', () => {
  Cypress.on('uncaught:exception', () => false)
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ImageSlider />)
  })
})