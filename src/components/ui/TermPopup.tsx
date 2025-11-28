import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';

interface TermPopupProps {
    term: string;
    description: string;
}

export const TermPopup: React.FC<TermPopupProps> = ({ term, description }) => {
    const [isOpen, setIsOpen] = useState(false);
    const popupRef = useRef<HTMLDivElement>(null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <span className="relative inline-block" ref={popupRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={clsx(
                    "inline font-semibold text-blue-600 dark:text-blue-400 cursor-pointer focus:outline-none transition-colors duration-200",
                    isOpen ? "text-blue-700 dark:text-blue-300" : "hover:text-blue-700 dark:hover:text-blue-300"
                )}
            >
                {term}
            </button>

            {isOpen && (
                <div className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-64 sm:w-80 p-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20 dark:border-gray-700/50 text-sm text-gray-700 dark:text-gray-200 leading-relaxed animate-in fade-in zoom-in-95 slide-in-from-bottom-2 duration-200 ring-1 ring-black/5">
                    {/* Header */}
                    <div className="px-4 py-3 bg-gray-50/50 dark:bg-gray-900/30 rounded-t-xl border-b border-gray-100 dark:border-gray-700/50">
                        <div className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                            {term}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                        {description}
                    </div>

                    {/* Arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-[1px]">
                        <div className="w-4 h-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-r border-b border-white/20 dark:border-gray-700/50 transform rotate-45 shadow-sm"></div>
                    </div>
                </div>
            )}
        </span>
    );
};
