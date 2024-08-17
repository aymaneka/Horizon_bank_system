import React from 'react'
import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart'

const TotalBalenceBox = ({ accounts = [], totalBanks, totalCurrentBalance }: TotlaBalanceBoxProps) => {
  return (
    <section className="w-[767px] h-[168px] p-0 px-8 flex gap-6 opacity-[1]"> {/* Opacity is set to 1 instead of 0 */}
      <div className="total-balence-chart flex-1">
        <DoughnutChart accounts={accounts} />
      </div>

      <div className="flex flex-col gap-6 justify-center flex-1">
        <h2 className="header-2">
          Bank Accounts: {totalBanks}
        </h2>
        <div className="flex flex-col gap-2">
          <p className="total-balence-label">
            Total Current Balance
          </p>
          <div className="total-balence-amount flex-center gap-2">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TotalBalenceBox
