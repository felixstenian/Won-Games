import * as Style from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
}

const Button = ({ children, size }: ButtonProps) => (
  <Style.Wrapper size={size}>
    {!!children && <span>{children}</span>}
  </Style.Wrapper>
)

export default Button
