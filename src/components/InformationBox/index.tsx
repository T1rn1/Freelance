import ArrowIcon from 'assets/ArrowIcon.svg';
import CertificatesIcon from 'assets/CertificatesIcon.svg';
import ClockIcon from 'assets/ClockIcon.svg';
import CountryIcon from 'assets/CountryIcon.svg';
import EducationIcon from 'assets/EducationIcon.svg';
import LanguageIcon from 'assets/LanguageIcon.svg';
import { useState } from 'react';

import { Arrow, Box, Content, Grid, Icon, Label, ToggleButton, Value } from './styled';

const InformationBox = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Box>
      <ToggleButton isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? 'Скрыть подробную информацию' : 'Показать подробную информацию'}
        <Arrow alt='toggle arrow' isOpen={isOpen} src={ArrowIcon} />
      </ToggleButton>

      <Content isOpen={isOpen}>
        <Grid>
          <Icon>
            <img src={CountryIcon} />
          </Icon>
          <Label>Страна:</Label>
          <Value>Казахстан, Алматы</Value>

          <Icon>
            <img src={ClockIcon} />
          </Icon>
          <Label>На сайте:</Label>
          <Value>3 года</Value>

          <Icon>
            <img src={EducationIcon} />
          </Icon>
          <Label>Образование:</Label>
          <Value>
            1. Казахстан, КазНУ, Бакалавр
            <br />
            2. Казахстан, КБТУ, Магистратура
          </Value>

          <Icon>
            <img src={LanguageIcon} />
          </Icon>
          <Label>Знание языков:</Label>
          <Value>
            1. Казахский
            <br />
            2. Русский
          </Value>

          <Icon>
            <img src={CertificatesIcon} />
          </Icon>
          <Label>Сертификаты:</Label>
          <Value>
            1. Сертификат 1, 2020 года
            <br />
            2. Сертификат 2, 2021 года
          </Value>
        </Grid>
      </Content>
    </Box>
  );
};

export default InformationBox;
