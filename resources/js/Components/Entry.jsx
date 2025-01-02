import React from "react";

export default function Entry({entry}) {

    return (
        <div className="p-6 flex space-x-2" onClick={() => {console.log(entry)}}>
            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-gray-800">{entry.company}</span>
                        <small className="ml-2 text-sm text-gray-600">
                            {entry.date}
                        </small>
                        <small className="ml-2 text-sm text-gray-600">
                            {entry.supplier}
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
}
