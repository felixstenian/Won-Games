import { Meta, Story } from '@storybook/react'
import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch,
  args: {}
} as Meta

export const Desktop: Story = (args) => (
  <MediaMatch greaterThan="medium" {...args}>
    Only on Desktop
  </MediaMatch>
)
export const Mobile: Story = (args) => (
  <MediaMatch lessThan="medium" {...args}>
    Only on Mobile
  </MediaMatch>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
