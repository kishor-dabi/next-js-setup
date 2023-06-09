import React from "react";

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="row col-12">
                contact header
            </div>
            <React.Fragment>
                {children}
            </React.Fragment>
        </>
    );
}