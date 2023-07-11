import { useContext } from 'react'
import { ImageContext } from '../../App';
import Skeleton from '../Skeleton/Skeleton';
import { Link } from 'react-router-dom';
function Images() {
    const {data, loading, keyword} = useContext(ImageContext);
    return (
        <div>
        <h1 className='text-4xl font-semibold py-5'>Search Results for <u>{keyword || "Astronomy"}</u> </h1>
            <div className="grid gap-1 lg:grid-cols-3 md:grid-cols-3 grid-cols-1 justify-center">

            {loading ? <Skeleton item={10}/> : data.map((data, key) =>
                
                

               
                <Link to={data.links.html} target='blank' key={key} className='lg:h-72 lg:mt-0 mt-2 h-auto max-h-56 lg:max-h-72 relative cursor-zoom-in overflow-hidden bg-violet-50' title={data.alt_description}>
                <div className="absolute w-full justify-between mt-5 z-50 h-10 flex  items-center p-4">
<Link to={data.user.links.html} target='blank' className='flex items-center space-x-2 cursor-pointer'>
<img className="lg:w-10 w-8 h-8 lg:h-10 rounded-full border-2 "
src={data.user.profile_image .small} 
 alt={data.user.bio}></img>
<div className="font-medium dark:text-white text-left">
   <div className=' drop-shadow-lg bg-opacity-40 align-middle bg-black  text-white lg:text-md text-xs'>{data.user.first_name} {data.user.last_name}</div>
</div>
</Link>
              
                <div className='cursor-pointer'>
                <button className='bg-white p-2 rounded-lg hover:bg-violet-50' ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
              </svg></button>
                </div>
            </div>
                <img 

src={data.urls.small}                alt={data.urls.alt_description}
                 className='bg-opacity-90 m-auto object-contain  w-full h-fit -z-10 '
             />
                 
                </Link>
            )}
                


            </div>
        </div>
    )
}

export default Images
