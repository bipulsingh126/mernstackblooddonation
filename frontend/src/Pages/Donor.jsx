import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../../requestMethods.js";

const Donor = () => {
  const [donor, setDonor] = useState({});

  const location = useLocation();

  const donorId = location.pathname.split("/")[3];

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

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="m-[20px] p-[20px] h-[80vh] w-[450px] shadow-lg ">
        <h2 className="font-semibold ">Donor</h2>
        <div className="flex flex-col my-[12px] ">
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder={donor.name}
            className="border-b-2 border-b-[#555] border-solid outline-none p-[10px] w-[300px] "
          />
        </div>
        <div className="flex flex-col my-[12px] ">
          <label htmlFor="">Address</label>
          <input
            type="text"
            placeholder={donor.address}
            className="border-b-2 border-b-[#555] border-solid outline-none p-[10px] w-[300px] "
          />
        </div>
        <div className="flex flex-col my-[12px] ">
          <label htmlFor="">Tel</label>
          <input
            type="text"
            placeholder={donor.tel}
            className="border-b-2 border-b-[#555] border-solid outline-none p-[10px] w-[300px] "
          />
        </div>
        <div className="flex flex-col my-[12px] ">
          <label htmlFor="">Bloodgroup</label>
          <input
            type="text"
            placeholder={donor.bloodgroup}
            className="border-b-2 border-b-[#555] border-solid outline-none p-[10px] w-[300px] "
          />
        </div>

        <div className="flex flex-col my-[12px] ">
          <label htmlFor="">email</label>
          <input
            type="eamil"
            placeholder={donor.email}
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
            className="border-b-2 border-b-[#555] border-solid outline-none p-[10px] w-[300px] "
          />
        </div>
        <div className="flex flex-col my-[12px] ">
          <label htmlFor="">Date</label>
          <input
            type="date"
            placeholder={donor.date}
            className="border-b-2 border-b-[#555] border-solid outline-none p-[10px] w-[300px] "
          />
        </div>
        <div className="flex flex-col my-[12px] ">
          <label htmlFor="">Diseases</label>
          <input
            type="text"
            placeholder={donor.diseases}
            className="border-b-2 border-b-[#555] border-solid outline-none p-[10px] w-[300px] "
          />
        </div>
        <button className="bg-[#444] cursor-pointer text-white p-[10px] w-[300px]  ">
          Update
        </button>
      </div>
    </div>
  );
};

export default Donor;
