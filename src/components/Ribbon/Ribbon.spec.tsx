import { screen } from '@testing-library/react'

import Ribbon from '.'
import { renderWithTheme } from 'utils'

describe('<Ribbon />', () => {
  it('1. should render the reading', () => {
    const { container } = renderWithTheme(
      <Ribbon>
        <h1>Ribbon</h1>
      </Ribbon>
    )

    expect(screen.getByRole('heading', { name: /Ribbon/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('2. should render the text correctly', () => {
    renderWithTheme(<Ribbon>Best seller</Ribbon>)

    expect(screen.getByText(/Best seller/i)).toBeInTheDocument()
  })
  it('3. should render with the primary color', () => {
    renderWithTheme(<Ribbon>Best seller</Ribbon>)

    expect(screen.getByText(/Best seller/i)).toHaveStyle({
      backgroundColor: '#F231A5'
    })
  })
  it('4. should render with the secondary color', () => {
    renderWithTheme(<Ribbon color="secondary">Best seller</Ribbon>)

    expect(screen.getByText(/Best seller/i)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })
  it('5. should render with the normal size as default', () => {
    renderWithTheme(<Ribbon>Best seller</Ribbon>)

    expect(screen.getByText(/Best seller/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    })
  })
  it('6. should render with the small size', () => {
    renderWithTheme(<Ribbon size="small">Best seller</Ribbon>)

    expect(screen.getByText(/Best seller/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
  it('7. should render with edge in normal size', () => {
    renderWithTheme(<Ribbon>Best seller</Ribbon>)

    const ribbon = screen.getByText(/Best seller/i)
    expect(ribbon).toHaveStyleRule('border-right-width', '2rem', {
      modifier: '::before'
    })
    expect(ribbon).toHaveStyleRule('border-top-width', '1rem', {
      modifier: '::before'
    })
    expect(ribbon).toHaveStyleRule('top', '3.6rem', {
      modifier: '::before'
    })
  })
})
it('8. should render with edge in small size', () => {
  renderWithTheme(<Ribbon size="small">Best seller</Ribbon>)

  const ribbon = screen.getByText(/Best seller/i)
  expect(ribbon).toHaveStyleRule('border-right-width', '1.5rem', {
    modifier: '::before'
  })
  expect(ribbon).toHaveStyleRule('border-top-width', '0.7rem', {
    modifier: '::before'
  })
  expect(ribbon).toHaveStyleRule('top', '2.6rem', {
    modifier: '::before'
  })
})
