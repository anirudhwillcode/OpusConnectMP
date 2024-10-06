import Announcements from "@/components/Announcements"
import CountChart from "@/components/CountChart"
import EventCalendar from "@/components/EventCalender"
import FinanceChart from "@/components/FinanceChart"
import StudentsPlacedchart from "@/components/StudentsPlacedchart"
import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* LEFT */}
          <div className='w-full lg:w-2/3 flex flex-col gap-8'>
          {/* user cards */}
              <div className='flex gap-4 justify-between'>
                <UserCard type="student"/>
                <UserCard type="company"/>
              </div>
              {/* middle card  */}
                  <div className='flex gap-4 flex-col lg:flex-row'>
                    {/* countchart */}
                        <div className='w-full lg:w-1/3 h-[450px]'>
                        <CountChart/>
                        </div>
                    {/* studentsplacedchart*/}
                        <div className='w-full lg:w-2/3 h-[450px]'><StudentsPlacedchart/></div>
                  </div>
                  {/* bottom chart  */}
              <div className=''>

              </div>
          </div>
          {/* Right */}
              <div className="w-full  lg:w-1/3 flex flex-col gap-8 ">
                   <EventCalendar/>
                   
          </div>
    </div>
  )
}

export default AdminPage