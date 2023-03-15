import { Meta, Story } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'React Avançado',
    description: 'TypeScript, ReactJS, NextJS, storybook e Strapi'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'Basic Title: React Avançado',
  description:
    'Basic description: TypeScript, ReactJS, NextJS, storybook e Strapi'
}

export const Default: Story = (args) => <Main {...args} />
