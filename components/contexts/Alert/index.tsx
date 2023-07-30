"use client"

import './index.scss';
import { useEffect, useState } from 'react';

interface IAlertProps {
    open: boolean;
    title: string;
    content?: string;
    onClose: () => void;
}
export const Index = ({
  open,
  title,
  content = '',
  onClose
}:IAlertProps) => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(true);
    }, [setLoaded]);

    return (
        !loaded ? <></> :
            <div className={`g-alert ${open && 'active'}`}>

                <div className="alert-block">
                    <h5 className="alert-title">
                        {title.split('').map(value => {
                            if (value === '\n') {
                                return <br key={value}/>;
                            } else {
                                return value;
                            }
                        })}
                    </h5>

                    {!!content && (
                        <p className="alert-content">
                            {content}
                        </p>
                    )}

                    <div className="divider" />

                    <div className="confirm" onClick={onClose}>
                        확인
                    </div>
                </div>
            </div>
        // !loaded ? <></> :
        //     <div className={`fixed w-screen h-screen top-0 left-0 z-50 bg-black bg-opacity-20 ${open ? 'block' : 'hidden'}`}>
        //         <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2
        //                         -translate-y-1/2 bg-white w-80 px-6 py-5 rounded-2xl text-center
        //                          flex flex-col items-center justify-around`}>
        //             <h5 className="px-1 py-2 text-lg font-bold leading-normal text-gray-800">
        //                 {title.split('').map(value => {
        //                     if (value === '\n') {
        //                         return <br key={value}/>;
        //                     } else {
        //                         return value;
        //                     }
        //                 })}
        //             </h5>
        //
        //             {!!content && (
        //                 <p className="mt-4 text-gray-600 text-base leading-7">
        //                     {content}
        //                 </p>
        //             )}
        //
        //             <div className="divider h-px bg-gray-100 mt-7 mb-5" />
        //
        //             <div className="confirm rounded-lg text-lg font-bold text-white bg-blue-500 w-4/5 py-3 cursor-pointer" onClick={onClose}>
        //                 확인
        //             </div>
        //         </div>
        //     </div>
    );
};


