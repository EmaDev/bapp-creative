import React from 'react'

interface Props {
    className?: string;
}
export const Divider = ({className}:Props) => {
    return (
        <div className={`bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent
         my-4 h-[1px] w-full ${className}`} />
    )
}
