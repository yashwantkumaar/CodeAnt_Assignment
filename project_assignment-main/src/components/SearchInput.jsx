import React from 'react'
import { Input } from './ui/input';
import { Search } from 'lucide-react';

const SearchInput = () => {
    return (
        <div className='px-4 py-2'>
            <div className='relative'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4' />
                <Input
                    className="pl-10 pr-4 w-64 h-10 border border-gray-300 rounded-xl text-gray-500"
                    type="text"
                    placeholder="Search Repositories"
                />
            </div>
        </div>
    )
}

export default SearchInput
