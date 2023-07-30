'use client'

import React, { useEffect, useCallback, useRef } from 'react';
import {pageview, TRACKING_ID} from '@/utils/gtag';
import Script from "next/script";
import { LoadingProvider } from "@/contexts/LoadingProvider";
import { FeedbackProvider } from "@/contexts/FeedbackProvider";
import { ThemeProvider } from "next-themes";
import {RecoilRoot} from "recoil";
import {useNavigationEvent} from "@/hooks/useNavigationEvent";

export const ClientComponent = (
    {
        children,
    }: {
        children: React.ReactNode
    }
) => {
    useNavigationEvent();

    const kakaoInit = useCallback(() => {
        if(window.Kakao.isInitialized()) {
            return;
        }
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_CLIENT_KEY);
    }, []);

    return (
        <RecoilRoot>
            <ThemeProvider attribute='class'>
                <LoadingProvider>
                    <FeedbackProvider>
                        {children}
                        <Script
                            src={'https://developers.kakao.com/sdk/js/kakao.js'}
                            onLoad={kakaoInit}
                            strategy="afterInteractive"
                        ></Script>
                        <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID_V4}`} />
                        <Script
                            id="gtag-init"
                            strategy="afterInteractive"
                            dangerouslySetInnerHTML={{
                                __html: `
                                    window.dataLayer = window.dataLayer || [];
                                    function gtag(){dataLayer.push(arguments);}
                                    gtag('js', new Date());
                                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID_V4}', {
                                      page_path: window.location.pathname,
                                    });
                                  `
                            }}
                        />
                    </FeedbackProvider>
                </LoadingProvider>
            </ThemeProvider>
        </RecoilRoot>
    )
}
