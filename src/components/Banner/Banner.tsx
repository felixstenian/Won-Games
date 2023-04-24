import { Button, Ribbon } from 'components'
import { RibbonColors, RibbonSizes } from 'components/Ribbon'

import * as Style from './styles'

export type BannerProps = {
  img: string
  title: string
  subTitle: string
  buttonLabel: string
  buttonLink: string
  ribbon?: string
  ribbonSize?: RibbonSizes
  ribbonColor?: RibbonColors
}

const Banner = ({
  img,
  title,
  subTitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonSize,
  ribbonColor
}: BannerProps) => (
  <Style.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <figure>
      <Style.Image src={img} role="img" aria-label={title} />
    </figure>
    <Style.Caption>
      <Style.Title>{title}</Style.Title>
      <Style.SubTitle dangerouslySetInnerHTML={{ __html: subTitle }} />
      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </Style.Caption>
  </Style.Wrapper>
)

export default Banner
