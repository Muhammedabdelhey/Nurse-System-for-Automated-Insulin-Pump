export class Patients {
    name?: string;
    id: number = 0;
    bloodsugar: number = 0;
    state?: string;
    dose?: number;
    date: number = 0;
    ReservoirValue: number = 0;
    max_dose_day?: number;
    total_doses_day?: number;
    Id: string = "";
    
    public static sort(patients_data2: Patients[]): Patients[] {
        patients_data2.sort((a, b) => (a.date > b.date) ? -1 : 1)
        return patients_data2;
    }
}