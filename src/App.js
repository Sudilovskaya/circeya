import './index.scss';
import './reset.scss';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Slider from './components/Slider';


const firstImages = [
  {
    id: 1,
    img: '/img/img1.png'
  },
  {
    id: 2,
    img: '/img/img2.png'
  },
];
const secondImages = [
  {
    id: 3,
    img: '/img/img3.png'
  },
  {
    id: 4,
    img: '/img/img4.png'
  },
];

function App() {
  return (
    <div>
      <Header/>
      <Main images={ firstImages }/>
      <Slider/>
        <Main images={ secondImages }/>
      <Footer/>
    </div>
  );
}

export default App;
