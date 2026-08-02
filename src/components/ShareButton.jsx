"use client";

import {
    FacebookShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
    FacebookIcon,
    LinkedinIcon,
    WhatsappIcon,
} from "react-share";

export default function ShareButton() {
    const url = window.location.href;
    const title = "Check out this post!";

    return (
        <div className="flex gap-3">
            <FacebookShareButton url={url} hashtag={`${url}`}>
                <FacebookIcon size={40} round />
            </FacebookShareButton>

            <LinkedinShareButton url={url} title={title}>
                <LinkedinIcon size={40} round />
            </LinkedinShareButton>

            <WhatsappShareButton url={url} title={title}>
                <WhatsappIcon size={40} round />
            </WhatsappShareButton>
        </div>
    );
}