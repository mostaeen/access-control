import { Router } from "express";
const router = Router();

router.use((req, res, next) => {
  let date = new Date().toLocaleTimeString();
  console.log("Time: ", date);
  next();
});

router.get("/", (req, res) => {
  res.send("birds");
});

export default router;
