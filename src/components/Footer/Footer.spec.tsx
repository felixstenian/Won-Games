import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils'

import Footer from '.'

describe('<Footer />', () => {
  it('1. should render the reading', () => {
    const { container } = renderWithTheme(<Footer />)

    expect(screen.getByTestId('footer-wrapper')).toBeInTheDocument()
    expect(screen.getByLabelText(/Won Games/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('2. should render 4 column topics and CopyRight', () => {
    renderWithTheme(<Footer />)

    expect(
      screen.getByRole('heading', { name: /Contact/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Follow us/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Links/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Location/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId('copyright')).toBeInTheDocument()
  })
})
