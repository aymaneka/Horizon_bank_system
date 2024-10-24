import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalenceBox'; // Fixed typo
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react';

const Home = async () => {
   const loggedIn = await getLoggedInUser();
  console.log("LoggedIn Data:", loggedIn);

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type='greeting'
            title='Welcome to Horizon Bank'
            user={loggedIn?.name || 'Guest'}
            subtext='Access and manage your account and transactions efficiently.'
          />
          <TotalBalanceBox 
            accounts={[]} 
            totalBanks={1} 
            totalCurrentBalance={1250.36} 
          />
        </header>

        <div className="recent-transactions">
          <h2>Recent Transactions</h2>
          {/* Add recent transactions content here */}
        </div>

        <RightSidebar 
          user={loggedIn} 
          transactions={[]} 
          banks={[{ currentBalance: 123.50 }, { currentBalance: 500.50 }]} 
        />
      </div>
    </section>
  );
};

export default Home;
