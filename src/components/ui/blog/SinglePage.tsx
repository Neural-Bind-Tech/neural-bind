/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import React from "react"
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Calendar, User, Clock, Eye, Share2, BookOpen, Tag, Heart, MessageCircle, CheckCircle } from 'lucide-react';
import { useGetSingleBlogQuery } from "@/redux/api/blog/blogApi";
import Image from "next/image";
import { format } from "date-fns";

const formatDate = (dateString: string) => {
    return format(new Date(dateString), "MMM dd, yyyy");
};

const formatDateTime = (dateString: string) => {
    return format(new Date(dateString), "MMM dd, yyyy HH:mm");
};


// Updated IBlog interface
export interface IBlog {
    id: string,
    title: string,
    content: string,
    picture: string,
    status: string,
    authorId: string,
    createdAt: string,
    updatedAt: string,
    author: {
        Admin: {
            name?: string,
            email?: string,
        }
    }
}

// Loading Skeleton Component
const BlogDetailSkeleton = () => (
    <div className="animate-pulse">
        {/* Back Button Skeleton */}
        <div className="bg-[#4CA1FF]/20 h-10 rounded w-32 mb-8"></div>

        {/* Header Skeleton */}
        <div className="bg-gradient-to-br from-[#162C54]/30 to-[#0B1E3D]/50 backdrop-blur-sm border border-[#4CA1FF]/20 rounded-2xl p-8 mb-8">
            <div className="bg-[#4CA1FF]/20 h-12 rounded w-3/4 mb-6"></div>
            <div className="flex space-x-6 mb-8">
                <div className="bg-[#4CA1FF]/10 h-4 rounded w-24"></div>
                <div className="bg-[#4CA1FF]/10 h-4 rounded w-20"></div>
                <div className="bg-[#4CA1FF]/10 h-4 rounded w-16"></div>
            </div>
            <div className="bg-[#4CA1FF]/20 h-64 md:h-96 rounded-xl mb-6"></div>
            <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                    <div className="bg-[#4CA1FF]/10 h-8 rounded w-16"></div>
                    <div className="bg-[#4CA1FF]/10 h-8 rounded w-20"></div>
                </div>
                <div className="bg-[#4CA1FF]/10 h-8 rounded w-20"></div>
            </div>
        </div>

        {/* Content Skeleton */}
        <div className="bg-gradient-to-br from-[#162C54]/30 to-[#0B1E3D]/50 backdrop-blur-sm border border-[#4CA1FF]/20 rounded-2xl p-8">
            <div className="space-y-4">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className={`bg-[#4CA1FF]/10 h-4 rounded ${i % 3 === 2 ? 'w-3/4' : 'w-full'}`}></div>
                ))}
            </div>
        </div>
    </div>
);

// Status Badge Component
const StatusBadge = ({ status }: { status: string }) => {
    const getStatusConfig = (status: string) => {
        switch (status.toLowerCase()) {
            case 'published':
                return {
                    color: 'from-green-500/20 to-emerald-500/20 border-green-500/30 text-green-400',
                    icon: <CheckCircle className="w-3 h-3" />
                };
            case 'draft':
                return {
                    color: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30 text-yellow-400',
                    icon: <Clock className="w-3 h-3" />
                };
            case 'archived':
                return {
                    color: 'from-gray-500/20 to-slate-500/20 border-gray-500/30 text-gray-400',
                    icon: <BookOpen className="w-3 h-3" />
                };
            default:
                return {
                    color: 'from-[#4CA1FF]/20 to-[#1F75FE]/20 border-[#4CA1FF]/30 text-[#4CA1FF]',
                    icon: <BookOpen className="w-3 h-3" />
                };
        }
    };

    const config = getStatusConfig(status);

    return (
        <div className={`inline-flex items-center space-x-1 px-3 py-1 bg-gradient-to-r ${config.color} border rounded-full`}>
            {config.icon}
            <span className="text-sm font-medium capitalize">{status}</span>
        </div>
    );
};

