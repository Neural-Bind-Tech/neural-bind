'use client';

import { useEffect } from 'react';

export default function WhatsappChat() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://static.elfsight.com/platform/platform.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            // Clean up script if needed
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            className="elfsight-app-0d996bb4-684e-402c-86c9-f0ee6929e43c"
            data-elfsight-app-lazy
        ></div>
    );
}
