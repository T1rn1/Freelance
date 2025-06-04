import imageSrc from 'assets/RegPageImage.png';

import { BoxWrapper, Price, Title, WorkCard, WorkImage, WorksTitle } from './styled';

const WorksBox = () => {
  return (
    <div>
      <WorksTitle>Мои ворки</WorksTitle>

      <BoxWrapper>
        <WorkCard>
          <WorkImage image={imageSrc} />
          <Title>Дизайн сайта</Title>
          <Price>500 рублей</Price>
        </WorkCard>
      </BoxWrapper>
    </div>
  );
};

export default WorksBox;
