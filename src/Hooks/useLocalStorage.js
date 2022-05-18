import { useEffect, useState } from "react"


const useLocalStorage = (token1) => {

  const [token, setToken] = useState(token1);
  console.log("RUPESH" + token);
  useEffect(() => {
    if (token1) {
      token = JSON.parse(localStorage.getItem('token'));
      setToken(localStorage.setItem('token', JSON.stringify(token1)));
    }
  }, [token1])



  return [token, setToken];

}

export default useLocalStorage