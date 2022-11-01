
import { useState } from 'react';
import Header from './components/Header';
import AlbumList from './components/AlbumList';
import './App.css';
import AddAlbum from './components/AddAlbum';

function App() {
  const [toggle, setToggle] = useState(true)
  return (
    <div className="App">
      <Header/>
      <AlbumList toggle={toggle}/>
      <AddAlbum setToggle={setToggle} toggle={toggle}/>

    </div>
  );
}

export default App;
