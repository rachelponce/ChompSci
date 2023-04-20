import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import About from '../pages/About/About-page'

test('Avatar renders and is visible: Savannah', async () => {
  render(<About />)
  const pic = screen.getByTestId('savannah'); 
    expect(pic).toBeVisible(); 
    expect(pic).toBeDefined(); 
})

test('Correct image is used for avatar: Savannah', async () => {
  render(<About />)
  const pic = screen.getByTestId('savannah'); 
  expect(pic).toHaveAttribute("src", "savannahAvatar.png");
  expect(pic).toHaveAttribute("alt", "logo");
})

test('Avatar renders and is visible: Maddie', async () => {
  render(<About />)
  const pic = screen.getByTestId('maddie'); 
    expect(pic).toBeVisible(); 
    expect(pic).toBeDefined(); 
})

test('Correct image is used for avatar: Maddie', async () => {
  render(<About />)
  const pic = screen.getByTestId('maddie'); 
  expect(pic).toHaveAttribute("src", "maddieAvatar.png");
  expect(pic).toHaveAttribute("alt", "logo");
})

test('Avatar renders and is visible: Rachel', async () => {
  render(<About />)
  const pic = screen.getByTestId('rachel'); 
    expect(pic).toBeVisible(); 
    expect(pic).toBeDefined(); 
})

test('Correct image is used for avatar: Rachel', async () => {
  render(<About />)
  const pic = screen.getByTestId('rachel'); 
  expect(pic).toHaveAttribute("src", "rachelAvatar.png");
  expect(pic).toHaveAttribute("alt", "logo");
})

test('Avatar renders and is visible: Lily', async () => {
  render(<About />)
  const pic = screen.getByTestId('lily'); 
    expect(pic).toBeVisible(); 
    expect(pic).toBeDefined(); 
})

test('Correct image is used for avatar: Lily', async () => {
  render(<About />)
  const pic = screen.getByTestId('lily'); 
  expect(pic).toHaveAttribute("src", "lilyAvatar.png");
  expect(pic).toHaveAttribute("alt", "logo");
})

test('About Us page text renders', async () => {
  render(<About />)
  expect(screen.getByTestId("about-us")).toHaveTextContent('About Us'); 
})