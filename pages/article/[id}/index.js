import Link from "next/link"
import { useRouter } from "next/router"

const article = () => {
    //const router = useRouter()
    //const {id} = router.query
  return (
    <>
    <h1>{article.title}</h1>
    <p>{article.body}</p>
    <br />
    <Link href='/'> Go Back </Link>
    </>
  )
}

export const getStaticProps = async (context) =>
 {
        const res = await fetch(`https://jsonpplaceholder.typicode.com/post/${context.params.id}`)
        const article = await res.json()

        return {
            props: {
                article,
            },
        }
    }
 

export default article