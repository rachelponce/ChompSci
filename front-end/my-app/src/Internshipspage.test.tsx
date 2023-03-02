import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Internships from '../src/pages/Internships-page'

test('Displays text on the internships page', async () => {
  // ARRANGE
  render(<Internships />)
  expect(screen.getByRole("heading")).toHaveTextContent('Internships Page')
})