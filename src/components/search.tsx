"use client";
import React, { useEffect } from "react";
import useDebounce from "@/hooks/debounce";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Input } from "./ui/input";
import Link from "next/link";
import { Button } from "./ui/button";
import { FaSearch } from "react-icons/fa";
import TMDB_Api_Service from "@/services/tmdbClient";
import { useRouter } from "next/navigation";
import useSearchStore from "@/context/search";

export const quickSearch = async (query:string)=>{
    const res = await TMDB_Api_Service.get("/search/keyword"+`?query=${query}`);
    return res.data.results
}
export const fullSearch = async (query:string)=>{
    const res = await TMDB_Api_Service.get("/search/multi"+`?query=${query}&include_adult=true`);
    return res.data.results
}
export default function CommandSearch() {
    const [open, setOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState("");
    const [results, setResults] = React.useState<any[]>([]);
    const router  = useRouter();
    const handleValueChange = (value: string) => {
        setInputValue(value);
        setOpen(!!value);
    };
    const debouncedSearch = useDebounce(inputValue);
    const setR = async (debouncedSearch: string) => {
        setResults(await quickSearch(debouncedSearch));
    }
    useEffect(() => {
        if (debouncedSearch) {
            setR(debouncedSearch)
        }
    }, [debouncedSearch])


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/search?query=${debouncedSearch}`);
    };
    return (
        <HoverCard>
            <HoverCardTrigger>
                <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center space-x-2">
                    <Input
                        className="rounded-full text-gray-900 bg-white"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Search..."
                        type="search"
                    />
                    <Button className="rounded-full border border-gray-700" type="submit">
                        <FaSearch />
                    </Button>
                </form>
            </HoverCardTrigger>


            <HoverCardContent forceMount={open || undefined} side="bottom" sideOffset={10} className="bg-black bg-opacity-70 rounded-lg flex flex-col max-h-64 overflow-y-auto p-0">

                {inputValue.length > 2 && results.length === 0 && <div className="text-white px-4">No results found.</div>}
                {inputValue.length > 0 && results.map((item, i) => (
                        <div onClick={()=>{setInputValue(item.name);setOpen(false);router.push(`/search?query=${item.name}`)}} className={"text-white py-2 border-b text-sm px-2 mx-4"} key={item.id} >
                            {item.name}
                        </div>
                ))}

            </HoverCardContent>
        </HoverCard>
        // <Command className="max-w-64 rounded-full border shadow-md">
        //     <CommandInput
        //     className="max-w-64 relative rounded-full"
        //         placeholder="Type a command or search..."
        //         value={inputValue}
        //         onValueChange={handleValueChange}
        //     />
        //     <div className="absolute mt-10 z-10 w-64 bg-white">
        //     {
        //         <CommandList className="rounded-lg">
        //         {inputValue.length > 2 && <CommandEmpty>No results found.</CommandEmpty>}
        //                 {inputValue.length >0 && results.map((item,i) => (
        //                     <CommandItem className={i === 0 ? "rounded-t-lg" : i+1===results.length ? "rounded-b-lg":""} key={item.id} value={item.id}>
        //                         {item.name}
        //                     </CommandItem>
        //                 ))}
        //         </CommandList>
        //     }
        //      </div>
        // </Command>
    );
}
