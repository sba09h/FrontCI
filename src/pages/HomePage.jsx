import contrato  from "../assets/img/contrato2.jpg"; 
import CustomCarousel from "../components/Carousel";
import Navbar from "../components/Navbar";






function HomePage() {
  
  return (
      <>
      <Navbar/>
      {/* <CustomCarousel/> */}
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="border-y-gray-900  w-4/5 rounded-md p-8 m-4">
          <div className="mt-10 w-full flex justify-center">
            <div className="w-full sm:w-3/4 lg:w-3/6">
              <img src={contrato} alt="imagen de contrato1" className="rounded-md w-7/8"/>
            </div>
          </div>
          
          <div>
          <p className="text-center text-3xl pt-10 font-extrabold">¡ Bienvenidos a C.I.D.! <br></br></p>
          <p className="text-white text-2xl font-light mt-10 text-justify">
            En C.I.D., nuestra misión es simplificar el proceso de gestión de consentimientos informados en el ámbito de la salud, garantizando que los pacientes puedan otorgar su autorización de manera segura, rápida y digital.
            A través de nuestra plataforma, facilitamos el acceso a los documentos necesarios para cada procedimiento médico, permitiendo que los pacientes firmen sus consentimientos de forma electrónica, sin necesidad de papel ni desplazamientos, manteniendo siempre la seguridad, confidencialidad y validez legal.
            Ya sea que esté preparando una consulta, tratamiento o procedimiento quirúrgico, nuestro sistema le ofrece una solución moderna y eficiente para la gestión de consentimientos informados, asegurando que tanto profesionales como pacientes puedan tener un registro claro y accesible de las autorizaciones otorgadas.<br></br> <br></br>
            ¡Comience hoy mismo y facilite su experiencia de atención médica!
          </p>
          </div>
            
        </div>
      </div>
      
      

      </>
      
    );
  }
  export default HomePage;