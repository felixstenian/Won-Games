import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils'
import Highlight from '.'
import * as Style from './styles'

const props = {
  title: 'Titulo 1',
  subTitle: 'Titulo 2',
  buttonLabel: 'Buy now',
  buttonLink: '/rfc',
  backgroundImage: '/img/red-dead-img.jpg'
}

describe('<Highlight />', () => {
  it('1. should render headings and button', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /Titulo 1/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Titulo 2/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Buy now/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('2. should render background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })
  it('3. should render float image', () => {
    renderWithTheme(<Highlight {...props} floatImage="/float-image.png" />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/float-image.png'
    )
  })
  it('4. should render align right by default', () => {
    const { container } = renderWithTheme(
      <Highlight {...props} floatImage="/float-image.png" />
    )
    expect(container.firstChild).toHaveStyleRule({
      'grid-template-ares': 'floatimage content'
    })
    expect(container.firstChild).toHaveStyleRule({
      'text-align': 'right',
      modifier: `${Style.Content}`
    })
  })
  it('5. should render align left', () => {
    const { container } = renderWithTheme(
      <Highlight {...props} floatImage="/float-image.png" aligment="left" />
    )
    expect(container.firstChild).toHaveStyleRule({
      'grid-template-ares': 'content floatimage'
    })
    expect(container.firstChild).toHaveStyleRule({
      'text-align': 'left',
      modifier: `${Style.Content}`
    })
  })
})
