import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import UserInfo from "./UserInfo";
import { useLoaderData } from "react-router-dom";
import showUser from "./UserInfo";

function ShowInfo(usr) {

    const show = usr;

    return (
        <>
            <h1>ok</h1>
            {document.write(show)}
        </>
    );
}

export default ShowInfo;