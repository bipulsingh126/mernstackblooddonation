import { Gauge } from "@mui/x-charts/Gauge";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { publicRequest } from "../requestMethods.js";
const Admin = () => {
  const [bloodGroupData, setBloodGroupData] = useState([]);

  useEffect(() => {
    const getBloodGroupStates = async () => {
      try {
        const res = await publicRequest.get("/donors/stats");
        const transfromData = res.data.map((item, index) => ({
          id: index,
          value: item.count,
          label: `Blood Group ${item._id}`,
        }));
        setBloodGroupData(transfromData);
      } catch (error) {
        console.log(error);
      }
    };
    getBloodGroupStates();
  }, []);

  return (
    <div className="flex justify-between h-[100vh]">
      <div className="flex flex-col">
        <div className="flex flex-wrap">
          <div className="bg-gray-50 h-[100] m-[30px] w-[300px] shadow-xl  ">
            <div className="h-[200px] w-[200px] ">
              <Gauge
                value={75}
                startAngle={0}
                endAngle={360}
                innerRadius="80%"
                outerRadius="100%"
              />
            </div>
            <h2 className="font-semibold text-[18px] m-[40px]  ">Prospects</h2>
          </div>
          <div className="bg-gray-50 h-[300px] m-[20px] w-[300px] shadow-xl ">
            <div className="h-[200px] w-[200px] m-[30px] border-[20px] border-red-400 border-solid rounded-full ">
              <div className=" flex items-center justify-center m-[30px] ">
                <h2 className="font-bold text-[25px] m-[40px]  ">100</h2>
              </div>
              <h2 className="font-semibold text-[18px] m-[40px]  ">Donors</h2>
            </div>
          </div>
        </div>
        <div className=" ">
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            height={300}
            margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
            grid={{ vertical: true, horizontal: true }}
          />
        </div>
      </div>

      <div className="flex flex-col bg-gray-100 m-[20px] h-[700px] w-[300px] shadow-xl ">
        <div className="flex items-center justify-center mt-[30px] cursor-pointer ">
          <FaUser />
          <span className="ml-[10px]  font-semibold">LogOut</span>
        </div>
        <div className="flex flex-col items-center justify-center   m-[10px]   ">
          <h3 className="font-bold">Recent Donors</h3>
          <ul>
            <li>1.Aditya Singh </li>
            <li>2.Riya Gupta </li>
            <li>3.Ronny Singh </li>
            <li>4.Thakur Riyansh Singh</li>
          </ul>
        </div>
        <PieChart
          series={[
            {
              data:bloodGroupData,
              innerRadius: 50,
              outerRadius: 70,
              paddingAngle: 7,
              cornerRadius: 5,
              startAngle: -90,
              endAngle: 180,
              cx: 150,
              cy: 100,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Admin;
