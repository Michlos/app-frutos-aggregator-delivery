import Link from 'next/link'
//import React from "react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex">

            <aside className="w-64 min-h-screen bg-gray-900 text-white p-4">
                <h2 className="text-xl font-bold mb-6">
                    Frutos Admin
                </h2>

                <nav className="space-y-2">

                    <Link href="/dashboard">
                    Dashboard
                    </Link>

                    <br />

                    <Link href="/stores">
                    Lojas
                    </Link>
                    
                    <br />

                    <Link href="/deliveries">
                        Deliveries
                    </Link>

                </nav>
            </aside>

            <main className="flex-1 p-6">
                {children}
            </main>
        </div>
    )
}

