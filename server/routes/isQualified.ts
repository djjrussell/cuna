export const userIsQualified = (req: any, res: any) => {
  const price: number = parseInt(req.body.price, 10);

  if (price >= 100000) {
    res.status(400);
    res.send("Current password does not match");
    return false;
  }

  const income: number = parseInt(req.body.income, 10);
  const credit: number = parseInt(req.body.credit, 10);
  const isQualified: boolean = price < income * 0.2 && credit > 600;
  res.send({ isQualified });
};
