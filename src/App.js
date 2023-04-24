import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import News from './components/News';
import Matches from './components/Matches';
import Players from './components/Players';
import Shop from './components/Shop';
import ClubInfo from './components/ClubInfo';
import Sporting from './components/Sporting';
import Footer from './components/Footer';
import IndexPage from './components/IndexPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<IndexPage />}/>
        <Route path='/news' element={<News />}/>
        <Route path='/matches' element={<Matches />}/>
        <Route path='/players' element={<Players />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/clubinfo' element={<ClubInfo />}/>
        <Route path='/sportingtv' element={<Sporting />}/>
      </Route>
      <Route element={<Footer />}/>
    </Routes>
  );
}

export default App;

// export default function App() {
//   return (
//     <h1 className="text-3xl font-bold underline-400">
//       Hello world!
//     </h1>
//   )
// }
