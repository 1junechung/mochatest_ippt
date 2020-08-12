import { Entity } from '@loopback/repository';
export declare class Appointment extends Entity {
    id?: number;
    name: string;
    location: string;
    dateTime: string;
    constructor(data?: Partial<Appointment>);
}
export interface AppointmentRelations {
}
export declare type AppointmentWithRelations = Appointment & AppointmentRelations;
