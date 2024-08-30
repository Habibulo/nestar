import { ObjectId } from "mongoose";

export interface T {
    [key: string]: any;
}
// Collection dagi ixtiyoriy document larni o'zgartirib beradi
export interface StatisticModifier {
	_id: ObjectId; 
	targetKey: string; // what change
	modifier: number; // what value
}