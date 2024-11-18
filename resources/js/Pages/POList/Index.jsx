import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index() {
    return (
        <AuthenticatedLayout>
            <Head title="POList" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    PO List will be here
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
