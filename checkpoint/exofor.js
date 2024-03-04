const asyncJob = async (n) => {
  try {
    const i = await (Math.random() > 0.5
      ? Promise.resolve(n + 1)
      : Promise.reject(Error("boom")));
    const j = await asyncJob(i);
    const arr = await Promise.all([asyncJob(j), asyncJob(j), asyncJob(j)]);
    const total = await asyncJob(arr.reduce((acc, curr) => acc + curr, 0));
    console.log(total);
  } catch (err) {
    console.error(`gestion erreur globale: ${err.message}`);
  }
};

asyncJob(0);

