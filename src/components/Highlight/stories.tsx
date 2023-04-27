import { Meta } from '@storybook/react'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead it`s back',
    subTitle: 'Come see John`s new adventures',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2',
    backgroundImage: 'img/red-dead-img.jpg'
  }
} as Meta

export const Default = (args: HighlightProps) => <Highlight {...args} />

export const WithFloatImage = (args: HighlightProps) => <Highlight {...args} />

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}
