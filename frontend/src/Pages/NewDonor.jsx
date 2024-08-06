

const NewDonor = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
    <div className="m-[20px] p-[20px] h-[80vh] w-[450px]  ">
      <h2 className="font-semibold ">New Donor</h2>
      <div className="flex flex-col my-[12px] ">
        <label htmlFor="">Name</label>
        <input
          type="text"
          placeholder="Khusi Singh"
          className="border-[#555] border-2 border-solid  p-[10px] w-[300px] "
        />
      </div>
      <div className="flex flex-col my-[12px] ">
        <label htmlFor="">Address</label>
        <input
          type="text"
          placeholder="Kanpur"
          className="border-[#555] border-2 border-solid  p-[10px] w-[300px] "
        />
      </div>
      <div className="flex flex-col my-[12px] ">
        <label htmlFor="">Phone</label>
        <input
          type="text"
          placeholder="01717171717"
          className="border-[#555] border-2 border-solid  p-[10px] w-[300px] "
        />
      </div>
      <div className="flex flex-col my-[12px] ">
      <label htmlFor="" className="text-[18px] mt-[10px] font-semibold ">
          BloodGroup
        </label>
        <select className=" border-[#555] border-2 border-solid  p-[10px] w-[300px] ">
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
          type="text"
          placeholder="katixo3505@leacore.com"
          className="border-[#555] border-2 border-solid  p-[10px] w-[300px] "
        />
      </div>
    </div>

    <div className="m-[20px] p-[20px] h-[80vh] w-[450px] shadow-lg ">
      <div className="flex flex-col my-[12px] ">
        <label htmlFor="">Weghit</label>
        <input
          type="200 pounds"
          placeholder="katixo3505@leacore.com"
className="border-[#555] border-2 border-solid  p-[10px] w-[300px] "
        />
      </div>
      <div className="flex flex-col my-[12px] ">
        <label htmlFor="">Date</label>
        <input
          type="date"
          placeholder="katixo3505@leacore.com"
          className="border-[#555] border-2 border-solid  p-[10px] w-[300px] "
        />
      </div>
      <div className="flex flex-col my-[12px] ">
        <label htmlFor="">Diseases</label>
        <input
          type="text"
          placeholder="Hypertension"
        className="border-[#555] border-2 border-solid  p-[10px] w-[300px] "
        />
      </div>
      <button className="bg-[#444] cursor-pointer text-white p-[10px] w-[300px]  ">
        Create
      </button>
    </div>
  </div>
  )
}

export default NewDonor;
