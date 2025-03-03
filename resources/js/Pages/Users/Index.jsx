import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import User from "@/Components/User";
import Modal from "@/Components/Modal";
import UserForModal from "@/Components/UserForModal";

export default function Index({ users }) {
    console.log(users);

    const [currentUser, setCurrentUser] = useState();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const closeModalOnEscape = (evt) => {
        if (evt.key === "Escape") {
            setIsModalVisible(false);
        }
        document.removeEventListener("keydown", closeModalOnEscape);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Users" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    <Modal show={isModalVisible}>
                        <UserForModal
                            user={users.find((elt) => elt.id === currentUser)}
                            onClose={() => {
                                setIsModalVisible(false);
                            }}
                        />
                    </Modal>
                    {users.map((user) => (
                        <User
                            key={user.id}
                            user={user}
                            editClickHanlder={() => {
                                setCurrentUser(user.id);
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
