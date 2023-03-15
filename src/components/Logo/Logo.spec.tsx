import { render, screen } from '@testing-library/react'

import Logo from '.'

describe('<Logo />', () => {
  it('1. should render the reading', () => {
    const { container } = render(<Logo />)

    expect(screen.getByRole('heading', { name: Logo })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
