import React, { useEffect, useState } from 'react'
import { FaUserFriends } from "react-icons/fa";
import { CiShoppingCart, CiBoxes } from "react-icons/ci";
import { LuDollarSign } from "react-icons/lu";
import Chart from './Chart'


import Grid from './Grid'
import axios from 'axios'


const Dashbord = () => {
    const [data, setData] = useState();



    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://dashbordapi.onrender.com/dashbored');

            setData(response.data);

        }
        fetchData();


    }, [])




    return (
        <div className='max-w-4xl mx-auto p-4'>
            <h1 className='text-2xl font-bold mb-4 text-gray-500'>Dashboard</h1>
            <div className='flex justify-center items-center mx0-auto mb-4 text-center'>
                  <div className=' grid grid-cols-2 md:grid-cols-4 items-center gap-4 mx-auto text-center'>
                <Grid
                    title={`Active User`}
                    value={data ? data?.ActiveUser : 'Loading...'}
                    color={'bg-blue-700'}
                    icon={<FaUserFriends />}
                />

                <Grid
                    title={`Total Products`}
                    value={data ? data?.totalProduct : 'Loading...'}
                    color={'bg-green-800'}
                    icon={<CiBoxes />}
                />

                <Grid
                    title={`Total Revenue`}
                    value={data ? data?.allRevenue[0]?.TotalRevenue : 'Loading...'}
                    color={'bg-orange-600'}
                    icon={<LuDollarSign />}
                />

                <Grid
                    title={`Conversian rate`}
                    value={'Loading...'}
                    color={'bg-orange-900'}
                    icon={<CiShoppingCart />}
                />



            </div>
            </div>
          

            <div className='mt-16 '>
                <Chart Data={data}/>
            


            </div>
            <h1 className='text-center p-1'>DevlopedBy Sagor Ahmed || {new Date().getFullYear()}</h1>

        </div>
    )
}

export default Dashbord