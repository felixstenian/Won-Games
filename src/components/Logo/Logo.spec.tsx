import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils'

import Logo from '.'

describe('<Logo />', () => {
  it('1. should render a white label by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  }),
    it('2. should render a black label when color is passed', () => {
      renderWithTheme(<Logo color="black" />)
      expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
        color: '#030517'
      })
    }),
    it('3. should render a normal logo when size is default', () => {
      renderWithTheme(<Logo />)
      expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
        width: '11rem'
      })
    }),
    it('4. should render bigger logo', () => {
      renderWithTheme(<Logo size="large" />)
      expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
        width: '20rem'
      })
    }),
    it('5. should render a bigger logo without text if hideOnMobile', () => {
      renderWithTheme(<Logo size="large" hideOnMobile />)
      expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
        'width',
        '5.8rem',
        { media: '(max-width: 768px)' }
      )
    })
})
