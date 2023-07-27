import { Job } from "@/app/models/job";

export interface Candidature {
    uuid: string
    name: string
    cv: string
    mail: string
    cover_letter: string
    job_name: string
    test_note: string
    survey_note: string
    status: string
    job_id: string
    job: Job[]
}