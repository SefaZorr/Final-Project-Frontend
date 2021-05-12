import { Product } from "./product";
import { ResponseModel } from "./responseModel";

export interface ProductResponseMode extends ResponseModel{
    data:Product[]
}