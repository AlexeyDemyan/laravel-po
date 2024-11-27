import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Entry from "@/Components/Entry";
import Modal from "@/Components/Modal";
import EntryForModal from "@/Components/EntryForModal";
import { Head } from "@inertiajs/react";

export default function Index({ entries }) {
    console.log(entries);

    return (
        <AuthenticatedLayout>
            <Head title="POList" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    <Modal show={true}>
                        <EntryForModal entry={entries[11]} />
                    </Modal>
                    {entries.map((entry) => (
                        <Entry key={entry.id} entry={entry} />
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
