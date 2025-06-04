import { Box, Skill } from './styled';

const SkillBox = () => {
  const arr = ['Figma', 'It', 'programming'];
  return (
    <Box>
      {arr.map((skill, index) => (
        <Skill key={index}>{skill}</Skill>
      ))}
    </Box>
  );
};

export default SkillBox;
