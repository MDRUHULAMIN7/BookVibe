

import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getStoredreadBooks } from '../../../Utility/localstorage';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];




const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const Pagestoread = () => {

    const data = [
        {
          name: 'ruhul',
          uv: 400,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'ruhul',
          uv: 400,
          pv: 2400,
          amt: 2400,
        },
      
      ];

    const [data2,setdata]=useState([]);
    const[chartdata,setChartdata]=useState([]);
console.log(chartdata);
useEffect(()=>{
        fetch('Books.json')
        .then(res=> res.json())
        .then(data=>setdata(data))
    },
    []);

    useEffect(()=>{
    const storedbookid=getStoredreadBooks();
    if(data2.length > 0){
        const bookread = [];
        for(const id of storedbookid){
            const book =data2.find(book=> book.bookId === id);
            if(book){
                bookread.push(book);
              
            }
          
           
        }
       
        setChartdata(bookread)
    }

    },[data2])

const bardata = chartdata.map(item=>{
    const i={
        name:item.bookName,
        uv:item.totalPages
    }
    return i
})


    return (
       <div className='my-10'>
         <BarChart
     className='w-screen'
        width={500}
        height={300}
        data={bardata}
        margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
       </div>
    
    );
};

export default Pagestoread;