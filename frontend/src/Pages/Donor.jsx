import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods.js";

const Donor = () => {
  const [donor, setDonor] = useState({});

  const location = useLocation();

  const donorId = location.pathname.split("/")[3];

  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    const getDonor = async () => {
      try {
        const res = await publicRequest.get(`/donors/find/${donorId}`);
        setDonor(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDonor();
  }, []);

  const handleUpdate = async () => {
    try {
      await publicRequest.put(`/donors/${donorId}`, inputs);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="m-[20px] p-[20px] h-[80vh] w-[450px] shadow-lg ">
        <h2 className="font-semibold ">Donor</h2>
        <div className="flex flex-col my-[12px] ">
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder={donor.name}
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
            className="border-b-2 border-b-[#555] border-solid outline-none p-[10px] w-[300px] "
          />
        </div>
        <div className="flex flex-col my-[12px] ">
          <label htmlFor="">Address</label>
          <input
            type="text"
            placeholder={donor.address}
            name="address"
            value={inputs.address || ""}
            onChange={handleChange}
            className="border-b-2 border-b-[#555] border-solid outline-none p-[10px] w-[300px] "
          />
        </div>
        <div className="flex flex-col my-[12px] ">
          <label htmlFor="">Tel</label>
          <input
            type="text"
            placeholder={donor.tel}
            name="tel"
            value={inputs.tel || ""}
            onChange={handleChange}
            className="border-b-2 border-b-[#555] border-solid outline-none p-[10px] w-[300px] "
          />
        </div>
        <div className="flex flex-col my-[12px] ">
          <label htmlFor="">Bloodgroup</label>
          <input
            type="text"
            placeholder={donor.bloodgroup}
            name="bloodgroup"
            value={inputs.bloodgroup || ""}
            onChange={handleChange}
            className="border-b-2 border-b-[#555] border-solid outline-none p-[10px] w-[300px] "
          />
        </div>

        <div className="flex flex-col my-[12px] ">
          <label htmlFor="">email</label>
          <input
            type="eamil"
            placeholder={donor.email}
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
            className="border-b-2 border-b-[#555] border-solid outline-none p-[10px] w-[300px] "
          />
        </div>
      </div>

      <div className="m-[20px] p-[20px] h-[80vh] w-[450px] shadow-lg ">
        <div className="flex flex-col my-[12px] ">
          <label htmlFor="">Weghit</label>
          <input
            type="200 pounds"
            placeholder={`${donor.weghit} kg`}
            name="weight"
            value={inputs.weight || ""}
            onChange={handleChange}
            className="border-b-2 border-b-[#555] border-solid outline-none p-[10px] w-[300px] "
          />
        </div>
        <div className="flex flex-col my-[12px] ">
          <label htmlFor="">Date</label>
          <input
            type="date"
            placeholder={donor.date}
            name="date"
            value={inputs.date || ""}
            onChange={handleChange}
            className="border-b-2 border-b-[#555] border-solid outline-none p-[10px] w-[300px] "
          />
        </div>
        <div className="flex flex-col my-[12px] ">
          <label htmlFor="">Diseases</label>
          <input
            type="text"
            placeholder={donor.diseases}
            name="diseases"
            value={inputs.diseases || ""}
            onChange={handleChange}
            className="border-b-2 border-b-[#555] border-solid outline-none p-[10px] w-[300px] "
          />
        </div>
        <button onClick={handleUpdate} className="bg-[#444] cursor-pointer text-white p-[10px] w-[300px]  ">
          Update
        </button>
      </div>
    </div>
  );
};

export default Donor;
