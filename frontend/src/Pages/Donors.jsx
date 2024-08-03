import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import {FaTrash} from 'react-icons/fa';
const Donors = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "address", headerName: "Address", width: 150 },
    { field: "phone", headerName: "Phone", width: 150 },
    { field: "bloodType", headerName: "BloodType", width: 130 },
    { field: "age", headerName: "Age", width: 150 },
    { field: "gender", headerName: "Gender", width: 150 },
    {
      field: "edit",
      headerName: "Edit",
      width: 150,
      renderCell: () => {
        return (
          <>
            <Link to={`/donor/123`}>
              <button className="bg-gray-400 text-white cursor-pointer w-[78px] ">
                Edit
              </button>
            </Link>
          </>
        );
      },
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: () => {
        return (
          <>
            <button>
              <FaTrash className="text-red-500 cursor-pointer m-2" />
            </button>
          </>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      name: "Suraj",
      address: "Kanpur",
      phone: "01717171717",
      bloodType: "A+",
      age: "23",
      gender: "Male",
    },
    {
      id: 2,
      name: "Aditya Singh",
      address: "Kanpur",
      phone: "01717171717",
      bloodType: "0-",
      age: "23",
      gender: "Male",
    },
    {
      id: 3,
      name: "Priya Singh",
      address: "Kanpur",
      phone: "01717171717",
      bloodType: "0-",
      age: "23",
      gender: "female",
    },
    {
      id: 4,
      name: "Raj",
      address: "Kanpur",
      phone: "01717171717",
      bloodType: "0-",
      age: "23",
      gender: "Male",
    },
    {
      id: 5,
      name: "Sunny Singh",
      address: "Kanpur",
      phone: "01717171717",
      bloodType: "Ab+",
      age: "23",
      gender: "Male",
    },
    {
      id: 6,
      name: "kushal",
      address: "Kanpur",
      phone: "01717171717",
      bloodType: "AB",
      age: "23",
      gender: "Male",
    },
    {
      id: 7,
      name: "Khushi Singh",
      address: "Kanpur",
      phone: "01717171717",
      bloodType: "B",
      age: "23",
      gender: "female",
    },
    {
      id: 8,
      name: "Divya Singh",
      address: "Kanpur",
      phone: "01717171717",
      bloodType: "0-",
      age: "23",
      gender: "female",
    },
    {
      id: 9,
      name: "Rajit",
      address: "Kanpur",
      phone: "01717171717",
      bloodType: "0+",
      age: "23",
      gender: "Male",
    },
    {
      id: 10,
      name: "Krishna Singh",
      address: "Kanpur",
      phone: "01717171717",
      bloodType: "0+",
      age: "23",
      gender: "Male",
    },
  ];
  return (
    <div className="w-[70vw] ">
      <div className="flex items-center justify-between m-[30px] ">
        <h1 className="m-[20px] text-[20px] font-semibold ">All Donors</h1>
        <Link to="/newdonor">
          <button className="bg-[#1e1e1e] text-white p-[10px] cursor-pointer ">
            New Donor
          </button>
        </Link>
      </div>
      <div className="m-[30px] ">
        <DataGrid rows={rows} columns={columns} checkboxSelection />
      </div>
    </div>
  );
};

export default Donors;
