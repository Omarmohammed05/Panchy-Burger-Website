export default function InstagramFeed() {
    const posts = [
        { id: 1, image: "/images/post1.png", link: "https://www.instagram.com/p/DUTPVFmjMgb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { id: 2, image: "/images/post2.png", link: "https://www.instagram.com/p/DUEdy-xjBUB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { id: 3, image: "/images/post3.png", link: "https://www.instagram.com/p/DTrgJpcDHWD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { id: 4, image: "/images/post4.png", link: "https://www.instagram.com/p/DTbvAthipPZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
    ];

    return (
        <section className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-serif font-bold text-panchy-gold mb-2">Follow Us</h2>
                <p className="text-gray-400 mb-10">@panchyrestaurant on Instagram</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {posts.map((post) => (
                        <a
                            key={post.id}
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block relative aspect-square bg-gray-900 group overflow-hidden rounded-xl border border-white/10"
                        >
                            <img
                                src={post.image}
                                alt={`Instagram Post ${post.id}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <div className="text-center">
                                    <span className="text-3xl mb-2 block">❤️</span>
                                    <span className="text-white font-bold text-sm tracking-widest uppercase">View Post</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
