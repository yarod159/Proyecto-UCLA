import "./chartCategoria.css";
import React, {  useState } from 'react';
import CategoriaVendidas from "../../utils/CategoriaVendidas";
import { userData } from '../../data'; 
import { ResponsiveContainer, PieChart, Pie, Legend } from "recharts";

const data = [
  { name: "Modems", value: 100 },
  { name: "Routers", value: 50 },
  { name: "Switch", value: 20 },
  { name: "Camara de Seguridad", value: 35 },
];

const COLORS = ["#0A4D68", "#088395", "#05BFDB", "#00FFCA"]; // Array of colors



export default function ChartCategoria({ title, dataKey = "Active Product", grid }) {
    
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index,
      }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);
        const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);
    
        return (
          <text
            x={x}
            y={y}
            fill="white"
            textAnchor="middle"
            dominantBaseline="central"
          >
            {`${(percent * 100).toFixed(1)}%`}
          </text>
        );
      };
  

  return (
    <div className="chartCategoria">
      <h3 className="chartTitle">Cantidad Vendida por Productos</h3>
      <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            cx="50%"
            cy="50%"
            fill="#8884d8"
            label={({ value }) => `${value}`}
            data={data.map((entry, index) => ({
              ...entry,
              fill: COLORS[index % COLORS.length], // Assign color based on index
            }))}
          />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
    
    </div>
  );
}
