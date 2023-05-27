import Musers from "../models/users.js";
import { createInvoice } from "../utils/pdf-generator.js";
import { invoice } from "../constants/dataModels.js";

export const pdf = [
  async (req, res) => {
    const { address } = req.body;
    try {
      createInvoice(invoice, "dcm.pdf", address);
      res.status(200).send({
        message: "DCM email sent successfully",
      });
    } catch (e) {
      res.status(200).send({ message: "user seems not exist", error: e });
    }
  },
];
