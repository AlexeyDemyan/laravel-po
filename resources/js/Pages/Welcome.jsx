import { Head, Link } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <nav className="-mx-3 flex flex-1 justify-end">
                                <div className="py-12">
                                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                                            <div className="p-6 text-gray-900">
                                                {auth.user ? (
                                                    <Link
                                                        href={route(
                                                            "dashboard"
                                                        )}
                                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/370 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                                    >
                                                        Dashboard
                                                    </Link>
                                                ) : (
                                                    <>
                                                        <Link
                                                            href={route(
                                                                "login"
                                                            )}
                                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/370 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                                        >
                                                            Log in
                                                        </Link>
                                                        {/* <Link
                                                            href={route(
                                                                "register"
                                                            )}
                                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/370 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                                        >
                                                            Register
                                                        </Link> */}
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </header>

                        <main className="mt-6"></main>

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70"></footer>
                    </div>
                </div>
            </div>
        </>
    );
}
