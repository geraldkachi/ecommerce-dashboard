// import React from 'react'
// import { Bar } from 'react-chartjs-2'
// import Box from '../components/box/Box'
// import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../components/dashboard-wrapper/DashboardWrapper'
// import SummaryBox, { SummaryBoxSpecial } from '../components/summary-box/SummaryBox'
// import { colors, data } from '../constants'
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// } from 'chart.js'
// import OverallList from '../components/overall-list/OverallList'
// import RevenueList from '../components/revenue-list/RevenueList'
// // import './scss/App.scss'


// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// )

// const Dashboard = () => {
//     return (
//         <DashboardWrapper>
//             <DashboardWrapperMain>
//                 <div className="row-on">
//                     <div className="column-8 column-md-12">
//                         <div className="row-on">
//                             {
//                                 data.summary.map((item, index) => (
//                                     <div key={`summary-${index}`} className="column-6 column-md-6 column-sm-12 mb">
//                                         <SummaryBox item={item} />
//                                     </div>
//                                 ))
//                             }
//                         </div>
//                     </div>
//                     <div className="column-4 hide-md">
//                         <SummaryBoxSpecial item={data.revenueSummary} />
//                     </div>
//                 </div>
//                 <div className="row-on">
//                     <div className="column-12">
//                         <Box>
//                             <RevenueByMonthsChart />
//                         </Box>
//                     </div>
//                 </div>
//             </DashboardWrapperMain>
//             <DashboardWrapperRight>
//                 <div className="title mb">Overall</div>
//                 <div className="mb">
//                     <OverallList />
//                 </div>
//                 <div className="title mb">Revenue by channel</div>
//                 <div className="mb">
//                     <RevenueList />
//                 </div>
//             </DashboardWrapperRight>
//         </DashboardWrapper>
//     )
// }

// export default Dashboard

// const RevenueByMonthsChart = () => {
//     const chartOptions = {
//         responsive: true,
//         maintainAspectRatio: false,
//         scales: {
//             xAxes: {
//                 grid: {
//                     display: false,
//                     drawBorder: false
//                 }
//             },
//             yAxes: {
//                 grid: {
//                     display: false,
//                     drawBorder: false
//                 }
//             }
//         },
//         plugins: {
//             legend: {
//                 display: false
//             },
//             title: {
//                 display: false
//             }
//         },
//         elements: {
//             bar: {
//                 backgroundColor: colors.orange,
//                 borderRadius: 20,
//                 borderSkipped: 'bottom'
//             }
//         }
//     }

//     const chartData = {
//         labels: data.revenueByMonths.labels,
//         datasets: [
//             {
//                 label: 'Revenue',
//                 data: data.revenueByMonths.data
//             }
//         ]
//     }
//     return (
//         <>
//             <div className="title mb">
//                 Revenue by months
//             </div>
//             <div>
//                 <Bar options={chartOptions} data={chartData} height={`300px`} />
//             </div>
//         </>
//     )
// }



// from code base


import React from 'react'
import { Bar } from 'react-chartjs-2'
import Box from '../components/box/Box'
import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../components/dashboard-wrapper/DashboardWrapper'
import SummaryBox, { SummaryBoxSpecial } from '../components/summary-box/SummaryBox'
import { colors, data } from '../constants'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import OverallList from '../components/overall-list/OverallList'
import RevenueList from '../components/revenue-list/RevenueList'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const Dashboard = () => {
    return (
        <DashboardWrapper>
            <DashboardWrapperMain>
                <div className="row-on">
                    <div className="column-8 column-md-12">
                        <div className="row-on">
                            {
                                data.summary.map((item, index) => (
                                    <div key={`summary-${index}`} className="column-6 column-md-6 column-sm-12 mb" style={{marginBottom:'20px'}}>
                                        <SummaryBox item={item} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="column-4 hide-md">
                        <SummaryBoxSpecial item={data.revenueSummary} />
                    </div>
                </div>
                <div className="row-on">
                    <div className="column-12">
                        <Box>
                            <RevenueByMonthsChart />
                        </Box>
                    </div>
                </div>
            </DashboardWrapperMain>
            <DashboardWrapperRight>
                <div className="title mb">Overall</div>
                <div className="mb">
                    <OverallList />
                </div>
                <div className="title mb">Revenue by channel</div>
                <div className="mb">
                    <RevenueList />
                </div>
            </DashboardWrapperRight>
        </DashboardWrapper>
    )
}

export default Dashboard

const RevenueByMonthsChart = () => {
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: {
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            yAxes: {
                grid: {
                    display: false,
                    drawBorder: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            }
        },
        elements: {
            bar: {
                backgroundColor: colors.orange,
                borderRadius: 20,
                borderSkipped: 'bottom'
            }
        }
    }

    const chartData = {
        labels: data.revenueByMonths.labels,
        datasets: [
            {
                label: 'Revenue',
                data: data.revenueByMonths.data
            }
        ]
    }
    return (
        <>
            <div className="title mb">
                Revenue by months
            </div>
            <div>
                <Bar options={chartOptions} data={chartData} height={`300px`} />
            </div>
        </>
    )
}