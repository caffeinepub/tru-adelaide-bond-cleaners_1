import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Submission {
    id: bigint;
    service: string;
    name: string;
    message: string;
    address: string;
    timestamp: Time;
    phone: string;
}
export type Time = bigint;
export interface backendInterface {
    getAllSubmissions(): Promise<Array<Submission>>;
    isAdmin(): Promise<boolean>;
    loginAdmin(password: string): Promise<void>;
    setAdminProfile(username: string, email: string, passwordHash: string): Promise<void>;
    submitEnquiry(name: string, phone: string, service: string, address: string, message: string): Promise<void>;
}
