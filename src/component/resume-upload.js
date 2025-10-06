"use client"

import { useState } from "react"
import { cn } from "../lib/utils.js"

const ResumeUpload = ({ onFileSelect, error }) => {
    const [dragActive, setDragActive] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null)

    const handleDrag = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true)
        } else if (e.type === "dragleave") {
            setDragActive(false)
        }
    }

    const handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0]
            setSelectedFile(file)
            onFileSelect?.(file)
        }
    }

    const handleChange = (e) => {
        e.preventDefault()
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]
            setSelectedFile(file)
            onFileSelect?.(file)
        }
    }

    return (
        <div className="w-full max-w-md mx-auto">
            <label className="text-sm font-medium text-gray-700 mb-2 block">
                Upload Resume <span className="text-red-500">*</span>
            </label>
            <div
                className={cn(
                    "relative border-2 border-dashed rounded-lg p-6 text-center transition-colors",
                    dragActive ? "border-[#89A884] bg-green-50" : "border-gray-300",
                    error && "border-red-500",
                )}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
            >
                <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="space-y-2">
                    <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                        </svg>
                    </div>
                    {selectedFile ? (
                        <p className="text-sm text-gray-600">Selected: {selectedFile.name}</p>
                    ) : (
                        <>
                            <p className="text-sm text-gray-600">
                                <span className="font-medium text-[#89A884]">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                        </>
                    )}
                </div>
            </div>
            {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
        </div>
    )
}

export default ResumeUpload
