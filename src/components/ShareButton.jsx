"use client"
import { usePathname } from 'next/navigation';
import React from 'react';
import { FacebookIcon, FacebookShareButton } from 'react-share';

const ShareButton = () => {
    const pathName = usePathname()
    const url = `https://akher-mamud-ideal-school.vercel.app${pathName}`
    return (
        <div>
            <FacebookShareButton title="my Result is" url={url} aria-description="recently i aml; complete y exma and succefull">
                <FacebookIcon size={32} round />
            </FacebookShareButton>
        </div>
    );
};

export default ShareButton;