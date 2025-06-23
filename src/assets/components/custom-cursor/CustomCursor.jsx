import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useCursor } from './cursorContext'
import { button } from 'framer-motion/client'

function CustomCursor({ variant }) {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    })

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        })
    }, [])

    const variants = {
        default: {
            x: mousePosition.x - 15,
            y: mousePosition.y - 15,
        },
        text: {
            height: 150,
            width: 150,
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            backgroundColor: "#000",
            mixBlendMode: "difference"
        },
        button: {
            width: 70,
            height: 70,
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            backgroundColor: "#09B0F2",
            opacity: 0,
            duration: "600",
            transition: {
                duration: 0.3,
            },
        }
    }


    const [cursorVariants, setCursorVariants] = useState("");

    useEffect(() => {
        setCursorVariants(variant)
    }, [variant])

    return (
        <motion.div
            variants={variants}
            animate={cursorVariants}
            className='w-[35px] h-[35px] rounded-full border-2 border-primary fixed top-0 left-0 z-40 pointer-events-none'
        />
    )
}

export default CustomCursor
