import { screen } from '@testing-library/react'

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
    })
})
