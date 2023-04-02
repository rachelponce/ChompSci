import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Home from '../pages/Home/Home-page'
import ImageSlider from '../pages/Home/Slider/Slider'

test('Image header has the correct className', async () => {
  render(<Home />)
  const happeningHeader = screen.getByTestId('picHeader'); 
  expect(happeningHeader).toHaveClass("happening-this-week"); 
})

test('Image header is visible', async () => {
  render(<Home />)
  const happeningHeader = screen.getByTestId('picHeader'); 
  expect(happeningHeader).toBeVisible(); 
})

test('Image header is defined', async () => {
  render(<Home />)
  const happeningHeader = screen.getByTestId('picHeader'); 
  expect(happeningHeader).toBeDefined(); 
})

test('Slider is rendered', async () => {
  render(<Home />)
  const slider = screen.getByTestId('slider'); 
  expect(slider).toBeDefined(); 
  expect (slider).toBeVisible(); 
})

test('Slider has correct class', async () => {
  render(<Home />)
  const slider = screen.getByTestId('slider'); 
  expect(slider).toHaveClass("slidey"); 
})
