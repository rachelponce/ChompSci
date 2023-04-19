import React from 'react'
import RegisterForm from './RegisterForm';
import Select from '@mui/material/Select';

describe('<RegisterForm />', () => {
  Cypress.on('uncaught:exception', () => false)
  it('displays custom text for button', () => { 
    // see: https://on.cypress.io/mounting-react
    cy.mount(<RegisterForm onSubmit={undefined} />)
    cy.get('button').should('contains.text', 'Submit')
  })
  
  it('takes input for first name', () => {
    cy.mount(<RegisterForm onSubmit={undefined} />)
    cy.get("[data-test='first-name-input']").type("Savannah")
  })

  it('takes input for last name', () => {
    cy.mount(<RegisterForm onSubmit={undefined} />)
    cy.get("[data-test='last-name-input']").type("Fletcher")
  })

  it('takes input for email', () => {
    cy.mount(<RegisterForm onSubmit={undefined} />)
    cy.get("[data-test='email-input']").type("savannahfletcher@ufl.edu")
  })

  it('takes input for password', () => {
    cy.mount(<RegisterForm onSubmit={undefined} />)
    cy.get("[data-test='password-input']").type("Password")
  })
})