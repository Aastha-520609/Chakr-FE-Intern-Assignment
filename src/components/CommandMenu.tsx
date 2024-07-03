'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Page, { data } from '@/app/companies/page';

import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";

export function CommandMenu() {
    const [open, setOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((prevOpen) => !prevOpen);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleItemClick = () => {
        setOpen(false);
    };

    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Search" />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="CREATE">
                    <CommandItem>
                        <Link href="/tasks">
                            <p onClick={handleItemClick}>Create Task</p>
                        </Link>
                    </CommandItem>
                    <CommandItem>
                        <Link href="/calendar">
                            <p onClick={handleItemClick}>Go to Calendar</p>
                        </Link>
                    </CommandItem>
                </CommandGroup>
                <CommandGroup heading="NAVIGATE">
                    <CommandItem>
                        <Link href="/prospects">
                            <p onClick={handleItemClick}>Prospects</p>
                        </Link>
                    </CommandItem>
                    <CommandItem
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link href="/companies">
                            <p onClick={handleItemClick}>Companies</p>
                        </Link>
                        {showDropdown && (
                            <div className="absolute top-0 right-0 bg-gray-200 shadow-md py-2 rounded-md z-10">
                                {data.map((user, index) => (
                                    <Link key={index} href={`/user/${user.Name}`}>
                                        <p className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-300">{user.Name}</p>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </CommandItem>
                    <CommandItem>
                        <Link href="/opportunities">
                            <p onClick={handleItemClick}>Opportunities</p>
                        </Link>
                    </CommandItem>
                    <CommandItem>
                        <Link href="/contracts">
                            <p onClick={handleItemClick}>Contracts</p>
                        </Link>
                    </CommandItem>
                    <CommandItem>
                        <Link href="/contacts">
                            <p onClick={handleItemClick}>Contacts</p>
                        </Link>
                    </CommandItem>
                    <CommandItem>
                        <Link href="/settings">
                            <p onClick={handleItemClick}>Settings</p>
                        </Link>
                    </CommandItem>
                    <CommandItem>
                        <Link href="/notifications">
                            <p onClick={handleItemClick}>Notifications</p>
                        </Link>
                    </CommandItem>
                </CommandGroup>
                <CommandGroup heading="PEOPLE">
                    <CommandItem>Aastha Chaudhary</CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    );
}
