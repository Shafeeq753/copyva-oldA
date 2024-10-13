import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js/auto';
import './liveChart.css'; // Make sure to create this CSS file for styling
import { Link } from 'react-router-dom';

const LiveChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const [currentRange, setCurrentRange] = useState([0, 5]); // Default to show Jan to Jun

  const data = [
    { month: 'Jan', value: 5 },
    { month: 'Feb', value: 8 },
    { month: 'Mar', value: 10, category: 'Music & content' },
    { month: 'Apr', value: 6 },
    { month: 'May', value: 7 },
    { month: 'Jun', value: 12 },
    { month: 'Jul', value: 12 },
    { month: 'Aug', value: 12 },
    { month: 'Sep', value: 12 },
    { month: 'Oct', value: 12 },
    { month: 'Nov', value: 12 },
    { month: 'Dec', value: 12 }
  ];

  const updateChart = () => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const newChartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.slice(currentRange[0], currentRange[1] + 1).map(d => d.month),
        datasets: [
          {
            label: 'Statements',
            data: data.slice(currentRange[0], currentRange[1] + 1).map(d => d.value),
            borderColor: '#000',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            fill: true,
            tension: 0.4,
            pointRadius: 0 // Remove the data point markers
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false // Remove the legend
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const point = data[currentRange[0] + context.dataIndex];
                return point.category
                  ? `${point.category}: ${point.value}`
                  : `${point.value}`;
              }
            }
          }
        },
        scales: {
          x: {
            title: {
              display: false,
              text: 'Month'
            },
            grid: {
              display: false // Disables grid lines on the x-axis
            }
          },
          y: {
            display: false // Hides the y-axis
          }
        }
      }
    });

    chartInstanceRef.current = newChartInstance;
  };

  useEffect(() => {
    updateChart();

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [currentRange]); // Update the chart when the current range changes

  const handlePrev = () => {
    setCurrentRange(prev => {
      const start = Math.max(prev[0] - 1, 0);
      const end = Math.max(prev[1] - 1, 5);
      return [start, end];
    });
  };

  const handleNext = () => {
    setCurrentRange(prev => {
      const start = Math.min(prev[0] + 1, data.length - 6);
      const end = Math.min(prev[1] + 1, data.length - 1);
      return [start, end];
    });
  };

  return (
    <div className="statements dashboard_bg">
      <div className="header">
        <h2>Statements</h2>
        <div className="filters">
          <div><select>
            <option>All</option>
            {/* Add more options as needed */}
          </select>
          <select>
            <option>2024</option>
            {/* Add more options as needed */}
          </select>
          </div>
          <Link to="#">Explore</Link>
        </div>
      </div>
      <div className='chardt_rightContent'>
      <div className="chart-container">
        <canvas ref={chartRef} />
        <div className="nav-buttons">
        <button onClick={handlePrev} disabled={currentRange[0] === 0} className='prevbtn'>{'<'}</button>
        <button onClick={handleNext} disabled={currentRange[1] >= data.length - 1} className='nextbtn'>{'>'}</button>
      </div>
      </div> 
      <div className='music_content'><div>
          <h6>Music & Content</h6>
          <b>24</b>
        </div>
        <div>
          <h6>Music</h6>
          <b>14</b>
        </div>
        <div>
          <h6>Content</h6>
          <b>10</b>
        </div>
        </div></div>
    </div>
  );
};

export default LiveChart;
