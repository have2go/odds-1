'use client';

import { usePageTransition } from './PageTransitionProvider';

export default function TransitionLink({ href, children, className, ...props }) {
    const { navigateWithTransition } = usePageTransition();

    const handleClick = (e) => {
        e.preventDefault();
        navigateWithTransition(href);
    };

    return (
        <a 
            href={href} 
            onClick={handleClick} 
            className={className}
            {...props}
        >
            {children}
        </a>
    );
}
