import { Job } from "@/models/job";

export interface Survey {
    job_name: string;
    survey_name: string;
    job_id: string;
    job: Job[]
    uuid: string;
    question: []
} 