export default function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const stripe = require("stripe")(
      process.env.STRIPE_PRIVATE_KEY
    );

    const { amount, token } = req.body;

    stripe.customers
      .create({
        source: token.id,
        name: token.card.name,
      })
      .then((customer: any) => {
        return stripe.charges.create({
          amount: parseFloat(amount) * 100,
          description: `Payment for USD ${amount}`,
          currency: "USD",
          customer: customer.id,
        });
      })
      .then((charge: any) => res.status(200).send(charge))
      .catch((err: any) => console.log(err.message));
  }
}




