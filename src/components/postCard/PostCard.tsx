import { PropsType } from "../../types/types"


export default function PostCard(props: PropsType){
    return (
        <>
            <div>
                <h3>{props.title}</h3>
                <p>{props.body}</p>
            </div>
        </>
    )
}