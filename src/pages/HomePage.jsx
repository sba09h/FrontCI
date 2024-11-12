import contrato  from "../assets/img/contrato.jpg"; 
import Navbar from "../components/Navbar";


function HomePage() {
      
  return (
      <>
      <Navbar/>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="border-y-gray-900  w-4/5 rounded-md p-8 m-4">
          <div className=" flex flex-col items-center ">
            <h1 className="text-5xl font-extrabold text-center mb-14 ">Firma Digital</h1>
            <img src={contrato} alt="imagen de contrato1" className="rounded-md w-7/8"/>
          </div>
          <p className="text-white font-light mt-10 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aliquam ut officia exercitationem corrupti nihil fugiat veritatis adipisci iste ex quod fuga a deleniti, repellendus quidem vitae at ea saepe?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam libero quas cumque, labore doloremque aspernatur quos est modi esse soluta odit nemo consectetur rerum, veritatis fugiat ipsum temporibus asperiores necessitatibus?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ipsa debitis voluptatem nesciunt, minima dolore modi reiciendis voluptates voluptatum obcaecati at nostrum voluptatibus perferendis aliquid architecto recusandae? Optio, esse beatae?
          </p>
        </div>
      </div>
      
      

      </>
      
    );
  }
  export default HomePage