import React from 'react'
import MessageForm from './MessageForm'

describe('<MessageForm />', () => {
  Cypress.on('uncaught:exception', () => false)
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MessageForm onSubmit={undefined} />)
    cy.get("[data-test='message-input']").type("New opportunities")
    cy.get("[data-test='button-test']").click()
  })
})