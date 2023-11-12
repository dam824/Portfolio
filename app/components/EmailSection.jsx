"use client";
import React, { useState } from 'react';
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

      const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        //envoyer la les données au serveur
        const options = {
            method: 'POST',
        //notifier au serveur que nous envoyer un Json
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSONdata,
        }

        const response = await fetch(endpoint, options);
        const resData = await response.json();
        console.log(resData);
        if(response.status === 200){
            console.log('message sent');
            setEmailSubmitted(true);
        }
      };

  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative 'id='contact'>
        <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div> 
<div className='z-10'>
            <h5 className='text-xl font-bold text-white my-2'> Me contacter</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {""}
                Vous avez une idée de projet à concrétiser ? Besoin de conseil pour organiser et développer vos concepts ? N&apos;hésitez pas à me contacter. Je serais ravi de mettre à profit mon expertise et ma créativité pour transformer vos idées en réalités. Ensemble, explorons les possibilités et donnons vie à vos projets
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href="https://github.com/dam824">
                      <Image src={GithubIcon} alt="Github Icon"></Image>
                </Link>
                <Link href="https://www.linkedin.com/in/dagorydamien/">
                     <Image src={LinkedinIcon} alt="Linkedin Icon"></Image>
                </Link>
            </div>
        </div>
 <div>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <div className='mb-6'>
                <label htmlFor="email" type="email" className='text-white block mb-2 text-sm font-medium'>
                    Votre email
                </label>
                <input 
                name="email"
                type="email" 
                id="email" 
                required
                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' 
                placeholder="votre@email.com"
                />
                </div>
                <div className='mb-6'>
                <label htmlFor="subject" className='text-white block  text-sm mb-2 font-medium'>
                    Sujet
                </label>
                <input 
                name="subject"
                type="text" 
                id="subject" 
                required
                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' 
                placeholder="Sujet de votre message"
                />
            </div>
                <div className='mb-6'>
                    <label
                    htmlFor='message'
                    className='text-white block text-sm mb-2 font-medium'
                    >
                    Message
                    </label>
                    <textarea
                    name="message"
                    id="message"
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    placeholder='Votre Message ...'
                    />
                </div>
                <button
                type="submit"
                className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5  px-5 rounded-lg w-full'
                >
                    Laisser un message
                </button>
                {
                    emailSubmitted && (
                        <p className='text-green-500 text-sm mt-2'>
                            Email envoyé
                        </p>
                    )
                }
            </form>
        </div>
        </section>
   
  )
}

export default EmailSection;