import imageSrc from 'assets/RegPageImage.png';

import { BoxWrapper, ElseBtn, Price, Title, WorkCard, WorkImage, WorksTitle } from './styled';

const works = [
  {
    id: 1,
    title: 'Дизайн сайта',
    price: '500 рублей',
    image: imageSrc,
  },
  {
    id: 2,
    title: 'Верстка лендинга',
    price: '1200 рублей',
    image: imageSrc,
  },
  {
    id: 3,
    title: 'UI/UX аудит',
    price: '800 рублей',
    image: imageSrc,
  },
  {
    id: 4,
    title: 'Верстка лендинга',
    price: '1200 рублей',
    image: imageSrc,
  },
  {
    id: 5,
    title: 'UI/UX аудит',
    price: '800 рублей',
    image: imageSrc,
  },
];

const WorksBox = () => {
  return (
    <div>
      <WorksTitle>Мои ворки</WorksTitle>

      <BoxWrapper>
        {works.map((work) => (
          <WorkCard key={work.id}>
            <WorkImage image={work.image} />
            <Title>{work.title}</Title>
            <Price>{work.price}</Price>
          </WorkCard>
        ))}
      </BoxWrapper>

      <ElseBtn>Загрузить ещё</ElseBtn>
    </div>
  );
};

export default WorksBox;
