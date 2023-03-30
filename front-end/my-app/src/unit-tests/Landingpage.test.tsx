import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Landing from '../pages/Landing/Landing'

test('Three headers are rendered and contain content', async () => {
  render(<Landing />)
  const t1 = screen.getByTestId('t1'); 
  const t2 = screen.getByTestId('t2'); 
  const t3 = screen.getByTestId('t3'); 
  expect(t1).toBeVisible();  
  expect(t2).toBeVisible(); 
  expect(t3).toBeVisible(); 
  expect(t1).toBeDefined();  
  expect(t2).toBeDefined(); 
  expect(t3).toBeDefined(); 
})

test('Picture is defined and visible', async () => {
    render(<Landing />)
    const pic = screen.getByTestId('pic'); 
    expect(pic).toBeVisible(); 
    expect(pic).toBeDefined(); 
  })

test('Correct image is used for picture', async () => {
    render(<Landing />)
    const pic = screen.getByTestId('pic'); 
    expect(pic).toHaveAttribute("src", "gator.gif");
    expect(pic).toHaveAttribute("alt", "gator");
})

test('Typewriter npm package renders', async () => {
    render(<Landing />)
    const typewriter = screen.getByTestId('typewriter'); 
    expect(typewriter).toBeVisible(); 
    expect(typewriter).toBeDefined();  
})