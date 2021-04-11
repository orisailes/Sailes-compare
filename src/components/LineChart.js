import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import axios from 'axios'
import UseAnimations from "react-useanimations";
import loading from 'react-useanimations/lib/loading2'

function MyLine({ products }) {

    let annualMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [months, setMonths] = useState(annualMonths)
    let thisMonth = new Date().getMonth() - 1;
    let thisYear = new Date().getFullYear();
    let thisYearMonths = months.slice(0, thisMonth);

    let LastYearRelevantData = [
        { firstProduct: [] },
        { secondProduct: [] }
    ];
    let ThisYearRelevantData = [
        { firstProduct: [] },
        { secondProduct: [] }
    ];

    const [isDataLoaded, setIsDataLoaded] = useState(false)
    const [product1Data, setProduct1Data] = useState([])
    const [product2Data, setProduct2Data] = useState([])
    useEffect(() => {
        let temp = months;
        temp = temp
            .slice(thisMonth - 1)
            .map(month => month += ` ${thisYear - 1}`)
        temp.push(thisYearMonths.map(month => month += ` ${thisYear}`));
        temp = temp.flat();
        setMonths(temp)
        const lastYearDataFetch = async () => {
            //! geting data from last year.

            let loopsNumber = products[0][1] === products[1][1];
            loopsNumber ? loopsNumber = 1 : loopsNumber = 2;
            const terms = [products[0][1], products[1][1]];
            for (let i = 0; i < loopsNumber; i++) {
                let rawData = [];
                let isNextPage = true;
                let page = 0;

                while (isNextPage) {
                    let data = await axios.get(
                        `https://data.gov.il/api/3/action/datastore_search?q=${terms[i]}&resource_id=469633a2-5538-4f2c-a0ed-6ed5bc2f74c6&offset=${page}00`
                    );
                    data = data.data.result.records;
                    rawData.push(data);
                    if (data.length < 100) {
                        isNextPage = false;
                    }
                    page++
                }
                //* flatting all the data into one massive array
                rawData = rawData.flat();
                //* filtering and mapping the raw data
                if (loopsNumber === 1) {
                    LastYearRelevantData = [
                        {
                            firstProduct: rawData
                                .filter((item, index) => {
                                    return (item.FUND_ID === products[0][0].id)
                                })
                                .map((matchItem) => {
                                    return (
                                        {
                                            id: matchItem.FUND_ID,
                                            manageBy: matchItem.MANAGING_CORPORATION,
                                            month: whatMonth(matchItem.REPORT_PERIOD.slice(4)),
                                            monthoriginal: matchItem.REPORT_PERIOD.slice(4),
                                            profit: matchItem.MONTHLY_YIELD,
                                            name: matchItem.FUND_NAME
                                        }
                                    )
                                })

                        },
                        {
                            secondProduct: rawData
                                .filter((item) => {
                                    return item.FUND_ID === products[1][0].id
                                })
                                .map((matchItem) => {
                                    return (
                                        {
                                            id: matchItem.FUND_ID,
                                            manageBy: matchItem.MANAGING_CORPORATION,
                                            month: whatMonth(matchItem.REPORT_PERIOD.slice(4)),
                                            monthoriginal: matchItem.REPORT_PERIOD.slice(4),
                                            profit: matchItem.MONTHLY_YIELD,
                                            name: matchItem.FUND_NAME
                                        }
                                    )
                                })
                        }];
                } else {
                    let placeToInsert = ``;
                    i === 0 ? placeToInsert = `firstProduct` : placeToInsert = `secondProduct`;
                    let temp = rawData
                        .filter((item, index) => {
                            return (item.FUND_ID === products[i][0].id)
                        })
                        .map((matchItem) => {
                            return (
                                {
                                    id: matchItem.FUND_ID,
                                    manageBy: matchItem.MANAGING_CORPORATION,
                                    month: whatMonth(matchItem.REPORT_PERIOD.slice(4)),
                                    monthoriginal: matchItem.REPORT_PERIOD.slice(4),
                                    profit: matchItem.MONTHLY_YIELD,
                                    name: matchItem.FUND_NAME
                                }
                            )
                        })
                    LastYearRelevantData[i] = { [placeToInsert]: temp }
                }
            }
        }

        const thisYearDataFetch = async () => {

            let loopsNumber = products[0][1] === products[1][1];
            loopsNumber ? loopsNumber = 1 : loopsNumber = 2;
            const terms = [products[0][1], products[1][1]];
            for (let i = 0; i < loopsNumber; i++) {
                let rawData = [];
                let isNextPage = true;
                let page = 0;

                while (isNextPage) {
                    let data = await axios.get(
                        `https://data.gov.il/api/3/action/datastore_search?q=${terms[i]}&resource_id=a30dcbea-a1d2-482c-ae29-8f781f5025fb&offset=${page}00`
                    );
                    data = data.data.result.records;
                    rawData.push(data);
                    if (data.length < 100) {
                        isNextPage = false;
                    }
                    page++
                }
                //* flatting all the data into one massive array
                rawData = rawData.flat();
                //* filtering and mapping the raw data
                if (loopsNumber === 1) {
                    ThisYearRelevantData = [
                        {
                            firstProduct: rawData
                                .filter((item, index) => {
                                    return (item.FUND_ID === products[0][0].id)
                                })
                                .map((matchItem) => {
                                    return (
                                        {
                                            id: matchItem.FUND_ID,
                                            manageBy: matchItem.MANAGING_CORPORATION,
                                            month: whatMonth(matchItem.REPORT_PERIOD.slice(4)),
                                            monthoriginal: matchItem.REPORT_PERIOD.slice(4),
                                            profit: matchItem.MONTHLY_YIELD,
                                            name: matchItem.FUND_NAME
                                        }
                                    )
                                })

                        },
                        {
                            secondProduct: rawData
                                .filter((item) => {
                                    return item.FUND_ID === products[1][0].id
                                })
                                .map((matchItem) => {
                                    return (
                                        {
                                            id: matchItem.FUND_ID,
                                            manageBy: matchItem.MANAGING_CORPORATION,
                                            month: whatMonth(matchItem.REPORT_PERIOD.slice(4)),
                                            monthoriginal: matchItem.REPORT_PERIOD.slice(4),
                                            profit: matchItem.MONTHLY_YIELD,
                                            name: matchItem.FUND_NAME
                                        }
                                    )
                                })
                        }];
                } else {
                    let placeToInsert = ``;
                    i === 0 ? placeToInsert = `firstProduct` : placeToInsert = `secondProduct`;
                    let temp = rawData
                        .filter((item, index) => {
                            return (item.FUND_ID === products[i][0].id)
                        })
                        .map((matchItem) => {
                            return (
                                {
                                    id: matchItem.FUND_ID,
                                    manageBy: matchItem.MANAGING_CORPORATION,
                                    month: whatMonth(matchItem.REPORT_PERIOD.slice(4)),
                                    monthoriginal: matchItem.REPORT_PERIOD.slice(4),
                                    profit: matchItem.MONTHLY_YIELD,
                                    name: matchItem.FUND_NAME
                                }
                            )
                        })
                    ThisYearRelevantData[i] = { [placeToInsert]: temp }
                }
            }
        }

        const arrangeProductsData = async () => {
            await lastYearDataFetch();
            await thisYearDataFetch();
            for (let i = 0; i < 2; i++) {
                let currentProduct = ``;
                i === 0 ? currentProduct = `firstProduct` : currentProduct = `secondProduct`;
                let onlyProfitsOfThisYear = ThisYearRelevantData[i][currentProduct].map((item) => {
                    return item.profit
                })
                let onlyProfitsOfLastYear = LastYearRelevantData[i][currentProduct].map((item) => {
                    return item.profit
                })
                onlyProfitsOfLastYear = onlyProfitsOfLastYear.slice(thisMonth - 1)

                let temp = [onlyProfitsOfLastYear, onlyProfitsOfThisYear].flat()

                if (i === 0) {
                    setProduct1Data(temp)
                } else {
                    setProduct2Data(temp)
                }
            }
            setIsDataLoaded(true);
        }


        arrangeProductsData()

    }, [])


    const whatMonth = (num) => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        if (num < 10) {
            num = num.slice(1)
        }
        return months[num - 1];
    }


    return (
        <>
            {isDataLoaded ?
                <Line
                    data={{
                        labels: months,
                        datasets: [
                            {
                                label: products[0][0].name,
                                data: product1Data,
                                lineTension: 0,
                                borderColor: [
                                    "#1687a79b",
                                ],
                                fill: false,

                            },
                            {
                                label: products[1][0].name,
                                data: product2Data,
                                lineTension: 0.1,
                                borderColor: [
                                    "#1e212d9b",
                                ],
                                fill: false,
                            },
                            
                        ]
                    }}

                    options={{
                        maintainAspectRatio: false,
                        responsive: false,
                        title:{
                            text:`Past 12 month profits`,
                            display:true
                        }
                    }}
                    
                    height={350}
                    width={window.innerWidth/2.5}

                />
                :
                <div className="flex columns">
                    <UseAnimations size={150} speed={0.5} animation={loading} />
                </div>
            }
        </>
    )
}

export default MyLine;