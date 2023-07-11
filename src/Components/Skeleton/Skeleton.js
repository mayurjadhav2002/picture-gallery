// import React from 'react'

// const Skeleton = (item) => {
//     return [...Array(item).keys()].map(() => (

        // <div className='h-40 bg-violet-50 w-full'>
        //     <div class="flex items-center align-bottom p-4 space-x-2">

        //         <div class="w-10 h-10 rounded-full bg-violet-200" src="/docs/images/people/profile-picture-5.jpg" alt=""></div>
        //         <div class="font-medium dark:text-white text-left">
        //             <div className='bg-violet-200 w-28 h-6'></div>
        //         </div>
        //     </div>
        // </div>


//     ))

  
// }

// export default Skeleton
import React from 'react'

const Skeleton = ({item}) => {
  return [...Array(item).keys()].map(() =>(
    <div className='lg:h-72 h-60 animate-pulse duration-75 bg-violet-50 w-full rounded-lg'>
    
    <div class="flex items-center align-bottom p-4 space-x-2">
        <div class="w-10 h-10 rounded-full bg-violet-200" src="/docs/images/people/profile-picture-5.jpg" alt=""></div>
        <div class="font-medium dark:text-white text-left">
            <div className='bg-violet-200 w-28 h-6'></div>
        </div>
    </div>
    <h1 className='text-center align-middle text-violet-700 font-extralight text-2xl'>Loading</h1>

</div>
  ))
}

export default Skeleton
