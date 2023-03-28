import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as Style from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: JSX.Element
  as?: React.ElementType
} & ButtonTypes

const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  ...props
}: ButtonProps) => (
  <Style.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </Style.Wrapper>
)

export default Button
