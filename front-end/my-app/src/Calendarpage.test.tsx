import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Calendar from '../src/pages/Calendar-page'

test('Displays text on the calendar page', async () => {
  // ARRANGE
  render(<Calendar />)
  expect(screen.getByRole("heading")).toHaveTextContent('Calendar Page')
})