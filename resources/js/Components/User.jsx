import React from "react";

export default function User({user}) {
    console.log(user)

    return (
        <div>
        <h2>{user.name}</h2>
        </div>
    )
}
