"use client"
import { usePathname } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BLOG_DATA } from "../../component/blog/constants"
import Breadcrumbs from "@/component/global/breadcrumbs"

export default function BlogPost() {
    const pathname = usePathname()
    const slug = pathname?.split("/")?.pop()
    console.log("slug", slug)

    const postIndex = BLOG_DATA.findIndex((val) => val.slug === slug)
    const post = BLOG_DATA[postIndex]

    // Previous & Next Blog
    const prevPost = BLOG_DATA[postIndex - 1]
    const nextPost = BLOG_DATA[postIndex + 1]

    if (postIndex === -1) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
                    <Link
                        href="/#stories"
                        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Blog
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <>
            <Breadcrumbs />
            <div className="min-h-screen pb-12">
                <main className="max-w-[1404px] mx-auto px-4 sm:px-6 md:px-8 py-8">
                    {/* Back Button */}
                    <div className="py-8">
                        <Link
                            href="/#stories"
                            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Blog
                        </Link>
                    </div>

                    {/* Blog Content */}
                    <article className="bg-white rounded-lg p-6 shadow-md">
                        {/* Title */}
                        <h1 className="text-[1.8rem] font-bold text-[#25355b] uppercase mb-2">{post.title}</h1>

                        {/* Author + Date */}
                        <p className="text-black mb-[10px] md:mb-[21px] lg:mb-[30px]">
                            {post.name} <span className="mx-2">•</span> {post.date}
                        </p>

                        {/* Image */}
                        <div className="mb-8">
                            <Image
                                src={post.image || "/placeholder.svg"}
                                alt={post.title}
                                width={1340}
                                height={600}
                                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-lg"
                            />
                        </div>
                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 my-4">
                                {post.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-sm rounded-full bg-[#f0f4ff] text-[#2A5286] border border-[#2A5286]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                        {/* Excerpt */}
                        <p className="text-gray-600 mb-6">{post.excerpt}</p>

                        {/* Full Content */}
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-6">{post.content}</div>
                    </article>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between items-center mt-8">
                        {prevPost ? (
                            <Link
                                href={`/blog/${prevPost.slug}`}
                                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-cocoa hover:bg-gray-100 transition"
                            >
                                ← Previous
                            </Link>
                        ) : (
                            <div></div>
                        )}

                        {nextPost ? (
                            <Link
                                href={`/blog/${nextPost.slug}`}
                                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-cocoa hover:bg-gray-100 transition"
                            >
                                Next →
                            </Link>
                        ) : (
                            <div></div>
                        )}
                    </div>
                </main>
            </div>
        </>
    )
}
