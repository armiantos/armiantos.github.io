import React, { useEffect } from 'react';
import anime from 'animejs';

import './Spirals.css';

const colors = ['#FF2525', '#FFB800', '#FF007A', '#0E8BFF', '#00FFA3', '#8DEF5F', '#7000FF'];

function Spiral({ index }: { index: number }) {
    const scale = 0.8 * Math.random() + 0.2;
    const initialRotation = Math.random() * 360;

    useEffect(() => {
        anime({
            targets: `.spiral${index}`,
            rotateZ: '1turn',
            loop: true,
            duration: 30000 * (1 + Math.random()),
            easing: 'linear',
        });
    }, [index]);

    return (
        <path
            className={`spiral${index}`}
            d="M621.3 0C639.36 0 654.085 14.6496 653.183 32.6867C649.444 107.404 632.908 181.01 604.217 250.275C571.351 329.622 523.177 401.718 462.448 462.448C401.718 523.177 329.622 571.351 250.275 604.217C181.01 632.908 107.404 649.444 32.6867 653.183C14.6495 654.085 -2.79473e-05 639.36 -2.71579e-05 621.3V621.3C-2.63685e-05 603.24 14.6519 588.695 32.6838 587.692C98.8077 584.015 163.918 569.199 225.247 543.795C296.66 514.216 361.546 470.86 416.203 416.203C470.86 361.546 514.216 296.66 543.795 225.247C569.199 163.918 584.015 98.8077 587.692 32.6838C588.695 14.6519 603.24 0 621.3 0V0Z"
            fill={`url(#paint${Math.floor(Math.random() * colors.length)}_linear)`}
            style={{ mixBlendMode: 'screen', transform: `scale(${scale}) rotate(${initialRotation}deg)` }}
        />
    );
}

function Spirals() {
    const spirals = 20;

    return (
        <div className="background">
            <div className="Spirals">
                <svg width="100%" height="100%" viewBox="-654 -654 1308 1308" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {[...Array(spirals).keys()].map((_, i) => (
                        <Spiral index={i} />
                    ))}
                    <defs>
                        {colors.map((hex, i) => (
                            <linearGradient
                                id={`paint${i}_linear`}
                                x1="-1.17961e-05"
                                y1="621.5"
                                x2="620"
                                y2="-2.575e-05"
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

export default Spirals;
