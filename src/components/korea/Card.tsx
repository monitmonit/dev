import Box from '@mui/material/Box';
import styled from 'styled-components';

interface CardProps {
  width: string;
  height: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ width, height, children }) => {
  return (
    <MyCard width={width} height={height}>
      {children}
    </MyCard>
  );
};

const MyCard = styled(Box)<CardProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 1px solid white;
  border-radius: 13px;
`;

export default Card;
