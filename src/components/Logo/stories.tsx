import { Meta, Story } from '@storybook/react'

import Logo from '.'
import { LogoProps } from './Logo'

export default {
  title: 'Logo',
  component: Logo,
  args: {}
} as Meta

export const Default: Story<LogoProps> = (args) => <Logo {...args} />
