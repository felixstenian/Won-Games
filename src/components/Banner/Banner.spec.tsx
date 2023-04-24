import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils'

import Banner from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subTitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('1. should render the reading', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /Defy death/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands season/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://source.unsplash.com/user/willianjusten/1042x580'
    )

    expect(container.firstChild).toMatchSnapshot()
  })
  it('1. should render the reading', () => {
    renderWithTheme(
      <Banner
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
        {...props}
      />
    )

    const myRibbon = screen.getByText(/My ribbon/i)

    expect(myRibbon).toBeInTheDocument()
    expect(myRibbon).toHaveStyle({
      backgroundColor: '#3CD3C1',
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
