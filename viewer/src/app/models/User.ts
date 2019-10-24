import { jsonProperty, Serializable } from "ts-serializable";

export class User extends Serializable{
    @jsonProperty(String)
    public login: string;
    @jsonProperty(String)
    public password: string;
    @jsonProperty(String)
    public roots: string;
    @jsonProperty(Boolean)
    public is_valid: boolean;
}