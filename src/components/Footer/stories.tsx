import { Meta } from '@storybook/react'
import Footer, { FooterTypes } from '.'

export default {
  title: 'Footer',
  component: Footer,
  args: {}
} as Meta

export const Default = (args: FooterTypes) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Footer {...args} />
  </div>
)
