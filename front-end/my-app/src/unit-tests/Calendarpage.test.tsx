import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Calendar from '../pages/Calendar/Calendar-page'

test('Displays text on the calendar page', async () => {
  // Checks that the calendar is rendering
  render(<Calendar />)
<<<<<<< HEAD
  expect(screen.getByRole("heading")).toHaveTextContent('March 2023')
})

test('Clicking an event opens a new window to its url', async () => {
  // ARRANGE
  render(<Calendar />)
  expect(screen.getByRole("heading")).toHaveTextContent('March 2023')
=======
  expect(screen.getByRole("calendar").getElementsByClassName("calendar-main"))
>>>>>>> 826257acae2d56049aa455cfa8dc49023bfcd1a3
})