import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Calendar from '../pages/Calendar/Calendar-page'

test('Displays text on the calendar page', async () => {
  // Checks that the calendar is rendering
  render(<Calendar />)
  expect(screen.getByRole("calendar").getElementsByClassName("calendar-main"))
})