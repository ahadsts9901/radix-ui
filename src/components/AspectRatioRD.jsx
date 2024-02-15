import React from 'react'
import { AspectRatio } from "@radix-ui/themes"

const AspectRatioRD = () => {
    return (
        <>
            <AspectRatio ratio={16 / 8}>
                <img
                    src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80"
                    alt="A house in a forest"
                    style={{
                        objectFit: 'cover',
                        width: '50%',
                        height: '50%',
                        borderRadius: 'var(--radius-2)',
                    }}
                />
            </AspectRatio>
        </>
    )
}

export default AspectRatioRD