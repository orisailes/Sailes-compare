import React from 'react'
import { Bar } from 'react-chartjs-2'

function myBar({ product, color }) {

    return (
        <>
            <Bar
                data={{
                    labels: ['Alpha', 'Sharpe ratio', 'Standard deviation'],
                    datasets: [{
                        label: 'Risk & Performance',
                        data: [product[0].alpha, product[0].sharpeRatio, product[0].standardDeviation,],
                        backgroundColor: [
                            color[0],
                            color[0],
                            color[0]
                        ],
                        borderWidth: 1,
                        hoverBackgroundColor: [
                            color[1]
                            , color[1]
                            , color[1]
                        ]
                    }]
                }}

                options={{
                    maintainAspectRatio: false,
                    responsive: false,
                    legend: {
                        labels: {
                            boxWidth: 0
                        }
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }}
                height={150}
                width={window.innerWidth/3.8}
            />
        </>
    )
}

export default myBar;