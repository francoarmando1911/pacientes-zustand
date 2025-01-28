import { useForm } from "react-hook-form"
import ErrorMessage from "./ErrorMessage"
import type { DraftPatient } from "../types"
import { usePatientStore } from "../store"

export default function PatientForm() {

    const addPatient = usePatientStore(state => state.addPatient)
    

    const { register, handleSubmit, formState: {errors}, reset } = useForm<DraftPatient>()

    const registerPatient = (data: DraftPatient) => {
        addPatient(data)

        reset()
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form
                className="bg-white shadow-md rounded-xl py-10 px-5 mb-10"
                noValidate
                onSubmit={handleSubmit(registerPatient)}
            >
                <div className="mb-5">
                    <label htmlFor="name" className="text-sm uppercase font-bold">
                        Paciente
                    </label>
                    <input
                        id="name"
                        className="w-full p-3  border border-gray-100"
                        type="text"
                        placeholder="Nombre del Paciente"
                        {...register('name', {
                            required: 'El nombre del paciente es obligatorio',
                        })}
                    />

                    {errors.name && (
                        <ErrorMessage>{errors.name?.message?.toString()}</ErrorMessage>
                    )}
                </div>

                <div className="mb-5">
                    <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                        Propietario
                    </label>
                    <input
                        id="caretaker"
                        className="w-full p-3  border border-gray-100"
                        type="text"
                        placeholder="Nombre del Propietario"
                        {...register('caretaker', {
                            required: 'El nombre del propietario es obligatorio',
                        })}
                    />

                    {errors.caretaker && (
                        <ErrorMessage>{errors.caretaker?.message?.toString()}</ErrorMessage>
                    )}
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="text-sm uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        className="w-full p-3  border border-gray-100"
                        type="email"
                        placeholder="Email de Registro"
                        {...register("email", {
                            required: "El Email es Obligatorio",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,  //Expresion regular de email
                                message: 'Email No Válido'
                            }
                        })} 
                    />
                    {errors.email && (
                        <ErrorMessage>{errors.email?.message?.toString()}</ErrorMessage>
                    )}
                </div>

                <div className="mb-5">
                    <label htmlFor="date" className="text-sm uppercase font-bold">
                        Fecha Alta
                    </label>
                    <input
                        id="date"
                        className="w-full p-3  border border-gray-100"
                        type="date"
                        {...register('date', {
                            required: 'La fecha de alta es obligatoria',
                        })}
                    />

                    {errors.date && (
                        <ErrorMessage>{errors.date?.message?.toString()}</ErrorMessage>
                    )}
                </div>

                <div className="mb-5">
                    <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                        Síntomas
                    </label>
                    <textarea
                        id="symptoms"
                        className="w-full p-3  border border-gray-100"
                        placeholder="Síntomas del paciente"
                        {...register('symptoms', {
                            required: 'Los sintomas son obligatorios',
                        })}
                    />
                    {errors.symptoms && (
                        <ErrorMessage>{errors.symptoms?.message?.toString()}</ErrorMessage>
                    )}
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-xl"
                    value='Guardar Paciente'
                />
            </form>
        </div>
    )
}