import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@mui/material'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";



// icons ------------
import { X, Home, Code2, Cloud, BookText, Settings2, Phone, LogOut } from 'lucide-react'

// image
import img1 from "../assets/img/CodeAnt Ai_mobile.png"

const navigationItems = [
  { title: 'Repositories', icon: Home },
  { title: 'AI Code Review', icon: Code2 },
  { title: 'Cloud Security', icon: Cloud },
  { title: 'How to Use', icon: BookText },
  { title: 'Settings', icon: Settings2 },
  { title: 'Support', icon: Phone },
  { title: 'Logout', icon: LogOut },
];

const MobileSidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
    onClose();
  };

  return (
    <Drawer
      anchor="top"
      open={isOpen}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: '100%',
          maxHeight: '90vh',
          borderRadius: '0 0 16px 16px',
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        },
      }}
    >
      <div className="flex flex-col bg-white">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center gap-2">
            <img src={img1} alt="CodeAnt AI" className="h-8" />
          </div>
          <IconButton onClick={onClose} size="small">
            <X className="h-5 w-5" />
          </IconButton>
        </div>

        {/* User Selector */}
        <div className="p-4 overflow-hidden">
          <select className="w-full border border-gray-300 bg-gray-50 rounded-xl appearance-none p-2">
            <option value="user1">User1</option>
            <option value="user2">User2</option>
          </select>
        </div>

        
        {/* User Select shadcn didn't work*/}
        {/* <div className="p-4">
          <Select>
            <SelectTrigger className="w-full rounded-xl border border-gray-200 bg-gray-50">
              <SelectValue placeholder="User1" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="user1">User1</SelectItem>
              <SelectItem value="user2">User 2</SelectItem>
            </SelectContent>
          </Select>
        </div> */}

        {/* Navigation List */}
        <List sx={{ width: '100%', padding: 0 }}>
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <ListItem
                key={item.title}
                onClick={item.title === 'Logout' ? handleLogout : undefined}
                button
                sx={{
                  padding: '12px 16px',
                  '&:hover': {
                    backgroundColor: '#F9FAFB',
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Icon className="h-5 w-5 text-gray-600" />
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{
                    '& .MuiListItemText-primary': {
                      fontSize: '0.875rem',
                      fontWeight: 500,
                    },
                  }}
                />
              </ListItem>
            );
          })}
        </List>
      </div>
    </Drawer>
  );
};

export default MobileSidebar;

