import { Button } from 'components'

import * as Style from './styles'

export type HighlightProps = {
  title: string
  subTitle: string
  buttonLabel: string
  buttonLink: string
  backgroundImage: string
  floatImage?: string
  aligment?: 'left' | 'right'
}

const Highlight = ({
  title,
  subTitle,
  buttonLabel,
  buttonLink,
  backgroundImage,
  floatImage,
  aligment = 'right'
}: HighlightProps) => (
  <Style.Wrapper backgroundImage={backgroundImage} aligment={aligment}>
    {!!floatImage && <Style.FloatImage src={floatImage} alt={title} />}
    <Style.Content>
      <Style.Title>{title}</Style.Title>
      <Style.SubTitle>{subTitle}</Style.SubTitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </Style.Content>
  </Style.Wrapper>
)

export default Highlight
