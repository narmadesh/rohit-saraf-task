"use client"
import React, { useState, type FormEvent } from 'react';
import Input from "../components/input";
import { useRouter } from 'next/navigation';

export default function Login() {
    const { push } = useRouter();
    const [image, setImage] = useState<string | null>(null);
    const convertToBase64 = (file: File) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImage(reader.result as string);
        };

        reader.onerror = console.log;
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        sessionStorage.setItem('user_info', JSON.stringify({ user_name: formData.get('user_name'), pan_number: formData.get('pan_number'), identity: image }));
        push('/');
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="sm:w-96 w-full bg-white shadow-lg p-4 rounded-lg">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <Input id="user_name" label="User name" required />
                    <Input id="pan_number" label="Pan number" required />
                    <Input id="identity" label="Identity proof" type="file" required onChange={(e) => convertToBase64(e?.target?.files[0])} />
                    <button type="submit" className="w-full bg-gray-900 border hover:bg-gray-600 text-white p-4">Submit</button>
                </form>
            </div>
        </main>
    );
}
