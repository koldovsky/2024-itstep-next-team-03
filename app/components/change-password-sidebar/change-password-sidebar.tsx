'use client'

import React, { useState, useEffect } from 'react'

interface ChangePasswordSidebarProps {
    isOpen: boolean;
    onClose: () => void
}

interface FormData {
    currentPassword: string
    newPassword: string
    confirmPassword: string
}

interface FormErrors {
    currentPassword?: string
    newPassword?: string
    confirmPassword?: string
}

export default function ChangePasswordSidebar({ onClose }: ChangePasswordSidebarProps) {
    const [formData] = useState<FormData>({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    })
    const [errors, setErrors] = useState<FormErrors>({})

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [])

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {}

        if (!formData.currentPassword) {
            newErrors.currentPassword = 'Current password is required'
        }

        if (!formData.newPassword) {
            newErrors.newPassword = 'New password is required'
        } else if (formData.newPassword.length < 8) {
            newErrors.newPassword = 'New password must be at least 8 characters long'
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your new password'
        } else if (formData.newPassword !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (validateForm()) {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000))
                console.log('Password changed successfully', formData)
                onClose()
            } catch (error) {
                console.error('Error changing password', error)
                setErrors({ currentPassword: 'Failed to change password. Please try again.' })
            }
        }
    }

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-10 z-50 flex justify-end backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-white max-w-md h-full overflow-y-auto w-96 p-6 shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Change password</h2>
                    <button onClick={onClose} className="font-serif text-4xl">×</button>
                </div>
                <hr className="border-t border-gray-300 mb-4"/>
                <p className="text-sm mb-5">
                    Please enter your current password and
                    new password and confirm it to change the password.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                        <label className="block pb-1">Current password</label>
                        <input type="text"
                               className="w-full border border-stone-300 text-sm p-2 mb-2 focus:outline-none focus:border-[--secondary-clr] transition duration-500"/>

                        {errors.currentPassword && (
                            <p className=" text-sm text-red-600">{errors.currentPassword}</p>
                        )}
                    </div>

                    <div>
                        <label className="block pb-1">New password</label>
                        <input type="text"
                               className="w-full border border-stone-300 text-sm p-2 mb-2 focus:outline-none focus:border-[--secondary-clr] transition duration-500"/>

                        {errors.newPassword && (
                            <p className="mt-2 text-sm text-red-600">{errors.newPassword}</p>
                        )}
                    </div>

                    <div>
                        <label className="block pb-1">Confirm new password</label>
                        <input type="text"
                               className="w-full border border-stone-300 text-sm p-2 mb-2 focus:outline-none focus:border-[--secondary-clr] transition duration-500"/>

                        {errors.confirmPassword && (
                            <p className="mt-2 text-sm text-red-600">{errors.confirmPassword}</p>
                        )}
                    </div>

                    <div>
                        <button
                            className="bg-[--primary-clr] w-full py-3 px-8 font-bold hover:bg-[--secondary-clr] hover:text-white transition duration-500">
                            SEND
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}