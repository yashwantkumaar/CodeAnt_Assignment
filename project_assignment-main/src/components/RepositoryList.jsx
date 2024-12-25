import React from 'react';
import { Button } from "./ui/button";
import { Input } from ".//ui/input";


// icons
import { RefreshCcw, Plus, Search, Database } from 'lucide-react';

const languageColors = {
    React: "bg-blue-500",
    Javascript: "bg-yellow-500",
    Python: "bg-green-500",
    Swift: "bg-orange-500",
    Java: "bg-red-500",
    "HTML/CSS": "bg-purple-500",
    PHP: "bg-indigo-500"
};

const RepositoryList = ({ repositories }) => {
    return (
        <div className="bg-white h-full rounded-lg shadow-sm">
            <div className="p-4 border-b">
                <div className="my-1">
                    <div>
                        <h1 className='font-semibold text-xl'>Repositories</h1>
                        <h5 className='text-gray-400 text-sm'>33 Total Repositories</h5>
                    </div>
                    <div className='flex space-x-4 my-3'>
                        <Button className="text-gray-500 border border-gray-300 rounded-xl shadow-sm">
                            <RefreshCcw />
                            Refresh All
                        </Button>
                        <Button className="text-white bg-blue-500 rounded-xl shadow-md hover:bg-blue-500 hover:text-white">
                            <Plus />
                            Add Repositories
                        </Button>
                    </div>
                </div>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                    <Input
                        className="pl-10 w-full border-gray-300 rounded-xl text-gray-600"
                        placeholder="Search repositories..."
                    />
                </div>
            </div>
            <div className="divide-y">
                {repositories.map((repo) => (
                    <div key={repo.name} className="p-4 hover:bg-gray-50">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="font-medium">{repo.name}</span>
                                    <span
                                        className={`rounded-full text-xs px-2 py-1 ${repo.visibility === "Public"
                                            ? "bg-blue-100 text-blue-800"
                                            : "bg-gray-100 text-gray-600"
                                            }`}
                                    >
                                        {repo.visibility}
                                    </span>
                                </div>
                                <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                                    <span className="flex items-center gap-1.5">
                                        <span>{repo.language}</span>
                                        <div className="bg-blue-500 rounded-full w-2 h-2"></div>
                                    </span>                                    
                                    <span className="flex items-center gap-1">
                                        <Database className="text-black h-4 w-4" />
                                        {repo.size} KB
                                    </span>
                                    <span>Updated {repo.updatedAt}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RepositoryList
