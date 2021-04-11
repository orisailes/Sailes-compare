import React from 'react'
import { Pie } from 'react-chartjs-2'

function myPie({ product, color }) {


    const { totalAssets, stockExposure } = product[0]

    //check math bug

    return (
        <>
            <Pie
                data={{
                    labels: ['Stocks', 'Bonds/Currencies'],
                    datasets: [{
                        label: 'Risk & Performance',
                        data: [stockExposure, (totalAssets - stockExposure),],
                        backgroundColor: [
                           color[0],
                           color[1]
                        ],
                        borderWidth: 1
                    }]
                }}

                options={{
                    maintainAspectRatio: false,
                    responsive: false,
                    title:{
                        display:true,
                        text:product[0].name + " - פיזור "
                    }
                 }}
                height={150}
                width={280}
            />
        </>
    )
}

export default myPie;