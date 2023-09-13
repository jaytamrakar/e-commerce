export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/cart`, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    // TODO : on server it will return only some relevant data not password
    resolve({ data });
  });
}

export function fetchItemsByUserId() {
  return new Promise(async (resolve) => {
    //  TODO: we will not code sercer hard - code  server URL here
    const response = await fetch(`http://localhost:8080/cart`);
    const data = await response.json();
    resolve({ data });
  });
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/cart/` + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    // TODO : on server it will return only some relevant data not password
    resolve({ data });
  });
}

export function deleteItemFromCart(itemId) {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/cart/` + itemId, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    // TODO : on server it will return only some relevant data not password
    resolve({ data: { id: itemId } });
  });
}

export function resetCart() {
  //  get all the items of user and then delet each of them
  return new Promise(async (resolve) => {
    const response = await fetchItemsByUserId();
    console.log(response);
    const items = response.data;
    for (let item of items) {
      await deleteItemFromCart(item.id);
    }
    // TODO : on server it will return only some relevant data not password
    resolve({ status: "success" });
  });
}
