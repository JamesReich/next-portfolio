import * as React from 'react';

// @ts-ignore


export default function Pill({ children, className, ...props }) {

    const classes = [
        'bg-red-500',
        'bg-yellow-500',
        'bg-green-500',
        'bg-blue-500',
        'bg-indigo-500',
        'bg-purple-500',
        'bg-pink-500',
        'bg-cyan-500',
        'bg-rose-500',
        'bg-fuchsia-500',
        'bg-violet-500',
        'bg-emerald-500',
        'bg-teal-500',
        'bg-lime-500',
        'bg-sky-500',
        'bg-amber-500',
        'bg-orange-500',
    ];

    const randomClass = classes[Math.floor(Math.random() * classes.length)];


    return (
        <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-semibold ${randomClass} ${className}`}
            {...props}
        >
            {children}
        </span>
    )
}