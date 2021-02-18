import React, { useEffect } from 'react';
import anime from 'animejs';

import './Diagonals.css';

const colors = ['#FF2525', '#FFB800', '#FF007A', '#0E8BFF', '#00FFA3', '#8DEF5F', '#7000FF'];

function Diagonal({ index }: { index: number }) {
    const scale = 0.8 * Math.random() + 0.2;

    useEffect(() => {
        // Need individual durations to make infinite loop
        const initialPosition = Math.random() * 733 * 2 - 733;
        const lifetime = 30000 * (1 + Math.random());
        const transitionTime = 2000;

        anime({
            targets: `.diagonal${index}`,
            translateY: [initialPosition, initialPosition + 800],
            loop: true,
            opacity: [
                { value: 0, duration: 0 },
                { value: 1, duration: transitionTime },
                { value: 0, duration: transitionTime, delay: lifetime - transitionTime },
            ],
            delay: index * 200,
            duration: lifetime,
            easing: 'linear',
        });
    }, [index]);

    return (
        <rect
            className={`diagonal diagonal${index}`}
            x="690.136"
            width="60"
            height="976"
            rx="30"
            opacity="0"
            fill={`url(#paint${Math.floor(Math.random() * colors.length)}_linear)`}
            style={{ mixBlendMode: 'screen', transform: `scale(${scale}) rotate(45deg)` }}
        />
    );
}

function Diagonals() {
    const diagonals = 15;

    return (
        <div className="background">
            <div className="Diagonals">
                <svg width="100%" height="100%" viewBox="-733 0 1466 1466" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {[...Array(diagonals).keys()].map((_, i) => (
                        <Diagonal index={i} key={`diagonal-${i}`} />
                    ))}
                    <defs>
                        {colors.map((hex, i) => (
                            <linearGradient
                                key={`paints${i}_linear`}
                                id={`paint${i}_linear`}
                                x1="720.136"
                                y1="966.313"
                                x2="720.136"
                                y2="-16.565"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor={hex} />
                                <stop offset="1" stopColor={hex} stopOpacity="0" />
                            </linearGradient>
                        ))}
                    </defs>
                </svg>
            </div>
        </div>
    );
}

export default Diagonals;
