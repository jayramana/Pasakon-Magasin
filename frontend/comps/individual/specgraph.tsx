import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { Spec } from "../../types/types";

const Specs = ({ product }: { product: Spec }) => {
  const data = [
    { Name: "Gpu_score", P: product.gpuscore, fullMark: 100 },
    { Name: "Cpu_Score", P: product.cpuscore, fullMark: 100 },
    { Name: "Ram_Score", P: Number(product.ramscore) > 0 ? Number(product.ramscore) * 10 : Number(product.ramscore)+1 * 10, fullMark: 100 },
    { Name: "Storage_Score", P: product.storagescore, fullMark: 100 },
  ];

  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="Name" />
          <PolarRadiusAxis domain={[0, 100]} />
          <Radar
            name="Performance"
            dataKey="P"  
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Specs;
