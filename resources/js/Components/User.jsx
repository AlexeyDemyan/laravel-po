import React from "react";
import DeleteEntry from "./DeleteEntry";
import { usePage } from "@inertiajs/react";

export default function User({ user }) {
    const currentUser = usePage().props.auth.user;

    return (
        <div className="p-6 flex space-x-2">
            {currentUser.name === "Admin" && <DeleteEntry />}
            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-gray-800">{user.name}</span>
                        <small className="ml-2 text-sm text-gray-600">
                            {user.email}
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
}
