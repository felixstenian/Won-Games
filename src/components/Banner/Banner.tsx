import Button from 'components/Button/Button'
import * as Style from './styles'

export type BannerProps = {
  img: string
  title: string
  subTitle: string
  buttonLabel: string
  buttonLink: string
}

const Banner = ({
  img,
  title,
  subTitle,
  buttonLabel,
  buttonLink
}: BannerProps) => (
  <Style.Wrapper>
    <Style.Image src={img} role="img" aria-label={title} />
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