// Author Card Component
const AuthorCard = ({ author }: { author: IBlog['author'] }) => {
    const authorName = author?.Admin?.name || 'Admin';
    const authorEmail = author?.Admin?.email;

    return (
        <div className="bg-gradient-to-br from-[#162C54]/30 to-[#0B1E3D]/50 backdrop-blur-sm border border-[#4CA1FF]/20 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <User className="w-5 h-5 text-[#4CA1FF]" />
                <span>About the Author</span>
            </h3>

            <div className="flex items-center space-x-4">
                {/* Avatar Placeholder */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#4CA1FF]/30 to-[#1F75FE]/30 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-[#4CA1FF]" />
                </div>

                <div>
                    <h4 className="text-white font-semibold text-lg">{authorName}</h4>
                    {authorEmail && (
                        <p className="text-[#B0C4DE] text-sm">{authorEmail}</p>
                    )}
                    <p className="text-[#B0C4DE] text-sm mt-1">Content Creator & Writer</p>
                </div>
            </div>
        </div>
    );
};


// Main Single Blog Component
const SingleBlog = () => {
    const params = useParams();
    const router = useRouter();
    const blogId = params.id;

    // RTK
    const { data, isLoading, isFetching, isError } = useGetSingleBlogQuery(blogId as string)
    const isRendering = isLoading || isFetching

    // Blog Data
    const blog = data?.data as IBlog

    const handleGoBack = () => {
        router.back();
    };

    const calculateReadTime = (content: string) => {
        if (!content) return 1;
        const wordsPerMinute = 200;
        const wordCount = content.split(' ').length;
        return Math.ceil(wordCount / wordsPerMinute);
    };

    // Error State
    if (isError) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[#0B1E3D] via-[#162C54] to-[#0B1E3D] flex items-center justify-center">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-64 h-64 bg-[#1F75FE] rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#4CA1FF] rounded-full blur-3xl animate-pulse"></div>
                </div>

                <div className="relative z-10 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-[#4CA1FF]/20 to-[#1F75FE]/20 rounded-full">
                        <BookOpen className="w-8 h-8 text-[#4CA1FF]" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Blog Not Found</h2>
                    <p className="text-[#B0C4DE] mb-6">The blog you&apos;re looking for doesn&apos;t exist or has been removed.</p>
                    <button
                        onClick={handleGoBack}
                        className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#1F75FE] to-[#4CA1FF] hover:from-[#4CA1FF] hover:to-[#1F75FE] text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#4CA1FF]/30"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Go Back</span>
                    </button>
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

            <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
                {isRendering ? (
                    <BlogDetailSkeleton />
                ) : blog ? (
                    <>
                        {/* Back Button */}
                        <button
                            onClick={handleGoBack}
                            className="inline-flex items-center space-x-2 mb-8 px-4 py-2 bg-gradient-to-r from-[#162C54]/50 to-[#0B1E3D]/50 border border-[#4CA1FF]/20 rounded-lg text-[#B0C4DE] hover:text-white hover:border-[#4CA1FF]/40 transition-all duration-200 group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                            <span>Back to Blogs</span>
                        </button>

                        {/* Article Header */}
                        <article className="bg-gradient-to-br from-[#162C54]/30 to-[#0B1E3D]/50 backdrop-blur-sm border border-[#4CA1FF]/20 rounded-2xl p-8 mb-8">
                            {/* Status Badge */}
                            <div className="flex justify-between items-start mb-4">
                                <StatusBadge status={blog.status} />
                                <div className="text-xs text-[#B0C4DE]">
                                    Updated: {formatDate(blog.updatedAt)}
                                </div>
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E6F3FF] to-[#B0C4DE] mb-6 leading-tight">
                                {blog.title}
                            </h1>

                            {/* Meta Information */}
                            <div className="flex flex-wrap items-center gap-6 mb-8 text-[#B0C4DE]">
                                <div className="flex items-center space-x-2">
                                    <User className="w-4 h-4" />
                                    <span>{blog.author?.Admin?.name || 'Admin'}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{formatDate(blog.createdAt)}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Clock className="w-4 h-4" />
                                    <span>{calculateReadTime(blog.content || '')} min read</span>
                                </div>
                            </div>

                            {/* Featured Image */}
                            {blog.picture && (
                                <div className="relative rounded-xl overflow-hidden h-72">
                                    <Image
                                        src={blog.picture}
                                        alt={blog.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D]/30 via-transparent to-transparent"></div>
                                </div>
                            )}

                        </article>

                        {/* Article Content */}
                        <div className="bg-gradient-to-br from-[#162C54]/30 to-[#0B1E3D]/50 backdrop-blur-sm border border-[#4CA1FF]/20 rounded-2xl p-8 mb-8">
                            <div className="prose prose-invert prose-lg max-w-none">
                                <div
                                    className="text-[#E6F3FF] leading-relaxed space-y-4"
                                    dangerouslySetInnerHTML={{ __html: blog.content || '' }}
                                />
                            </div>
                        </div>

                        {/* Author Card */}
                        <AuthorCard author={blog.author} />

                        {/* Article Meta Footer */}
                        <div className="bg-gradient-to-br from-[#162C54]/30 to-[#0B1E3D]/50 backdrop-blur-sm border border-[#4CA1FF]/20 rounded-2xl p-6">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div className="text-sm text-[#B0C4DE]">
                                    <p>Created: {formatDateTime(blog.createdAt)}</p>
                                    <p>Last Updated: {formatDateTime(blog.updatedAt)}</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <StatusBadge status={blog.status} />
                                </div>
                            </div>
                        </div>
                    </>
                ) : null}
            </div>
        </div>
    )
}

export default SingleBlog;