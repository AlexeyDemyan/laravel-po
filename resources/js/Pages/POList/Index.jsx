import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Entry from "@/Components/Entry";
import { Head } from "@inertiajs/react";

export default function Index({ entries }) {

    console.log(entries);

    return (
        <AuthenticatedLayout>
            <Head title="POList" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    {entries.map((entry) => (
                        <Entry key={entry.id} entry={entry}/>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
