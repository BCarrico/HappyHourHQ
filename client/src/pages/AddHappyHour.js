import React from 'react';
import Header from "../components/Header";
import useAuth from '../auth/useAuth';
import HHForm2 from '../components/HHForm2'
import Footer from '../components/Footer';

export default function AddHappyHour(){
    const { user } = useAuth();
    return (
        <div className='flex flex-col min-h-screen bg-gray-800 sm:bg-gray-300 sm:divide-y sm:divide-gray-500'>
            <Header /> 
            <div className='flex-grow'>
            <HHForm2 />
            </div>
            <Footer />
        </div>   
    )
}

