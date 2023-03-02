import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import About from '../src/pages/About-page'

test('Displays text on the About page', async () => {
  // ARRANGE
  render(<About />)
  expect(screen.getByRole("heading")).toHaveTextContent('About Page')
})