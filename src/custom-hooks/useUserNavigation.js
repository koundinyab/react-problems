import { useState, useEffect } from "react";
export default function UseUserNavigation() {
    const [userList, setUserList] = useState([]);
    const [currentUserIndex, setCurrentUserIndex] = useState(0);
    const fetchUsers = async (url) => {
        const response = await fetch(url);
        const users = await response.json();
        const user = users.results[0];
        setUserList((prev) => {
            return [...prev, user];
        });
    };
    useEffect(() => {
        if (currentUserIndex + 1 > userList.length) {
            fetchUsers("https://randomuser.me/api/");
        }
    }, [currentUserIndex, userList]);
    const nextUser = () => {
        setCurrentUserIndex((prev) => prev + 1);
    };
    const previousUser = () => {
        setCurrentUserIndex((prev) => prev - 1);
    };
    return [
        userList[currentUserIndex],
        previousUser,
        nextUser,
        currentUserIndex,
    ];
}
