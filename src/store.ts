import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { DraftPatient, Patient } from './types'
import { v4 as uuidv4 } from 'uuid'

type PatientState = {
    patients: Patient[]
    activeId: Patient['id']
    addPatient: (data: DraftPatient) => void
    deletePatient: (id: Patient['id']) => void
    getPatientById: (id: Patient['id']) => void
    updatePatient: (data: DraftPatient) => void
}

const createPatient = (patient: DraftPatient) : Patient => {
    return { ...patient, id: uuidv4() }
}

export const usePatientStore = create<PatientState>()(
    devtools((set) => ({
        patients: [],
        activeId: '',
        addPatient: (data) => {
            const newPatient = createPatient(data)
            set((state) => ({
                patients: [...state.patients, newPatient]   //Tomar copia del array de pacientes completo
            }))

        },
        deletePatient: (id) => {
            set((state) => ({
                patients: state.patients.filter(patient => patient.id !== id)
            }))
        },
        getPatientById: (id) => {
            set(() => ({
                activeId: id
            }))
        },
        updatePatient: (data) => {
            set((state) => ({
                /*Iterar sobre los pacientes para que cada vez que actualizo no se cree un paciente nuevo*/
                patients: state.patients.map( patient => patient.id === state.activeId ? {id: state.activeId, ...
                data} : patient),
                activeId: '' 
            }))
        }
    })
))