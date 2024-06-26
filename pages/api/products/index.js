import {createRouter} from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { newProduct, getProducts } from "@/backend/controllers/productControllers";

const router = createRouter();

dbConnect();

router.post(newProduct);
router.get(getProducts);

export default router.handler()
