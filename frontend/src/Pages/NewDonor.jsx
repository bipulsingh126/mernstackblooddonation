import { useState } from "react";
import { publicRequest } from "../requestMethods.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewDonor = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleDonors = async () => {
    try {
     await publicRequest.post("/donors", inputs)
      toast.success("Donor has been successfully added");
      setInputs({});
    } catch (error) {
      console.log(error);
      toast.warning(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="m-[20px] p-[20px] h-[80vh] w-[450px]  ">
        <h2 className="font-semibold ">New Donor</h2>
        <div className="flex flex-col my-[12px] ">
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
            placeholder="Khusi Singh"
            className="border-[#555] border-2 border-solid  p-[10px] w-[300px] "
          />
        </div>
        <div className="flex flex-col my-[12px] ">
          <label htmlFor="">Address</label>
          <input
            type="text"
            name="address"
            value={inputs.address || ""}
            onChange={handleChange}
            placeholder="Kanpur"
            className="border-[#555] border-2 border-solid  p-[10px] w-[300px] "
          />
        </div>
        <div className="flex flex-col my-[12px] ">
          <label htmlFor="">Tel</label>
          <input
            type="number"
            name="tel"
            value={inputs.tel || ""}
            onChange={handleChange}
            placeholder="01717171717"
            className="border-[#555] border-2 border-solid  p-[10px] w-[300px] "
          />
        </div>
        <div className="flex flex-col my-[12px] ">
          <label htmlFor="" className="text-[18px] mt-[10px] font-semibold ">
            BloodGroup
          </label>
          <select
            name="bloodGroup"
            value={inputs.bloodGroup || ""}
            onChange={handleChange}
            className=" border-[#555] border-2 border-solid  p-[10px] w-[300px] "
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="A-">A-</option>
            <option value="O+">O+</option>
            <option value="AB+">Ab-</option>
            <option value="AB-">AB-</option>
            <option value="O-">O-</option>
          </select>
        </div>

        <div className="flex flex-col my-[12px] ">
          <label htmlFor="">email</label>
          <input
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
            type="email"
            placeholder="katixo3505@leacore.com"
            className="border-[#555] border-2 border-solid  p-[10px] w-[300px] "
          />
        </div>
      </div>

      <div className="m-[20px] p-[20px] h-[80vh] w-[450px] shadow-lg ">
        <div className="flex flex-col my-[12px] ">
          <label htmlFor=""> Weight</label>
          <input
            name="weight"
            value={inputs.weight || ""}
            onChange={handleChange}
            type="number"
            placeholder="55kg"
            className="border-[#555] border-2 border-solid  p-[10px] w-[300px] "
          />
        </div>
        <div className="flex flex-col my-[12px] ">
          <label htmlFor="">Date</label>
          <input
            name="date"
            value={inputs.date || ""}
            onChange={handleChange}
            type="date"
            placeholder="katixo3505@leacore.com"
            className="border-[#555] border-2 border-solid  p-[10px] w-[300px] "
          />
        </div>
        <div className="flex flex-col my-[12px] ">
          <label htmlFor="">Do you have Diseases</label>
          <input
            name="diseases"
            value={inputs.diseases || ""}
            onChange={handleChange}
            type="text"
            placeholder="N/A"
            className="border-[#555] border-2 border-solid  p-[10px] w-[300px] "
          />
        </div>
        <button
          onClick={handleDonors}
          className="bg-[#444] cursor-pointer text-white p-[10px] w-[300px]  "
        >
          Create
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default NewDonor;
