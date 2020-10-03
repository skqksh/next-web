import React from 'react'

type TextProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>

export const Text = (props: TextProps): JSX.Element => {
  const { children, ...rest } = props
  return <span {...rest}>{children}</span>
}
