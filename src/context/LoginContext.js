import { createContext, useState } from 'react';

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
	const [isLogin, setIsLogin] = useState(localStorage.getItem('token')? true : false)
	

	return (
		<LoginContext.Provider
			value={{
				isLogin,
                setIsLogin,
			}}>
			{children}
		</LoginContext.Provider>
	);
};

export default LoginContextProvider;