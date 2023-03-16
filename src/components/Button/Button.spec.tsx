import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils'

import Button from '.'

describe('<Button />', () => {
  it('1. should render the reading', () => {
    const { container } = renderWithTheme(<Button>Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
