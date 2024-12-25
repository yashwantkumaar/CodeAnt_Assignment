import React from 'react'
import { Button } from './ui/button'


// icons
import { Plus, RefreshCcw, Search } from 'lucide-react';

import SearchInput from './SearchInput';
import DataRepo from './DataRepo';

const Repo = () => {
    return (
        <div className='bg-white h-full w-full rounded-xl shadow-md'>
            {/* buttons */}
            <div className='px-4 py-2 flex justify-between items-center'>
                <div>
                <h1 className='font-semibold text-xl'>Repositories</h1>
                <h5 className='text-gray-400 text-sm'>33 Total Repositories</h5>
                </div>
                <div className='flex space-x-4'>
                    <Button className="text-gray-500 border rounded-xl shadow-md">
                        <RefreshCcw />
                        Refresh All
                    </Button>
                    <Button className="text-white bg-blue-500 rounded-xl shadow-md hover:bg-blue-500 hover:text-white">
                        <Plus />
                        Add Repositories
                    </Button>
                </div>
            </div>

            {/* search bar */}
            <SearchInput/>  

            {/* line */}
            <hr className="border-t-2 border-gray-200 my-4" />   

            {/* main repo */}    
            <DataRepo/> 
            
        </div>
    )
}

export default Repo
