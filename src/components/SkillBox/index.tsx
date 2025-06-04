import { Box, Skill } from './styled';

const SkillBox: React.FC<{ skills: string[] }> = ({ skills }) => {
  return (
    <Box>
      {skills.map((skill, index) => (
        <Skill key={index}>{skill}</Skill>
      ))}
    </Box>
  );
};

export default SkillBox;
