import { pg } from "../../components/api/knex";

export default async function handler(req, res) {
  const check = [
    req.body.email,
    req.body.first_name,
    req.body.last_name,
    req.body.phone,
    req.body.address,
    req.body.zip_code,
    req.body.country,
  ];

  if (check.includes(undefined) || check.includes(null)) {
    res.status(400).json({ message: "Please provide all the required fields" });
    return;
  }

  // Add records to database
  await pg("submissions").insert({
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone: req.body.phone,
    address: req.body.address,
    zip_code: req.body.zip_code,
    country: req.body.country,
  });

  res.json({ message: "You got it" });
}
