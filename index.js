import express from "express";

const app = express();
app.use(express.json());

let walletBalance = 0;

// Home route
app.get("/", (req, res) => {
  res.send("JJ VTU Backend Running ✅");
});

// Admin Mini Bank - Add Money
app.post("/admin/add-money", (req, res) => {
  const { amount } = req.body;

  if (!amount) {
    return res.status(400).json({ message: "Amount required" });
  }

  walletBalance += Number(amount);

  res.json({
    message: "Money added successfully",
    newBalance: walletBalance
  });
});

// Check Balance
app.get("/admin/balance", (req, res) => {
  res.json({ balance: walletBalance });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});