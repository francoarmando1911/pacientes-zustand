import { usePatientStore } from "../store"

export default function PatientList() {

  const patients = usePatientStore((state) => state.patients)
  console.log(patients)

  return (
    <div className="md:w-1/2 ld:3/5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold"> pacientes y horarios</span>
          </p>
          
        </>
        
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {''}
            <span className="text-indigo-600 font-bold"> y apareceran en este lugar</span>
          </p>
        </>
      )}

    </div>
  )
}
