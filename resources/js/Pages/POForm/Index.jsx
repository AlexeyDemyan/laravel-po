import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from '@/Components/PrimaryButton';
import { Head } from "@inertiajs/react";

export default function Index() {

    const submit = (e) => {
        e.preventDefault();

        console.log('will post data here')
    }

    return (
        <AuthenticatedLayout>
            <Head title="POForm" />
            <form onSubmit={submit} className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <div className="flex flex-row items-center">
                    <InputLabel htmlFor="supplier" value="Supplier"/>
                    <TextInput
                    />
                </div>
            </form>

        </AuthenticatedLayout>
    );
}
