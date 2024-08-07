import { useLocation } from "react-router-dom";

const Donor = () => {
  
  return (
    <div className="flex items-center justify-center min-h-screen ">
    <div className="m-[20px] p-[20px] h-[80vh] w-[450px] shadow-lg ">
      <h2 className="font-semibold ">Donor</h2>
      <div className="flex flex-col my-[12px] ">
        <label htmlFor="">Name</label>
        <input
          type="text"
          placeholder="Khusi Singh"
          className="border-b-2 border-b-[#555] border-solid outline-none p-[10px] w-[300px] "
        />
      </div>
      <div className="flex flex-col my-[12px] ">
        <label htmlFor="">Address</label>
        <input
          type="text"
          placeholder="Kanpur"
          className="border-b-2 border-b-[#555] border-solid outline-none p-[10px] w-[300px] "
        />
      </div>
      <div className="flex flex-col my-[12px] ">
        <label htmlFor="">Phone</label>
        <input
          type="text"
          placeholder="01717171717"
          className="border-b-2 border-b-[#555] border-solid outline-none p-[10px] w-[300px] "
        />
      </div>
      <div className="flex flex-col my-[12px] ">
        <label htmlFor="">BloodType</label>
        <input
          type="text"
          placeholder="AB"
          className="border-b-2 border-b-[#555] border-solid outline-none p-[10px] w-[300px] "
        />
      </div>

      <div className="flex flex-col my-[12px] ">
        <label htmlFor="">email</label>
        <input
          type="text"
          placeholder="katixo3505@leacore.com"
          className="border-b-2 border-b-[#555] border-solid outline-none p-[10px] w-[300px] "
        />
      </div>
    </div>

    <div className="m-[20px] p-[20px] h-[80vh] w-[450px] shadow-lg ">
    <div className="flex flex-col my-[12px] ">
        <label htmlFor="">Weghit</label>
        <input
          type="200 pounds"
          placeholder="katixo3505@leacore.com"
          className="border-b-2 border-b-[#555] border-solid outline-none p-[10px] w-[300px] "
        />
      </div>
      <div className="flex flex-col my-[12px] ">
        <label htmlFor="">Date</label>
        <input
          type="date"
          placeholder="katixo3505@leacore.com"
          className="border-b-2 border-b-[#555] border-solid outline-none p-[10px] w-[300px] "
        />
      </div>
      <div className="flex flex-col my-[12px] ">
        <label htmlFor="">Diseases</label>
        <input
          type="text"
          placeholder="Hypertension"
          className="border-b-2 border-b-[#555] border-solid outline-none p-[10px] w-[300px] "
        />
      </div>
       <button className="bg-[#444] cursor-pointer text-white p-[10px] w-[300px]  ">Update</button>
    </div>
  </div>
  )
}

export default Donor;
