import React from "react";
import { useParams } from "react-router-dom";

function Github() {
    const {userId} = useParams()

    return (
        <div>Github followers: {userId}</div>
    )
}

export default Github