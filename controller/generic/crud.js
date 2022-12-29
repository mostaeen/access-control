import { isvalidID } from "../../regex.js";

function get(schema) {
  return async (req, res) => {
    try {
      if (req.params.id.match(isvalidID)) {
        const item = await schema.findById(req.params.id);
        res.status(200).send(item);
      } else {
        res.status(400).send("Please provide a valid id");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
}

function getAll(schema, relate = "") {
  return async (req, res) => {
    try {
      const allItems = await schema
        .find()
        .populate([
          { path: relate, select: "name -_id", strictPopulate: false },
        ]);
      res.status(200).send(allItems);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
}

function create(schema) {
  return async (req, res) => {
    try {
      let item = new schema(req.body);
      item = await item.save();
      res.status(200).send(item);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
}

function update(schema) {
  return async (req, res) => {
    try {
      if (req.params.id.match(isvalidID)) {
        let item = await schema.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send(item);
      } else {
        res.status(400).send("Please provide a valid id");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
}

function remove(schema) {
  return async (req, res) => {
    try {
      if (req.params.id.match(isvalidID)) {
        const exist = await schema.findById(req.params.id);
        if (!exist)
          return res.status(404).send("Item with the requested ID not found");
        let item = await schema.findByIdAndDelete(req.params.id);
        res.status(200).send(item);
      } else {
        res.status(400).send("Please provide a valid id");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
}

export { get, getAll, create, update, remove };
