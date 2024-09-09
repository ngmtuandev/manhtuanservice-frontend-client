import { useParams } from "react-router-dom";

function useGetParams() {
    let { id } = useParams();
    return id;
}

export default useGetParams;
