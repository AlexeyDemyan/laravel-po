import React from "react";
import DeleteEntry from "./DeleteEntry";

export default function User({ user }) {

    return (
        <div className="p-6 flex space-x-2">
            <DeleteEntry/>
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
