import { Oval, useLoading } from "@agney/react-loading";
import React, { useRef } from "react";

export default function Loading() {
    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <Oval width="50" />,
    });
    const loaderEl = useRef(null);
    return (
        <div>
            <div ref={loaderEl} id="loader" className="loading-page">
                <section {...containerProps}>
                    {indicatorEl} {/* renders only while loading */}
                </section>
            </div>
        </div>
    );
}
