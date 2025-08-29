import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart=({Data})=> {
    console.log(Data?.monthSales);
    const  monthNames=['january','February','March','April','May','June','July','August','September','October','November','December']
    const month = Data?.monthSales.map(item =>`${monthNames[ item.month-1]} ${item.year}`)  || [];
    const sales = Data?.monthSales.map(item => item.totalAmount) || [];

    

   
    
  const data = {
    labels:month, 
    datasets: [
      {
        label: 'monthly sales',
        data: sales,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    // Chart.js options
  };

  return <div className='w-3xl mx-auto p-4'>
     <Line data={data} options={options} />
  </div>;
}
export default Chart