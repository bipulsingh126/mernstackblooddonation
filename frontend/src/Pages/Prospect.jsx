const Prospect = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="m-[20px] h-[80vh] w-[450px] shadow-lg ">
        <h2 className="font-semibold m-[30px] ">Prospect</h2>

        <ul className="m-[30px]">
          <li className=" mt-[10px] ">
            <strong className="font-semibold">Name:</strong>Khusi Singh
          </li>
          <li className=" mt-[10px] ">
            <strong className="font-semibold">Address:</strong>Kanpur
          </li>
          <li className=" mt-[10px] ">
            <strong className="font-semibold">Phone:</strong>01717171717
          </li>
          <li className=" mt-[10px] ">
            <strong className="font-semibold">BloodType:</strong>AB
          </li>
          <li className=" mt-[10px] ">
            <strong className="font-semibold">age:</strong>23
          </li>
          <li className=" mt-[10px] ">
            <strong className="font-semibold">gender:</strong>female
          </li>
          <li className=" mt-[10px] ">
            <strong className="font-semibold">Weight:</strong>60kg
          </li>
          <li className=" mt-[10px] ">
            <strong className="font-semibold">Status:</strong>pending
          </li>
        </ul>
        <span className="block m-[10px] ">
          Do you want to approve to a donor?
        </span>
        <button className="bg-red-400 text-white cursor-pointer p-[5px] w-[150px] m-[10px] ">
          Approve
        </button>
      </div>
    </div>
  );
};

export default Prospect;
