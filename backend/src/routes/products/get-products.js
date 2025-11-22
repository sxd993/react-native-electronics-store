import express from "express";
import { supabase } from "../../supabase.js";

const router = express.Router();

router.get("/", async (_req, res) => {
    const { data, error } = await supabase
        .from("products")
        .select("*");

    if (error) return res.status(500).json({ error });

    return res.json(data);
});

export default router;
