async function myFunction(): Promise<string> {

  try {

    const rankPromise = await getRank();
    return 'Firebase async #' + rankPromise;
  } catch (err) {
    return 'Error ' + err;
  }
}

function getRank() {
  return Promise.resolve(1);
}
