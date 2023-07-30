export const TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID_V4

export const pageview = (url: string) => {
    if (window.gtag) {
        window.gtag('config', TRACKING_ID, {
            page_path: url
        });
    }
};

export const gEvent = ({ action, category, label, value }: { action: string, category: string, label: string, value?: string }) => {
    if (window.gtag) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value
        });
    }
};