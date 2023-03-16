import { screen } from '@testing-library/react'
import 'jest-styled-components'

import { renderWithTheme } from 'utils'

import Heading from '.'

describe('<Heading />', () => {
  it('1. should render the reading', () => {
    const { container } = renderWithTheme(<Heading>Heading</Heading>)

    expect(screen.getAllByText(/Heading/i))

    expect(container.firstChild).toMatchSnapshot()
  })
})
