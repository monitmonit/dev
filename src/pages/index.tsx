import styled from 'styled-components';

const Button = styled.button`
  color: red;
`;

const Home: React.VFC = () => {
  return (
    <div>
      <div>Hello World!!</div>
      <Button>Button</Button>
    </div>
  );
};

export default Home;
