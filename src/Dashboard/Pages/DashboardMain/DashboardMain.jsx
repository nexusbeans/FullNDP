import React from 'react'
import Header from '../../../Components/Header/Header'
import Footer from '../../../Components/Footer/Footer'
import Dashboardslidebar from '../../ComponentDashboard/Dashboardslidebar/Dashboardslidebar'
import DashboardFooter from '../../ComponentDashboard/DashboardFooter/DashboardFooter'
import Dashboard from '../Dashboard/Dashboard'
import Blogposter from '../Blogposter/Blogposter'

function DashboardMain() {
  return (
    <>
    <Header/>
    <div className='dashboardMain fff' id='dashboarcontrol'>
        <Dashboardslidebar/>
        <Dashboard/>
        <Blogposter/>
        <DashboardFooter/>
    </div>
    <Footer/>
    </>
  )
}

export default DashboardMain