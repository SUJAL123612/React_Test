
export default async function post() {
    const data = await fetch('https://fakestoreapi.com/products')
    const posts = await data.json()
    return (
        <ul>
            {posts.map((post) => (
            <div className="">
                 <div className="grid grid-cols-3 gap-0 border border-gray-400">
                    <div className="border border-gray-400 ">
                    <li className="text-[10px]">{post.image}</li>
                    </div>
                    <div className="border border-gray-400">
                        <li className="text-[10px]">{post.title}</li>
                    </div>
                    <div className="border border-gray-400">
                        <li className="text-[10px]">{post.price}</li>
                    </div>
                </div>
            </div>

            ))}
        </ul>
    )
}
