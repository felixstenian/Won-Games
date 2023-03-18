import * as Style from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: JSX.Element
}

const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  icon
}: ButtonProps) => (
  <Style.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </Style.Wrapper>
)

export default Button
