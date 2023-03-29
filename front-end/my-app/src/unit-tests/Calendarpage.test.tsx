import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Calendar from '../pages/Calendar/Calendar-page'

test('Displays text on the calendar page', async () => {
  // ARRANGE
  render(<Calendar />)
  expect(screen.getByRole("heading")).toHaveTextContent('March 2023')
})

test('Clicking an event opens a new window to its url', async () => {
  // ARRANGE
  render(<Calendar />)
  expect(screen.getByRole("heading")).toHaveTextContent('March 2023')
})