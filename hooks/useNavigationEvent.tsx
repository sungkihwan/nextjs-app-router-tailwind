"use client";

import {usePathname, useSearchParams} from "next/navigation";
import { useEffect } from "react";
import {pageview} from "@/utils/gtag";

export const useNavigationEvent = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    useEffect(() => {
        const url = pathname + searchParams.toString()
        pageview(url)
    }, [pathname, searchParams])
};

// export const useNavigationEvent = (onPathnameChange: () => void) => {
//     const pathname = usePathname(); // Get current route
//
//     // Save pathname on component mount into a REF
//     const savedPathNameRef = useRef(pathname);
//
//     useEffect(() => {
//         // If REF has been changed, do the stuff
//         if (savedPathNameRef.current !== pathname) {
//             onPathnameChange();
//             // Update REF
//             savedPathNameRef.current = pathname;
//         }
//     }, [pathname, onPathnameChange]);
// };