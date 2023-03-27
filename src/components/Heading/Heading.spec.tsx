import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils'

import Heading from '.'

describe('<Heading />', () => {
  it('1. should render the reading', () => {
    const { container } = renderWithTheme(<Heading>Won Games</Heading>)

    expect(
      screen.getByRole('heading', { name: /Won Games/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
  it('2. should render a white heading by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })
  it('3. should render a black heading by default', () => {
    renderWithTheme(<Heading color="black">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      color: '#030517'
    })
  })
  it('4. should render a heading whith line to left side', () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      'border-left': '0.7rem solid #F231A5'
    })
  })
  it('5. should render a heading whith line at the bottom', () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      { modifier: '::after' }
    )
  })
  it('6. should render a heading whith a small size', () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      'font-size': '1.6rem'
    })
    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyleRule(
      'width',
      '3rem',
      { modifier: '::after' }
    )
  })
  it('7. shold render a Heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Won Games
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /Won Games/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #F231A5' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })
  it('8. shold render a Heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineLeft lineBottom lineColor="secondary">
        Won Games
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /Won Games/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #3CD3C1' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after'
    })
  })
})
