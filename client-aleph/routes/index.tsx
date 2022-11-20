import { Head, Link } from "aleph/react";
import {
Bar,
BarChart,
CartesianGrid,
Tooltip,
XAxis,
YAxis
} from "https://esm.sh/recharts";
import React, { useEffect } from 'react'

const externalLinks = [
  ["Get Started", "https://alephjs.org/docs/get-started"],
  ["Docs", "https://alephjs.org/docs"],
  ["Github", "https://github.com/alephjs/aleph.js"],
];

export default function Index() {
const [week, setWeek] = React.useState(1)


  const data = [
    { name: 'food', uv: -2000, pv: -2013, amt: -4500, bmk: -4301, time: 1, uvError: [100, 50], pvError: [110, 20] },
    { name: 'cosmetic', uv: 3300, pv: 2000, amt: 6500, bmk: 2000, time: 2, uvError: 120, pvError: 50 },
    { name: 'storage', uv: 3200, pv: 1398, amt: 5000, bmk: 3000, time: 3, uvError: [120, 80], pvError: [200, 100] },
    { name: 'digital', uv: 2800, pv: 2800, amt: 4000, bmk: 1500, time: 4, uvError: 100, pvError: 30 },
  ];

  const fetchData = (week: number) => {
    fetch(`http://localhost:8000/results/teamLeaderboard/${week}`).then(async (response) => {
      console.log(`WE IN HERE`, await response.text())
    }) .catch((error) => {
      console.log(`Error occurred fetching data`, error)
    })
  }

useEffect(() => {
  if(week !== undefined)
    fetchData(week)
}, [week])

  return (
    <div
      className="w-screen flex flex-col items-center justify-center"
      style={{
        height: "calc(100vh - 2 * 80px)",
      }}
    >
      <Head>
        <title>Aleph.js</title>
        <meta name="description" content="The Fullstack Framework in Deno." />
      </Head>
      <>
      <BarChart id='1' width={400} height={400} data={data.slice(0, 1)} maxBarSize={10} barSize={10}>
            <XAxis padding={{ left: 20, right: 100 }} type="number" dataKey="time" />
            <YAxis type="number" />
            <CartesianGrid horizontal={false} />
            <Tooltip />
            <Bar dataKey="uv" fill="#ff7300" maxBarSize={15} isAnimationActive={false} />
            <Bar dataKey="pv" fill="#387908" />
          </BarChart>
      </>
     
    </div>
  );
}
