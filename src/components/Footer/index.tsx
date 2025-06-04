import FacebookIcon from 'assets/svgs/footer/FacebookIcon.svg';
import InIcon from 'assets/svgs/footer/InIcon.svg';
import InstagramIcon from 'assets/svgs/footer/InstagramIcon.svg';
import TwitterIcon from 'assets/svgs/footer/TwitterIcon.svg';

import {
  ColumnHeading,
  CopyrightText,
  FooterColumn,
  FooterContainer,
  FooterLink,
  SocialIconsContainer,
  StyledIconWrapper,
} from './styled';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterColumn>
        <ColumnHeading>Топ категории</ColumnHeading>
        <FooterLink href='#'>Тексты и переводы</FooterLink>
        <FooterLink href='#'>Разработка</FooterLink>
        <FooterLink href='#'>Дизайн</FooterLink>
        <FooterLink href='#'>Аудио, видео монтаж</FooterLink>
        <FooterLink href='#'>Соцсети и реклама</FooterLink>
        <FooterLink href='#'>Бизнес и жизнь</FooterLink>
        <FooterLink href='#'>SEO и оптимизация</FooterLink>
      </FooterColumn>

      <FooterColumn>
        <ColumnHeading>О Проекте</ColumnHeading>
        <FooterLink href='#'>О Нас</FooterLink>
        <FooterLink href='#'>Как Это Работает</FooterLink>
        <FooterLink href='#'>Политика Приватности</FooterLink>
        <FooterLink href='#'>Правила Пользования</FooterLink>
        <FooterLink href='#'>Пресса о нас</FooterLink>
      </FooterColumn>

      <FooterColumn>
        <ColumnHeading>Поддержка</ColumnHeading>
        <FooterLink href='#'>Контакты</FooterLink>
        <FooterLink href='#'>Политика Безопасности</FooterLink>
        <FooterLink href='#'>FAQ</FooterLink>
      </FooterColumn>

      <FooterColumn>
        <ColumnHeading>Поделиться</ColumnHeading>
        <SocialIconsContainer>
          <a href='https://facebook.com' rel='noopener noreferrer' target='_blank'>
            <StyledIconWrapper>
              <FacebookIcon />
            </StyledIconWrapper>
          </a>
          <a href='https://instagram.com' rel='noopener noreferrer' target='_blank'>
            <StyledIconWrapper>
              <InstagramIcon />
            </StyledIconWrapper>
          </a>
          <a href='https://twitter.com' rel='noopener noreferrer' target='_blank'>
            <StyledIconWrapper>
              <TwitterIcon />
            </StyledIconWrapper>
          </a>
          <a href='https://linkedin.com' rel='noopener noreferrer' target='_blank'>
            <StyledIconWrapper>
              <InIcon />
            </StyledIconWrapper>
          </a>
        </SocialIconsContainer>
      </FooterColumn>

      <CopyrightText>Copyright @ 2025 | WorkTap. All Rights Reserved</CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
