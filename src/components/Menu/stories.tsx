import { Meta, Story } from '@storybook/react'
import Menu from '.'

export default {
  title: 'Menu',
  component: Menu,
  args: {}
} as Meta

export const Default: Story = (args) => <Menu {...args} />

Default.parameters = {
  layout: 'fullscreen',
  background: {
    default: 'dark'
  }
}
