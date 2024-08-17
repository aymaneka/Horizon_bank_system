import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalenceBox from '@/components/TotalBalenceBox'
import React from 'react'

const Home = () => {
   const loggedIn = {firstName: 'Aymane', lastName: 'Kabiri' , email: 'aymaneka@gmail.com'}
  return (
    <section className='home'>
        <div className='home-content' >
            <header className='home-header'>
                <HeaderBox 
                type='greeting'
                title='Welcome to Horizon Bank'
                user={loggedIn?.firstName || 'Guest'}
                subtext= 'access and manage your account and transactions efficiently.'

        />
        <TotalBalenceBox 
        accounts={[]}
        totalBanks={1}
        totalCurrentBalance={1250.36}


        />
            </header>

            RECENT TRANSACTIONS
        </div>

        <RightSidebar 
        user={loggedIn}
        transaactions={[]}
        banks={[{currentBalance: 123.50}, {currentBalance: 500.50}]}
        />
    </section>

  )
}

export default Home
