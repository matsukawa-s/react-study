import {useEffect, useState} from "react";
import User  from "../types/User";
import axios from "axios";

const useFetchUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const fetchUsers = async () => {
        try {
            const res = await axios.get("http://localhost:3001/users");
            setUsers(res.data.map((x: any) => {
                return {
                    id: x.id,
                    userId: x.user_id,
                    mail: x.mail,
                    age: x.age,
                    gender: x.gender,
                    job: x.job,
                    interests: x.interests,
                }
            }));
        }catch (ex) {

        }
    };

    return { users, fetchUsers }
};

export default useFetchUsers;