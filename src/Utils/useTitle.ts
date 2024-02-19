import { useEffect } from "react";

function useTitle(title: string) {
    useEffect(() => {
        document.title = `${title} | WoodWonders`;
    }, []);
}
export default useTitle;