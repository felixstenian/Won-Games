import * as Style from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => {
  return (
    <Style.Wrapper>
      <Style.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e react avançado escrito ao lado."
      />
      <Style.Title>{title}</Style.Title>

      <Style.Description>{description}</Style.Description>
      <Style.Illustration
        src="/img/hero-illustration.svg"
        alt="Desenvolvedor de frete para uam tela com código"
      />
    </Style.Wrapper>
  )
}

export default Main
