import { createContext, useState } from 'react';

import Header from './Components/Header/Header';
import Axios from './Config/Hooks/Axios';
import Images from './Components/Images/Images';
import { Link } from 'react-router-dom';

export const ImageContext = createContext();

function App() {
  const { data, loading, error, getData } = Axios(`/search/photos?page=1&query=astronomy&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`);
  const [keyword, setKeyword] = useState('');
  const value = {
    data, loading, error, getData, keyword, setKeyword
  }

  return (
    <ImageContext.Provider value={value}>


      <div className="App">

        <Header />
        <div className='container w-4/5  py-10 mx-auto'>
          <Images />

        </div>
        <div className="w-4/5  contaier text-center mx-auto bg-violet-50 rounded-lg border-t-2 border-violet-200">
        <div className='py-5'> 
        <p className=''>     Created My Mayur Jadhav
        </p>
        <Link to="" target="blank">Git repo</Link>
        </div>

        </div>
      </div>
    </ImageContext.Provider>
  );
}

export default App;
