import React, { useState, useEffect, useRef } from "react"
interface User{
    name: String;
    email: string;
}

interface UserDataProps {
    userId: string;
}

const UserData: React.FC<UserDataProps> = ({ userId }) => {
    const [user, setUser] = useState < User | null > (null)
    const [seconds, setSeconds] = useState < number > (0);
    const intervalIdRef = useRef < number | null > (null);

    const fetchUserData = async () => {
        try {
            const resp = await fetch(`https://secret.url/user/${this.props.userId}`)
            const data = resp.json()
            setUser(data);
        } catch (error) {
            console.error('Error fetching user data:', error)
        };
    }

    useEffect(() => {
        fetchUserData();
        intervalIdRef = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);
        return () => {
            if (intervalIdRef.current) {
                clearInterval(intervalIdRef.current);
            }
        };
    }, [])
    useEffect(() => {
        fetchUserData();
    }, [userId]);

    return (
        <div>
            <h1>User Data Component</h1>
            {user ? (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <p>Loading user data...</p>
            )}
            <p>Timer: {seconds} seconds</p>
        </div>
    )
}

export default UserData;