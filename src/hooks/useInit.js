import { useEffect, useState } from "react";

const useInit = (callback = null, ...args) => {
    const [mounted, setMounted] = useState(false);
    // const resetInit = () => setMounted(false);

    useEffect(() => {
        setMounted(true);
        if (typeof callback === 'function') callback(...args);
    }, [mounted, callback]);

    return mounted;
}

export default useInit;