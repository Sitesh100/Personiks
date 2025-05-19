import React from 'react';
import Link from 'next/link';
import { blogData } from '@/utils/blog.data';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

const BlogCard = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 md:px-12 lg:px-16">
      {Object.entries(blogData).map(([blogId, blog]) => (
        <Link
          key={blogId}
          href={`/blogs/${blogId}`}
          className="group rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#D9AC47]/20 flex flex-col h-full"
        >
          {/* Image Container - Fixed Height */}
          <div className="relative h-48 w-full overflow-hidden">
            {blog.image ? (
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] flex items-center justify-center">
                <span className="text-gray-400">No Image</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Category/Tag Badge */}
            <div className="absolute top-4 left-4 bg-[#D9AC47] text-black px-3 py-1 rounded-full text-xs font-semibold">
              {blog.keywords[0]}
            </div>
          </div>

          {/* Content Container - Fixed Height */}
          <div className="p-6 bg-[#1a1a1a] border border-[#2d2d2d] border-t-0 rounded-b-xl flex-1 flex flex-col">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-gray-400">
                  {blog.publishedDate}
                </span>
                <span className="text-gray-600">•</span>
                <span className="text-xs text-gray-400">{blog.readTime}</span>
              </div>

              <h2 className="text-xl font-bold mb-2 text-white group-hover:text-[#D9AC47] transition-colors line-clamp-2">
                {blog.title}
              </h2>

              <p className="text-gray-300 line-clamp-3 mb-4 text-sm">
                {blog.subtitle}
              </p>
            </div>

            <div className="mt-auto flex items-center justify-between">
              <span className="text-sm text-[#D9AC47] font-medium flex items-center group-hover:underline">
                Read More
                <ChevronRight
                  size={16}
                  className="ml-1 text-[#D9AC47] transition-transform group-hover:translate-x-1"
                />
              </span>

              {/* Optional: Add view count or other metadata */}
              {/* <span className="text-xs text-gray-500">1.2k views</span> */}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogCard;
