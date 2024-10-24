import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BankCard from './BankCard';

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  const isUserLoggedIn = user && user.name;

  return (
    <aside className="right-sidebar fixed right-0 top-0 w-1/4 h-full bg-white shadow-lg">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            {isUserLoggedIn ? (
              <span className="text-5xl font-bold text-blue-500">
                {user.name[0]} {/* Access the first letter of the user's name */}
              </span>
            ) : (
              <span className="text-5xl font-bold text-gray-500">?</span>
            )}
          </div>
          <div className="profile-details">
            <h1 className="profile-name">
              {isUserLoggedIn ? user.name : 'Guest'}
            </h1>
            <p className="profile-email">
              {isUserLoggedIn ? user.email : 'No email available'}
            </p>
          </div>
        </div>
      </section>

      <section className="banks">
        <div className="flex w-full justify-between">
          <h2 className="header-2">My Banks</h2>
          <Link href="/" className="flex gap-2">
            <Image
              src="/icons/plus.svg"
              width={20}
              height={20}
              alt="plus"
            />
            <h2 className="text-14 font-semibold text-grey-600">Add Bank</h2>
          </Link>
        </div>

        {banks?.length > 0 && (
          <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
            <div className="relative z-10">
              <BankCard
                key={banks[0].id}
                account={banks[0]}
                userName= {isUserLoggedIn ? user.name : 'Guest'}
                showBalance={false}
              />
            </div>
            {banks[1] && (
              <div className="absolute right-0 top-8 z-0 w-[90%]">
                <BankCard
                  key={banks[1].id}
                  account={banks[1]}
                  userName= {isUserLoggedIn ? user.name : 'Guest'}
                  showBalance={false}
                />
              </div>
            )}
          </div>
        )}
      </section>
    </aside>
  );
};

export default RightSidebar;
