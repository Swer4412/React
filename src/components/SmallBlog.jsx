import React, {useState} from "react"
import {useQuery} from "react-query"

const fetcher = url => fetch(url).then(res => res.json())

export default function SmallBlog() {
    
    const {isLoading, data: posts} = useQuery("posts", () => fetcher('https://jsonplaceholder.typicode.com/todos/1')) // Mettendo ":" dopo a data, si puo scrivere un altro nome con cui riferirci all'elemento data

    const [postID, setPostId] = useState(null)

    if (isLoading) return <h1>Loading...</h1>

    if (postID !== null) { // Questo è un brutto modo per gestire i post, ma per motivi dimostrazionali uso questo
        return <h1>Active post: {postID}</h1> // Questo servirebbe per mimare un cambiare pagina e andare su quella selezionata
    }

    return <div>
        {posts.map(post => {
            return <p key={post.id}>
                <a onClick={()=> setPostId(post.id)} href="#"> {/* il migliore modo sarebbe di usare react-dom-router e indicare route diverse per ogni post*/}
                {post.id}, {post.title}
                </a>
                </p>
        })}
    </div>
}