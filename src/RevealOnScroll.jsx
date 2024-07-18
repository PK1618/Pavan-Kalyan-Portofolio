import React, { useEffect, useRef } from 'react';

const RevealOnScroll = ({ children, threshold = 0.2 }) => {
        const ref = useRef(null);

        useEffect(() => {
                const observer = new IntersectionObserver(
                        ([entry]) => {
                                if (entry.isIntersecting) {
                                        entry.target.classList.add('reveal');
                                        observer.unobserve(entry.target);
                                }
                        },
                        {
                                threshold: threshold
                        }
                );

                if (ref.current) {
                        observer.observe(ref.current);
                }

                return () => {
                        if (ref.current) {
                                observer.unobserve(ref.current);
                        }
                };
        }, [threshold]);

        return (
                <div ref={ref} className="reveal-wrapper">
                        {children}
                </div>
        );
};

export default RevealOnScroll;