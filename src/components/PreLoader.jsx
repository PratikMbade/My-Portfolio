import { preLoaderAnim } from "@/Animation";
import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

const PreLoader = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
   

    setTimeout(() => {
      setLoading(false)
    }, 2500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-[100vw] h-[100vh] bg-white dark:bg-[rgb(10,16,32)] overflow-hidden z-30 flex justify-center transition-all duration-400 ease-in items-center fixed top-0 left-0 bottom-0">
          <div className="flex items-center justify-between h-[60px] w-[280px] font-sans font-bold overflow-hidden text-xl font-lg  last:block ">
            <span className="text-dark dark:text-white ">Student, </span>
            <span className="text-dark dark:text-white ">Developer, </span>
            <span className="text-dark dark:text-white ">Engineer</span>
            <div className="flex items-center justify-center">
            <BeatLoader size={20} width={300} height={5} color={'#5c0ec7'}  margin={5}/>
            </div>
           
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PreLoader;
