/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import React from "react"
import { useState } from "react"
import { useDebounce } from 'use-debounce';
import { Search, BookOpen } from 'lucide-react';
import { IBlog } from "@/types/blog/blog";
import { useGetAllBlogQuery } from "@/redux/api/blog/blogApi";
import { IMeta } from "@/types/common/common";
import BlogCardSkeleton from "./BlogCardSkeleton";
import BlogCard from "./BlogCard";
import PaginationHelper from "../PaginationHelper";


// Empty State Component
const EmptyBlog = () => (
    <div className="text-center py-16">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-[#4CA1FF]/20 to-[#1F75FE]/20 rounded-full">
            <BookOpen className="w-8 h-8 text-[#4CA1FF]" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">No Blogs Found</h3>
        <p className="text-[#B0C4DE] mb-6">There are no blogs available at the moment. Check back later!</p>
    </div>
);

// Main Blog Page Component
const BlogPage = () => {
    // Hook
    const [limit, setLimit] = useState<number>(10)
    const [page, setPage] = useState<number>(1)
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [debouncedSearch] = useDebounce(searchTerm, 1000);

    // Modal states
    const [selectedBlog, setSelectedBlog] = useState<IBlog | null>(null)

    // RTK
    const { data, isLoading, isFetching, isError } = useGetAllBlogQuery({
        limit,
        page,
        ...(searchTerm && { searchTerm: debouncedSearch })
    })
    const isRendering = isLoading || isFetching

    // Table Data
    const blogs = data?.data as IBlog[]

    // Pagination
    const metaData = data?.meta as IMeta

    // Handler Functions
    const handlePageChange = (event: React.MouseEvent<unknown>, value: number) => {
        setPage(value)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const renderSkeletons = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: limit }).map((_, index) => (
                <BlogCardSkeleton key={index} />
            ))}
        </div>
    )

    if (isError) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[#0B1E3D] via-[#162C54] to-[#0B1E3D] flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-2">Something went wrong</h2>
                    <p className="text-[#B0C4DE]">Unable to load blogs. Please try again later.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0B1E3D] via-[#162C54] to-[#0B1E3D]">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-64 h-64 bg-[#1F75FE] rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#4CA1FF] rounded-full blur-3xl animate-pulse"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="p-3 bg-gradient-to-br from-[#4CA1FF]/20 to-[#1F75FE]/20 rounded-xl">
                            <BookOpen className="w-8 h-8 text-[#4CA1FF]" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E6F3FF] to-[#B0C4DE] py-3">
                            Blogs
                        </h1>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                        <p className="text-[#B0C4DE] text-lg">
                            Total: <span className="text-[#4CA1FF] font-semibold">{metaData?.total || 0}</span> Blogs
                        </p>

                        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                            {/* Search Field */}
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#B0C4DE]" />
                                <input
                                    type="text"
                                    placeholder="Search blogs..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10 pr-4 py-2 bg-gradient-to-r from-[#162C54]/50 to-[#0B1E3D]/50 border border-[#4CA1FF]/20 rounded-lg text-white placeholder-[#B0C4DE] focus:outline-none focus:border-[#4CA1FF]/60 focus:ring-2 focus:ring-[#4CA1FF]/20 transition-all duration-200"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                {isRendering ? (
                    renderSkeletons()
                ) : (
                    <>
                        {blogs && blogs.length > 0 ? (
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                                    {blogs.map((blog) => (
                                        <BlogCard key={blog.id} blog={blog} />
                                    ))}
                                </div>

                                <PaginationHelper
                                    handlePageChange={handlePageChange}
                                    page={page}
                                    metaData={metaData}
                                />
                            </>
                        ) : (
                            <EmptyBlog />
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default BlogPage;