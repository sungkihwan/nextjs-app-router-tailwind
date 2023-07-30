"use client"

import './index.scss';

import LoadigGif from '@/public/gif/loading.gif'
import Image from "next/image";
import { useEffect, useState } from 'react';

interface IAlertProps {
    open: boolean;
}
export const Index = ({
 open
}:IAlertProps) => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(true);
    }, [setLoaded]);

    return (
        !loaded ? <></> :
            <div className={`loading ${open && 'active'}`}>
                <Image src={LoadigGif} width={500} height={500} alt={"loading"}/>
            </div>
    );
};

