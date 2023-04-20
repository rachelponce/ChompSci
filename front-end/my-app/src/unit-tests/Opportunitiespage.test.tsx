import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Opportunities from '../pages/Opportunities/Opportunities-page';
import { EventSeatOutlined } from '@mui/icons-material';

test('Opportunities component is defined ', async () => {
  render(<Opportunities />)
  const opp = screen.getByTestId("blog"); 
  expect(opp).toBeDefined(); 
})

test('Opportunities component uses correct class and subclass ', async () => {
  render(<Opportunities />)
  const opp = screen.getByTestId("blog"); 
  expect(opp).toHaveClass("blog")
})

test('Opportunities component is visible  ', async () => {
    render(<Opportunities />)
    const opp = screen.getByTestId("blog"); 
    expect(opp).toBeVisible(); 
  })

test('Bubbles on blog use correct class', async () => {
  render(<Opportunities />)
  const opp = screen.getByTestId("bubble-1"); 
  expect(opp).toHaveClass("bubbleSpacing")
})

test('Bubbles are visible', async () => {
    render(<Opportunities />)
    const opp = screen.getByTestId("bubble-1"); 
    expect(opp).toBeVisible(); 
  })

  test('Bubbles are defined', async () => {
    render(<Opportunities />)
    const opp = screen.getByTestId("bubble-1");  
    expect(opp).toBeDefined(); 
  })

