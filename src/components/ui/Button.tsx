import React, { ReactNode } from 'react'

interface Props {
    text: string;
    type?: "Primary"|"Secondary";
    onPress?: string;
    className?: string;
    icon?: ReactNode;
}
export const Button = ({ text, onPress, className, icon, type = "Primary"}: Props) => {

    return (
        <button 
        className={`p-3 rounded-lg m-2 transtion-all duration-300 hover:scale-110 flex gap-2 font-bold
        items-center justify-center text-white ${type == "Primary" ? "bg-[#413ba8] hover:bg-[#6d68bc]" : "bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.2)]"} `}>
            {text}
            {icon}
        </button>
    )
}
