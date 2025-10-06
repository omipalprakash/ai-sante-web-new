"use client"

import { useState } from "react"
import { cn } from "../lib/utils.js"

const Dropdown = ({ label, options, value, onChange, isRequired, error, placeholder = "Select an option" }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleSelect = (option) => {
        onChange?.(option)
        setIsOpen(false)
    }

    return (
        <div className="space-y-2">
            {label && (
                <label className="text-sm font-medium text-gray-700">
                    {label}
                    {isRequired && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}
            <div className="relative">
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn(
                        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                        error && "border-red-500 focus:ring-red-500",
                    )}
                >
                    <span className={value ? "text-foreground" : "text-muted-foreground"}>{value || placeholder}</span>
                    <svg
                        className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {isOpen && (
                    <div className="absolute z-50 w-full mt-1 bg-background border border-input rounded-md shadow-lg">
                        <div className="py-1">
                            {options.map((option) => (
                                <button
                                    key={option}
                                    type="button"
                                    onClick={() => handleSelect(option)}
                                    className="w-full px-3 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
    )
}

export default Dropdown
