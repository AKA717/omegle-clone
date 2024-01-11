import { useSearchParams } from "react-router-dom"

export const Room = () => {

    const [params , setParams] = useSearchParams();
    const name = params.get('name');

    return <div>
        hi {name}
    </div>
}