import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FormItemContainer from "@/Components/FormItemContainer";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, useForm } from "@inertiajs/react";

export default function Index() {
    const { data, setData } = useForm({
        company: "Marsovin Winery Ltd",
        date: '',
        supplier: ''
    });

    const submit = (e) => {
        e.preventDefault();

        console.log("will post data here");
        console.log(data);
    };

    return (
        <AuthenticatedLayout>
            <Head title="POForm" />
            <form
                onSubmit={submit}
                className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8"
            >
                <FormItemContainer>
                    <InputLabel htmlFor="company" value="Company" />
                    <select
                        id="company"
                        name="company"
                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        value={data.company}
                        onChange={(e) => setData('company', e.target.value)}
                    >
                        <option value="Marsovin Winery Ltd">
                            Marsovin Winery Ltd
                        </option>
                        <option value="CassarCamilleri Marketing, Sales &amp; Distribution Ltd">
                            CassarCamilleri Marketing, Sales &amp; Distribution
                            Ltd
                        </option>
                        <option value="Marsovin Viticulture Ltd">
                            Marsovin Viticulture Ltd
                        </option>
                    </select>
                </FormItemContainer>

                <FormItemContainer>
                    <InputLabel htmlFor="date" value="Date" />
                    <input
                        id="date"
                        name="date"
                        type="date"
                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        value={data.date}
                        onChange={(e) => setData('date', e.target.value)}
                    ></input>
                </FormItemContainer>

                <FormItemContainer>
                    <InputLabel htmlFor="supplier" value="Supplier" />
                    <TextInput value={data.supplier} onChange={(e) => setData('supplier', e.target.value)} />
                </FormItemContainer>

                <PrimaryButton className="ms-4" disabled={false}>
                    Submit PO
                </PrimaryButton>

            </form>
        </AuthenticatedLayout>
    );
}
