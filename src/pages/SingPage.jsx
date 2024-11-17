import Navbar from "../components/Navbar"

function SignPage() {
    return (
      <>
      <Navbar/>
      <div className="p-10">
        <div className="flex justify-center font-bold text-3xl bg-r" >
        <a className="justify-center" href="">CONSENTIMIENTO INFORMADO PARA HIGIENE DENTAL</a>
        </div>
        
        <div className="m-10">
          <ul>
            <li><a href="">Nombre:</a></li>
            <li><a href="">RUN:</a></li>
            <li><a href="">Fecha:</a></li>
          </ul>
        </div>

        <p className="text-justify">
          Declaró que:
          Se me ha explicado que se me realizará una limpieza dental o estar traje super gingival y pulido coronario que tiene como motivo eliminar el sarro o cálculo Que se encuentran adheridos a la superficie del diente o corona dental. Este tratamiento es realizado por un aparato de ultrasonido que produce una vibración que desprende el cálculo dental. Este tratamiento será realizado por un dentista. Durante este tratamiento existe un riesgo de desalojo de Restauraciones Desubicada a nivel cervical de los dientes u otros tipos de restauraciones, Hoy inherente al tratamiento y no dependen del operador, por tanto, no sólo cubiertos por la garantía de este tratamiento. Una restauración en buen estado y correctamente realizada no debería desalojarse.
          En general, esta técnica no es dolorosa, sin embargo, se pueden presentar ciertas molestias posteriores como escape de aire, molestias sencillas o sensibilidad posterior en este tratamiento, Y esta reacción depende de cada persona. Entiendo que este tratamiento corresponde sólo a una limpieza de las superficies visibles del diente y no a un desastre sus hijos o de la raíz del diente, y que en caso de requerirlo se deberá realizar un presupuesto aparte y un tratamiento periodontal. Reconozco que se me ha explicado que como medida preventiva a la aparición de las enfermedades denuncias. Debo visitar periódicamente al dentista y mantener Escrupulosamente, mi higiene oral.
          He completado el informe sobre la encuesta de salud informando el uso de anticoagulantes, marcapasos, diabetes, cardiopatías o si soy fumador, también me he realizado los exámenes clínicos que se me hubiesen solicitado, siendo veraz la información que he entregado.
          Las fotografías o placas radiográficas o películas que se me tomen serán para uso exclusivo de mi patología y no serán revelados a terceros ajenos al tratamiento sin mi consentimiento. Si presentase problemas con alguno de los tratamientos realizados en Dental Protect debiese consultar primero en la institución para resolver el problema, de lo contrario, si asisto a otro centro en donde intervienen parte o totalmente de tratamientos realizados iniciado, perder la garantía y no la devolución de dinero.
          Declaro que el dentista me ha explicado las ventajas y desventajas de este tratamiento, las alternativas a este y las consecuencias de no realizarlo. Sé que tengo derecho y a solicitar que se me devuelvan a explicar las partes de mi tratamiento que no tenga suficientemente claras. Además, he sido informado de los honorarios involucrados en mi tratamiento y las condiciones de pago de este, quedando de acuerdo.
        </p>

        <form action="">
          <label>
            <input className="accent-red-500" type="checkbox" /> Entiendo y Acepto Términos
          </label>

          <input 
            type="text" 
            name="run" 
            id="run" 
            className="border-2 border-rose-600 bg-zinc-600 text-white px-4 py-2 rounded-md my-2" 
            placeholder="Debe ingresar número de documento para aceptar" 
          />

          <input type="submit" value="aceptar"/>
          
        </form>
        
      </div>
      </>
      
    )
  }
  
  export default SignPage