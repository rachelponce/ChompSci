import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Events from '../pages/Calendar/test';
import { EventSeatOutlined } from '@mui/icons-material';

test('Calendar component is defined ', async () => {
  // Checks that the calendar is rendering
  render(<Events />)
  const cal = screen.getByRole("calendar"); 
  expect(cal).toBeDefined(); 
})

test('Calendar component uses correct class and subclass ', async () => {
  // Checks that the calendar is rendering
  render(<Events />)
  const cal = screen.getByRole("calendar"); 
  expect(cal).toHaveClass("calendar-main")
})

test('Month and year render at the top of the calendar', async () => {
  // Checks that the calendar is rendering
  render(<Events />)
  expect(screen.getByRole("heading")).toHaveTextContent('2023')
  expect(screen.getByRole("heading")).toHaveTextContent('April')
})

test('Calendar render is visible ', async () => {
  render(<Events />)
  const cal = screen.getByRole("calendar"); 
  expect(cal).toBeVisible(); 

})

