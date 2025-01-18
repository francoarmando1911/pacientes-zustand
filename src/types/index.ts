export type Patient = {
    id: string,
    name: string,
    caretaker: string,
    email: string,
    date: Date,
    symptoms: string
}

export type DraftPatient = Omit<Patient, 'id'> //Tomo todos los datos del type anterior pero omito el id