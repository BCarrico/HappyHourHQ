import React from 'react';
import Header from "../components/Header";
import useAuth from '../auth/useAuth';
import HHForm from '../components/HHForm'
import Footer from '../components/Footer';

export default function AddHappyHour(){
    const { user } = useAuth();
    return (
        <div className='flex flex-col min-h-screen'>
            <Header /> 
            <div className='flex-grow'>
            <HHForm />
            </div>
            <Footer />
        </div>   
    )
}
