import { IBlog } from '@/types/blog/blog';
import { ArrowRight, Calendar, User } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { format } from "date-fns";

const BlogCard = ({ blog }: { blog: IBlog }) => {
    const router = useRouter()
    return (
        <div className="group relative bg-gradient-to-br from-[#162C54]/30 to-[#0B1E3D]/50 backdrop-blur-sm border border-[#4CA1FF]/20 rounded-xl p-6 hover:border-[#4CA1FF]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#4CA1FF]/10 hover:-translate-y-1">
            {/* Featured Image */}
            <div className="relative mb-4 rounded-lg overflow-hidden">
                <Image
                    src={blog?.picture || '/api/placeholder/400/200'}
                    alt={blog?.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    width={400}
                    height={200}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D]/60 via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-[#4CA1FF] transition-colors duration-300 line-clamp-2">
                    {blog?.title}
                </h3>

                <p className="text-[#B0C4DE] text-sm line-clamp-3 leading-relaxed">
                    {blog.content?.substring(0, 120) + '...'}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between pt-4 border-t border-[#4CA1FF]/10">
                    <div className="flex items-center space-x-4 text-xs text-[#B0C4DE]">
                        <div className="flex items-center space-x-1">
                            <User className="w-3 h-3" />
                            <span>{blog?.author?.Admin?.name || 'Admin'}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{format(new Date(blog.createdAt), "MMM dd, yyyy")}</span>
                        </div>
                    </div>

                    <button onClick={() => router.push(`blog/${blog.id}`)} className="text-[#4CA1FF] hover:text-white text-sm font-medium hover:underline transition-colors duration-200">
                        <ArrowRight />
                    </button>
                </div>
            </div>
        </div>
    )
};

export default BlogCard;