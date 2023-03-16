import { Meta, Story } from '@storybook/react'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argsTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />

Default.args = {
  children: 'Buy now'
}
