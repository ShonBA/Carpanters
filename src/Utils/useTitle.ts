import { useEffect } from "react";

function useTitle(title: string) {
    useEffect(() => {
        document.title = `${title} | WoodWonders`;
    }, [title]);
}
export default useTitle;