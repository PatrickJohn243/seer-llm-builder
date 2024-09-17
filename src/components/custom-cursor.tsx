"use client"

import { useEffect, useState } from "react"

interface CustomCursorProps {
    imageSrc: string
    width?: number
    height: number
}

const CustomCursor: React.FC<CustomCursorProps> = ({
    imageSrc,
    width = 32,
    height = 32
}) => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updateCursorPosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })
            setIsVisible(true)
        }

        window.addEventListener('mousemove', updateCursorPosition)

        return () => {
            window.removeEventListener('mousemove', updateCursorPosition)
        }
    }, [])

    return (
        isVisible && (<img
            src={imageSrc}
            alt="cursor"
            style={{
                position: 'fixed',
                top: 0,
                left: -50,
                width: `${width}px`,
                height: `${height}px`,
                pointerEvents: 'none',
                transform: `translate(${(position.x - width / 2) + 65}px , ${(position.y - height / 2) + 15}px)`,
                // transition: 'transform 0.1s ease-out',
                zIndex: 9999
            }}
        />)
    )
}

export default CustomCursor