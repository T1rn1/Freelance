import CertificatesIcon from 'assets/svgs/InformationBox/CertificatesIcon.svg';
import ClockIcon from 'assets/svgs/InformationBox/ClockIcon.svg';
import CountryIcon from 'assets/svgs/InformationBox/CountryIcon.svg';
import EducationIcon from 'assets/svgs/InformationBox/EducationIcon.svg';
import LanguageIcon from 'assets/svgs/InformationBox/LanguageIcon.svg';
import type { UserInfoModel } from 'models/UserInfoModel';
import { useState } from 'react';

import { Arrow, Box, Content, Grid, Icon, Label, ToggleButton, Value } from './styled';

interface InformationBoxProps {
  info: UserInfoModel;
}

const InformationBox: React.FC<InformationBoxProps> = ({ info }) => {
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
          <Value>{info.location}</Value>

          <Icon>
            <ClockIcon />
          </Icon>
          <Label>На сайте:</Label>
          <Value>{info.membershipDuration}</Value>

          <Icon>
            <EducationIcon />
          </Icon>
          <Label>Образование:</Label>
          <Value>{info.education.map((edu, idx) => `${idx + 1}. ${edu}`).join('\n')}</Value>

          <Icon>
            <LanguageIcon />
          </Icon>
          <Label>Знание языков:</Label>
          <Value>{info.languages.map((lang, idx) => `${idx + 1}. ${lang}`).join('\n')}</Value>

          <Icon>
            <CertificatesIcon />
          </Icon>
          <Label>Сертификаты:</Label>
          <Value>{info.certificates.map((cert, idx) => `${idx + 1}. ${cert}`).join('\n')}</Value>
        </Grid>
      </Content>
    </Box>
  );
};

export default InformationBox;
