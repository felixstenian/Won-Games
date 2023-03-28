import { screen } from '@testing-library/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import { renderWithTheme } from 'utils'

import Button from '.'

describe('<Button />', () => {
  it('1. should render the reading', () => {
    const { container } = renderWithTheme(<Button>Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  }),
    it('2. should render the medium size by default', () => {
      renderWithTheme(<Button>Buy now</Button>)

      expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
        height: '4rem',
        padding: '0.8rem 3.2rem',
        'font-size': '1.4rem'
      })
    }),
    it('3. should render the small size by default', () => {
      renderWithTheme(<Button size="small">Buy now</Button>)

      expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
        height: '3rem',
        'font-size': '1.2rem'
      })
    }),
    it('5. should render the large size by default', () => {
      renderWithTheme(<Button size="large">Buy now</Button>)

      expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
        height: '5rem',
        padding: '0.8rem 4.8rem',
        'font-size': '1.6rem'
      })
    }),
    it('6. should render a fullWidth version', () => {
      renderWithTheme(
        <Button size="large" fullWidth>
          Buy now
        </Button>
      )

      expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
        width: '100%'
      })
    }),
    it('7. should render an icon version', () => {
      renderWithTheme(
        <Button size="large" icon={<AddShoppingCart data-testid="icon" />}>
          Buy now
        </Button>
      )
      expect(screen.getByText(/Buy now/i)).toBeInTheDocument()
      expect(screen.getByTestId('icon')).toBeInTheDocument()
    })
  it('8. should render Button as a Link', () => {
    const { debug, container } = renderWithTheme(
      <Button as="a" href="/link">
        Buy now
      </Button>
    )

    // debug(container)

    expect(screen.getByRole('link', { name: /Buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
