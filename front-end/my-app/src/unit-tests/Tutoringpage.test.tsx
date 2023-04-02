import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Tutoring from '../pages/Opportunities/Opportunities-page'

test('Displays text on the Tutoring page', async () => {

  render(<Tutoring />)
  expect(screen.getByRole("heading")).toHaveTextContent('Tutoring')
})