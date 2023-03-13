import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Home from '../pages/Home/Home-page'

test('Displays text on the Home Screen', async () => {
  // ARRANGE
  render(<Home />)
  expect(screen.getByRole("heading")).toHaveTextContent('Home Page')
})