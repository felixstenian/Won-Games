import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

type breakpoints = keyof DefaultBreakpoints

export type MediaMatchProps = {
  lessThan?: breakpoints
  greaterThan?: breakpoints
}

const wrapperModifiers = {
  lessThan: (size: breakpoints) => css`
    ${media.lessThan(size)`
      display: block;
    `}
  `,

  greaterThan: (size: breakpoints) => css`
    ${media.greaterThan(size)`
      display: block;
    `}
  `
}

const MediaMatch = styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && wrapperModifiers.lessThan(lessThan)};
    ${!!greaterThan && wrapperModifiers.greaterThan(greaterThan)};
  `}
`

export default MediaMatch
