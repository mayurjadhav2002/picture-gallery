import React, { useContext, useState } from 'react'
import { ImageContext } from '../../App';

function Header() {
    const [search, setSearch] = useState("");
    const { getData, setKeyword } = useContext(ImageContext);
    const SearchInput = (e) => {
        setSearch(e.target.value);
    }
    const submitButton = (e) => {
        getData(`/search/photos?page=1&query=${search}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
        setSearch(" ");
        setKeyword(search);
    }
    const handleInputSearch = (e) => {
        if (e.key === 'Enter') {
            submitButton();
        }
    }
    return (
        <div className='p-10 bg-violet-50 border-b-4 border-violet-700'>
            <h1 className='text-4xl text-blue-600 font-extrabold text-center'>Picture Gallery Application</h1>
            <p className='py-2 text-center'>
                The internet's source for visuals.
                Powered by creators everywhere.</p>
            <div className='w-full flex  justify-center items-center text-center py-5'>

                <div className='lg:w-2/5 w-full flex  '>

                    <div className="relative w-full">

                        <input onChange={SearchInput} onKeyDown={handleInputSearch} type="text" id="image-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
    rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 lg:p-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Landscape, Portrait, Drawings, Nature..."
                            value={search}
                            required />

                    </div>
                    <button onClick={submitButton} type="submit" className="inline-flex items-center py-2.5 px-5
                     ml-2 text-sm font-medium text-white bg-blue-700
 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>Search
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
