import {useState} from "react";
import User  from "../types/User";
import axios from "axios";

const useUser = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [user, setUser] = useState<User>();
    const selectUser = async (id: string) => {
        try {
            setLoading(true);

            const res = await axios.get(`http://localhost:3001/users/${id}`);
            setUser({
                id: res.data.id,
                userId: res.data.user_id,
                mail: res.data.mail,
                age: res.data.age,
                gender: res.data.gender,
                job: res.data.job,
                interests: res.data.interests,
            });
        }catch (ex){

        }finally {
            setLoading(false);
        }
    };

    return { loading, user, selectUser }
};

export default useUser;