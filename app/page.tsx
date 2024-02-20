"use client"
import React, { useEffect, useState, type FormEvent } from 'react';
import { redirect } from 'next/navigation'

export default function Home() {
  const [data, setData] = useState<{ user_name: string, pan_number: string, identity: string }>({ user_name: '', pan_number: '', identity: '' })
  useEffect(() => {
    if (!sessionStorage.getItem('user_info')) {
      redirect('/login');
    }
    else {
      setData(JSON.parse(sessionStorage.getItem('user_info') as string));
    }
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="sm:w-96 w-full bg-white shadow-lg p-4 rounded-lg flex flex-col gap-4">
        <h1 className='font-bold text-2xl'>{data.user_name}</h1>
        <h4>{data.pan_number}</h4>
        <embed src={data.identity} className='w-full h-full object-cover' />
      </div>
    </main>
  );
}
