import { Container, Section } from '../pages/Page.styled';
import { Link, NavLink } from 'react-router-dom';
import {HeaderStyled,MainTitle,NavStyled,StyledNavLink} from './Header.styled'


export const Header = () => {
  return (
    <Section>
      <Container $bottom="0px">
        <HeaderStyled>
          <div>
            <MainTitle>
              <Link to="/">Premium car rental service</Link>
            </MainTitle>
          </div>
          <NavStyled>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/catalog">Catalog</StyledNavLink>
            <StyledNavLink to="/favorites">Favorites</StyledNavLink>
          </NavStyled>
        </HeaderStyled>
      </Container>
    </Section>
  );
};