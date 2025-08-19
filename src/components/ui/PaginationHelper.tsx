import { IMeta } from "@/types/common/common";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PaginationHelper = ({
    handlePageChange,
    page,
    metaData
}: {
    handlePageChange: (event: React.MouseEvent, value: number) => void;
    page: number;
    metaData: IMeta;
}) => {
    const totalPages = Math.ceil(metaData.total / metaData.limit);

    const getVisiblePages = () => {
        const delta = 2;
        const range = [];
        const rangeWithDots = [];

        for (let i = Math.max(2, page - delta); i <= Math.min(totalPages - 1, page + delta); i++) {
            range.push(i);
        }

        if (page - delta > 2) {
            rangeWithDots.push(1, '...');
        } else {
            rangeWithDots.push(1);
        }

        rangeWithDots.push(...range);

        if (page + delta < totalPages - 1) {
            rangeWithDots.push('...', totalPages);
        } else if (totalPages > 1) {
            rangeWithDots.push(totalPages);
        }

        return rangeWithDots;
    };

    if (totalPages <= 1) return null;

    return (
        <div className="flex items-center justify-center space-x-2 mt-8">
            <button
                onClick={(e) => handlePageChange(e, page - 1)}
                disabled={page === 1}
                className="p-2 rounded-lg bg-gradient-to-r from-[#162C54]/50 to-[#0B1E3D]/50 border border-[#4CA1FF]/20 text-[#B0C4DE] hover:text-white hover:border-[#4CA1FF]/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
                <ChevronLeft className="w-4 h-4" />
            </button>

            {getVisiblePages().map((pageNum, index) => (
                <button
                    key={index}
                    onClick={(e) => typeof pageNum === 'number' ? handlePageChange(e, pageNum) : undefined}
                    disabled={pageNum === '...'}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${pageNum === page
                            ? 'bg-gradient-to-r from-[#1F75FE] to-[#4CA1FF] text-white shadow-lg shadow-[#4CA1FF]/30'
                            : pageNum === '...'
                                ? 'text-[#B0C4DE] cursor-default'
                                : 'bg-gradient-to-r from-[#162C54]/50 to-[#0B1E3D]/50 border border-[#4CA1FF]/20 text-[#B0C4DE] hover:text-white hover:border-[#4CA1FF]/40'
                        }`}
                >
                    {pageNum}
                </button>
            ))}

            <button
                onClick={(e) => handlePageChange(e, page + 1)}
                disabled={page === totalPages}
                className="p-2 rounded-lg bg-gradient-to-r from-[#162C54]/50 to-[#0B1E3D]/50 border border-[#4CA1FF]/20 text-[#B0C4DE] hover:text-white hover:border-[#4CA1FF]/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
                <ChevronRight className="w-4 h-4" />
            </button>
        </div>
    );
};

export default PaginationHelper