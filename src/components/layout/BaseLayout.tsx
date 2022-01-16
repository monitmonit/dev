import { Box } from '@mui/material';
import Header from './Header';


const BaseLayout: React.FC = ({ children }) => {
  return (
    <Box sx={{  display:'flex', margin:'auto', maxWidth: '1382px', flexDirection:'column'}}>
       <Header />
       <div>
       {children}
       </div>
    </Box>
  );    
};

export default BaseLayout;
