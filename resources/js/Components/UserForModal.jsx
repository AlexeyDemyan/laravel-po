import React from "react";
import FormItemContainer from "./FormItemContainer";
import SecondaryButton from "./SecondaryButton";
import { Link } from "@inertiajs/react";
import { dangerButtonClassName } from "@/tailwind-helper";

export default function UserForModal({ user, onClose }) {
    return (
        <div>
            <div className="flex justify-end">
                <span
                    className="text-4xl text-right pr-3 hover:cursor-pointer"
                    onClick={onClose}
                >
                    &times;
                </span>
            </div>
            <FormItemContainer>
                <div className="block text-sm font-medium text-gray-700 min-w-[170px] ml-6 mr-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        ID: {user.id}
                    </h2>
                    <p className="mt-1 text-sm text-gray-600 mr-6">
                        {user.name}
                    </p>
                    <p className="mt-1 text-sm text-gray-600 mr-6">
                        {user.email}
                    </p>
                </div>
            </FormItemContainer>
            <FormItemContainer className="justify-around mb-[30px] mt-[30px]">
                <SecondaryButton>Reset email</SecondaryButton>
                <Link
                    as="button"
                    href={route("users.destroy", user.id)}
                    method="delete"
                    className={dangerButtonClassName}
                    onClick={onClose}
                >
                    DELETE USER
                </Link>
            </FormItemContainer>
        </div>
    );
}
