import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Home from '../pages/Home/Home-page'
import ImageSlider from '../pages/Home/Slider/Slider'

test('Displays text on the Home Screen', async () => {
  // ARRANGE
  render(<Home />)
<<<<<<< HEAD
  // expect(screen.getByRole("heading")).toHaveTextContent('What')
})
// test('Renders picture slider ', async () => {
//   // ARRANGE
//   render(<ImageSlider slides={undefined} />)
//   expect(screen.getByRole("heading")).toHaveTextContent('Home Page')
// })
=======
  expect(screen.getByRole("text")).toHaveTextContent('Happening this week at UF:')
})
>>>>>>> 826257acae2d56049aa455cfa8dc49023bfcd1a3
