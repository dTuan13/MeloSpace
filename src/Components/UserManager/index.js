import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

function UserManager({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Đặt user mặc định nếu localStorage rỗng
        if (!user) {
            const defaultUser = {
                id: 1,
                name: 'Bé Mèo Nhỏ Mít Ướt',
                email: 'admin@gmail.com',
                password: '12345',
                avt: 'url...',
                des: 'Trai đẹp',
            };

            //const defaultUser = null;
            setUser(defaultUser);
            console.log('Đã set mới user');
        }
    }, []);

    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export default UserManager;
export { UserContext };
