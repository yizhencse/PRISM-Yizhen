'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface VisitorsMapProps {
    title?: string;
    scriptSrc: string;
    imageHref: string;
    imageSrc: string;
}

export default function VisitorsMap({ title = 'Global Visitors Map', scriptSrc, imageHref, imageSrc }: VisitorsMapProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [showFallback, setShowFallback] = useState(true);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        container.innerHTML = '';
        setShowFallback(true);

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.id = 'mapmyvisitors';
        script.src = scriptSrc;
        script.async = true;
        script.onload = () => setShowFallback(false);
        script.onerror = () => setShowFallback(true);

        container.appendChild(script);

        return () => {
            container.innerHTML = '';
        };
    }, [scriptSrc]);

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
        >
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">{title}</h2>
            <div className="mx-auto w-full max-w-sm overflow-hidden [&_canvas]:max-w-full [&_iframe]:max-w-full [&_img]:h-auto [&_img]:max-w-full">
                <div ref={containerRef} />
                {showFallback && (
                    <a href={imageHref} title="Visit tracker" target="_blank" rel="noopener noreferrer">
                        <img src={imageSrc} alt="Global visitors map" className="h-auto max-w-full" />
                    </a>
                )}
            </div>
        </motion.section>
    );
}
