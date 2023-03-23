import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import { Button, Logo, MediaMatch } from 'components'
import * as Style from './styles'
import { useState } from 'react'

type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Style.Wrapper>
      <MediaMatch lessThan="medium">
        <Style.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="open menu" />
        </Style.IconWrapper>
      </MediaMatch>

      <Style.LogoWrapper>
        <Logo hideOnMobile />
      </Style.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <Style.MenuNav>
          <Style.MenuLink href="#">Home</Style.MenuLink>
          <Style.MenuLink href="#">Explore</Style.MenuLink>
        </Style.MenuNav>
      </MediaMatch>

      <Style.MenuGroup>
        <Style.IconWrapper>
          <SearchIcon aria-label="search" />
        </Style.IconWrapper>

        <Style.IconWrapper>
          <ShoppingCartIcon aria-label="open shopping cart" />
        </Style.IconWrapper>

        {!username && (
          <MediaMatch greaterThan="medium">
            <Button>Sign in</Button>
          </MediaMatch>
        )}
      </Style.MenuGroup>

      <Style.MenuFull isOpen={isOpen} aria-hidden={!isOpen}>
        <CloseIcon aria-label="close menu" onClick={() => setIsOpen(false)} />

        <Style.MenuNav>
          <Style.MenuLink href="#">Home</Style.MenuLink>
          <Style.MenuLink href="#">Explore</Style.MenuLink>

          {!!username && (
            <>
              <Style.MenuLink href="#">My account</Style.MenuLink>
              <Style.MenuLink href="#">Wishlist</Style.MenuLink>
            </>
          )}
        </Style.MenuNav>

        {!username && (
          <Style.RegisterBox>
            <Button fullWidth size="large">
              Log in now
            </Button>
            <span>or</span>
            <Style.CreateAccount href="#" title="Sign Up">
              Sign Up
            </Style.CreateAccount>
          </Style.RegisterBox>
        )}
      </Style.MenuFull>
    </Style.Wrapper>
  )
}

export default Menu
