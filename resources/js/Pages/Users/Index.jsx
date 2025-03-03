import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import User from "@/Components/User";

export default function Index( {users} ) {

    console.log(users)

    return (
        <AuthenticatedLayout>
            <Head title="Users" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                {users.map((user) => (
                <User key={user.id} user={user} />
            ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
