import React from 'react'
import { Bar, Doughnut, Line, PolarArea } from 'react-chartjs-2'
import { Pie } from 'react-chartjs-2'

export const PruebasScreen = () => {

    const data={
        labels:['Lala','Sabritas','Coca-Cola','Alef','Pepsi','Barcel','Otros'],
        datasets:[{
            data:[10,9,5,40,10,10,10],
            backgroundColor:['#FB8383','#FBF983','#83FBF9','#85FB83','#F1FB83','#F983FB','#FBB983']
        }]
    }
    const opciones={
        responsive:true
    }
    const options= {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Doughnut Chart'
          }
       
        }
    }
    const data2={
        labels:['Lala','Sabritas','Coca-Cola','Alef','Pepsi','Barcel','Otros'],
        datasets:[{
            data:[10,15,5,40,10,10,10],
            backgroundColor:['blue','gray','red','green','yellow','purple','orange']
        }]
    }

    const option= {
        responsive: true,
        indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
          bar: {
            borderWidth: 2,
          }
        }
        }
      
    return (
        <div className='row animate__animated animate__backInDown'>
            <div className="col-6">
                <Pie data={data} opciones={opciones}/>
            </div>
            <div className="col-6">
                <Doughnut data={data2} opciones={options}/>
            </div>
            <div className="col-6 pt-5">
                <PolarArea data={data2} opciones={options}/>
            </div>
            <div className="col-6 pt-5">
                <Bar data={data2} opciones={option}/>
            </div>
            <div className="col-6 pt-5">
                <Line data={data2} opciones={options}/>
            </div>
        </div>
    )
}
