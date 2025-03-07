import React from "react";
import { formatDate, getOrderNumberWithYear } from "@/utils.js";

export default function GRNEntry({ entry, onClick }) {
    return (
        <div className="p-6 flex space-x-2 hover:cursor-pointer hover:ring-2 hover:ring-indigo-500 hover:rounded-md hover:ring-offset-2" onClick={onClick}>
            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-gray-800">
                            {getOrderNumberWithYear(entry)}
                        </span>
                        <small className="ml-2 text-sm text-gray-600">
                            {formatDate(entry.receivedDate)}
                        </small>
                        <small className="ml-2 text-sm text-black-600">{entry.company}</small>
                        <small className="ml-2 text-sm text-gray-600">
                            {entry.supplier}
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
}
