const orderBy = (id) => {
  const order = id > 0 ? id > 5 && "LEBIH DARI LIMA" : "NOL";

  console.log(order);
};

orderBy(4);
