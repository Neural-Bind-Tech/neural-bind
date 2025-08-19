import React from 'react';


const BlogCardSkeleton = () => (
    <div className="bg-gradient-to-br from-[#162C54]/20 to-[#0B1E3D]/30 backdrop-blur-sm border border-[#4CA1FF]/10 rounded-xl p-6 animate-pulse">
        <div className="bg-[#4CA1FF]/20 h-48 rounded-lg mb-4"></div>
        <div className="space-y-3">
            <div className="bg-[#4CA1FF]/20 h-6 rounded w-3/4"></div>
            <div className="space-y-2">
                <div className="bg-[#4CA1FF]/10 h-4 rounded w-full"></div>
                <div className="bg-[#4CA1FF]/10 h-4 rounded w-5/6"></div>
                <div className="bg-[#4CA1FF]/10 h-4 rounded w-2/3"></div>
            </div>
            <div className="flex justify-between pt-4">
                <div className="bg-[#4CA1FF]/10 h-3 rounded w-1/3"></div>
                <div className="bg-[#4CA1FF]/10 h-3 rounded w-16"></div>
            </div>
        </div>
    </div>
);

export default BlogCardSkeleton;
