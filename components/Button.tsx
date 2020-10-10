import React from 'react'
import styled from 'styled-components'

import { Colors } from '@constants'

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const DefaultButton = (props: ButtonProps): JSX.Element => (
  <button type="button" {...props} />
)

export const Button = styled(DefaultButton)`
  text-align: center;
  background-color: ${Colors.primary};
  border: 1px solid ${Colors.white};
  padding: 8px;
  &:active,
  &:focus {
    background-color: ${Colors.primaryActive};
    outline: none;
  }
`
export const TextButton = styled(DefaultButton)`
  text-align: center;
  background-color: #00000000;
  border: none;
  padding: 8px;
  &:active,
  &:focus {
    outline: none;
  }
`
