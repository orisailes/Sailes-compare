import React from 'react'
import BarChart from './BarChart'
import PieChart from './PieChart'
import LineChart from './LineChart'
import InfoCards from './InfoCards'
import './css/compare-cards.css'

function CompareCard() {

    let data = localStorage.getItem('products')
    data = JSON.parse(data);
    return (
        <div key={data} className="compare-cards">
            <div className="flex columns">
                <InfoCards company={data[1][1]} product={data[1][0]} />
                <div className="bars-graph">
                    <BarChart color={[`#1e212d7b`, `#1e212d`]} product={data[1]} />
                </div>
            </div>
            <div className="line-graph-wrapper">
                <div className="line-graph">
                    <LineChart products={data} />
                </div>
                <div className="flex pies-graph">
                    <PieChart color={[`#77ab598b`, `#c3bfb48b`]} product={data[1]} />
                    <PieChart color={[`#77ab598b`, `#c3bfb48b`]} product={data[0]} />
                </div>
            </div>
            <div className="flex columns ">
                <InfoCards company={data[0][1]} product={data[0][0]} />
                <div className="bars-graph">
                    <BarChart color={[`#1687a77b`, `#1687a7`]} product={data[0]} />
                </div>
            </div>
        </div>

    )

}

export default CompareCard