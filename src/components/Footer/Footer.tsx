import { HTMLAttributes } from 'react'
import Link from 'next/link'

import { Heading, Logo } from 'components'

import * as Style from './styles'

export type FooterTypes = HTMLAttributes<HTMLElement>

const Footer = (props: FooterTypes) => (
  <Style.Wrapper {...props}>
    <Logo color="black" />
    <Style.Content>
      <Style.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact
        </Heading>

        <a
          href="mailto:sac@wongames.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          sac@wongames.com
        </a>
        <a
          href="mailto:sac@wongames.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          +55 8299999-9999
        </a>
      </Style.Column>

      <Style.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow us
        </Heading>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          Youtube
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </Style.Column>

      <Style.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Links
        </Heading>
        <nav aria-labelledby="footer resources">
          <Link href="#">
            <a>Home</a>
          </Link>
          <Link href="#">
            <a>Store</a>
          </Link>
          <Link href="#">
            <a>Buscar</a>
          </Link>
        </nav>
      </Style.Column>

      <Style.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Location
        </Heading>

        <span>Loren ipsun.</span>
        <span>Loren ipsun.</span>
        <span>Loren ipsun.</span>
      </Style.Column>
    </Style.Content>
    <Style.CopyRight>
      Won Games {new Date().getFullYear() || 2023} @ All rights reserved
    </Style.CopyRight>
  </Style.Wrapper>
)

export default Footer
