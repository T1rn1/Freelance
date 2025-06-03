import SettingsIcon from 'assets/SettingsIcon.svg';
import Rating from 'components/Rating';

import { AvatarCircle, Settings, Status, Wrapper } from './styled';

const AvatarCard: React.FC = () => {
  const stars = 4;

  return (
    <Wrapper>
      <Status>В сети</Status>

      <AvatarCircle />
      <Settings>
        <img src={SettingsIcon} />
      </Settings>
      <Rating stars={stars} />
    </Wrapper>
  );
};

export default AvatarCard;
