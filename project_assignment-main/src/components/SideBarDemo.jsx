import React, { useState } from 'react';
import { cn } from "../lib/utils"

import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarProvider,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "./ui/sidebar"


import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select"


// img
import img1 from "../assets/img/CodeAnt Ai.png"

// icons
import { SeparatorVertical, Home, Cloud, BookText, Settings, Phone, LogOut } from "lucide-react"


// items in the side bar
const items = [
    {
        title: "Repositories",
        url: "#",
        icon: Home,
    },
    {
        title: "AI Code Review ",
        url: "#",
        icon: SeparatorVertical,
    },
    {
        title: "Cloud Security",
        url: "#",
        icon: Cloud,
    },
    {
        title: "How to Use",
        url: "#",
        icon: BookText,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

const SideBarDemo = () => {

    const [activeItem, setActiveItem] = useState('Repositories');

    const handleItemClick = (title) => {
        setActiveItem(title);
    };
    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (

        <div className='w-full h-full'>
            <Sidebar className="h-full w-1/6">
                <SidebarHeader>
                    <img src={img1} alt="logo" className='w-full h-full' />

                    {/* select acc */}
                    <Select>
                        <SelectTrigger className="w-full rounded-lg border border-gray-300">
                            <SelectValue placeholder="User1" />
                        </SelectTrigger>
                        <SelectContent className="rounded-lg bg-white">
                            <SelectItem value="light">User1</SelectItem>
                            <SelectItem value="dark">User2</SelectItem>
                        </SelectContent>
                    </Select>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarGroup />
                    <SidebarGroupContent>
                        <SidebarMenu className="h-full w-full">
                            <div className='ml-6 flex-col items-center justify-center'>
                                {items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton
                                            asChild
                                            className={cn(
                                                "w-3/4 rounded-xl flex items-center space-x-2 px-3 py-2 text-sm font-medium transition-colors",
                                                activeItem === item.title
                                                    ? "bg-blue-500 text-white"
                                                    : "text-gray-700 hover:bg-gray-100"
                                            )}
                                        >
                                            <button onClick={() => handleItemClick(item.title)} className="flex items-center space-x-2">
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </button>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </div>
                        </SidebarMenu>
                    </SidebarGroupContent>
                    <SidebarGroup />
                </SidebarContent>
                <SidebarFooter>
                    <SidebarMenuButton className="w-3/4 rounded-lg flex items-center space-x-2 px-5 py-2 text-sm font-medium transition-colors text-gray-700">
                        <Phone/>
                        <span>Support</span>
                    </SidebarMenuButton>
                    <SidebarMenuButton className="w-3/4 rounded-lg flex items-center space-x-2 px-5 py-2 text-sm font-medium transition-colors text-gray-700"  onClick={handleClick}>
                        <LogOut/>
                        <span>Logout</span>                       
                    </SidebarMenuButton>
                </SidebarFooter>
            </Sidebar>
        </div>
    )
}

export default SideBarDemo
