import { ThemeProvider } from 'react-bootstrap';
import ShareFeature from '../ShareFeature2';
import './App.scss';

function App() {
  return (
    <ThemeProvider dir="rtl">
      <ShareFeature />
    </ThemeProvider>

  );
}

export default App;
