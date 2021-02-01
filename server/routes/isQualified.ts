export const userIsQualified = (req: any, res: any) => {
  const income = parseInt(req.body.income, 10);
  const price = parseInt(req.body.price, 10);
  const credit = parseInt(req.body.credit, 10);
  const isQualified = price < income * 0.2 && credit > 600;
  res.send({ isQualified });
};
