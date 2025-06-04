import CertificatesIcon from 'assets/svgs/InformationBox/CertificatesIcon.svg';
import ClockIcon from 'assets/svgs/InformationBox/ClockIcon.svg';
import CountryIcon from 'assets/svgs/InformationBox/CountryIcon.svg';
import EducationIcon from 'assets/svgs/InformationBox/EducationIcon.svg';
import LanguageIcon from 'assets/svgs/InformationBox/LanguageIcon.svg';
import { useState } from 'react';

import { Arrow, Box, Content, Grid, Icon, Label, ToggleButton, Value } from './styled';

const InformationBox = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Box>
      <ToggleButton isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? 'Скрыть подробную информацию' : 'Показать подробную информацию'}
        <Arrow isOpen={isOpen} />
      </ToggleButton>

      <Content isOpen={isOpen}>
        <Grid>
          <Icon>
            <CountryIcon />
          </Icon>
          <Label>Страна:</Label>
          <Value>Казахстан, Алматы</Value>

          <Icon>
            <ClockIcon />
          </Icon>
          <Label>На сайте:</Label>
          <Value>3 года</Value>

          <Icon>
            <EducationIcon />
          </Icon>
          <Label>Образование:</Label>
          <Value>
            1. Казахстан, КазНУ, Бакалавр
            <br />
            2. Казахстан, КБТУ, Магистратура
          </Value>

          <Icon>
            <LanguageIcon />
          </Icon>
          <Label>Знание языков:</Label>
          <Value>
            1. Казахский
            <br />
            2. Русский
          </Value>

          <Icon>
            <CertificatesIcon />
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
