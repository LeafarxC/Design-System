import type { Meta, StoryObj } from '@storybook/react'

import { Box, BoxProps } from '@ignite-ui/react'

export default {
  title: 'Surface/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    Children: (
      <>
        <p> Teste o elemento Box </p>
      </>
    ),
  },
  argTypes: {
    Children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
