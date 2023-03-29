import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Home from '../pages/Home/Home-page'
import ImageSlider from '../pages/Home/Slider/Slider'

test('Displays text on the Home Screen', async () => {
  // ARRANGE
  render(<Home />)
  // expect(screen.getByRole("heading")).toHaveTextContent('What')
})
// test('Renders picture slider ', async () => {
//   // ARRANGE
//   render(<ImageSlider slides={undefined} />)
//   expect(screen.getByRole("heading")).toHaveTextContent('Home Page')
// })
