import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Entry from "@/Components/Entry";
import Modal from "@/Components/Modal";
import EntryForModal from "@/Components/EntryForModal";
import { Head, usePage } from "@inertiajs/react";
import PreviewPrint from "@/Components/PreviewPrint";
import { useSelector, useDispatch } from "react-redux";

export default function Index({ entries }) {
    const currentUser = usePage().props.auth.user;
    const recentEntry = useSelector((state) => state.recentEntry.value);
    console.log(recentEntry);

    let entriesFiltered;

    if (currentUser.name === "Admin") {
        entriesFiltered = entries;
    } else {
        entriesFiltered = entries.filter(
            (entry) => entry.userId === currentUser.id
        );
    }

    const [currentEntry, setCurrentEntry] = useState();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isPrintVisible, setIsPrintVisible] = useState(true);

    const closeModalOnEscape = (evt) => {
        if (evt.key === "Escape") {
            setIsModalVisible(false);
        }
        document.removeEventListener("keydown", closeModalOnEscape);
        setIsPrintVisible(true);
    };

    return (
        <AuthenticatedLayout>
            <Head title="POList" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    <Modal show={isModalVisible}>
                        {isPrintVisible ? (
                            <EntryForModal
                                entry={entriesFiltered.find(
                                    (elt) => elt.orderNumber === currentEntry
                                )}
                                onClose={() => {
                                    setIsModalVisible(false);
                                    setIsPrintVisible(true);
                                }}
                                onPrint={() => {
                                    setIsPrintVisible(false);
                                }}
                            />
                        ) : (
                            <PreviewPrint
                                entry={entriesFiltered.find(
                                    (elt) => elt.orderNumber === currentEntry
                                )}
                                onCancel={() => {
                                    setIsPrintVisible(true);
                                }}
                            />
                        )}
                    </Modal>
                    {entriesFiltered.map((entry) => (
                        <Entry
                            className={recentEntry === entry.orderNumber && " bg-red-300"}
                            key={entry.orderNumber}
                            entry={entry}
                            onClick={() => {
                                setCurrentEntry(entry.orderNumber);
                                setIsModalVisible(true);
                                document.addEventListener(
                                    "keydown",
                                    closeModalOnEscape
                                );
                            }}
                        />
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
