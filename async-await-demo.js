async function executor() {
  console.log("Went for sleeping");
  await sleep(2000).then((res) => console.log(res));
  console.log("Brushing teeth");
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time, "Woke-up"));
}

executor();
