import { db } from "./firebase-config.js";
import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

async function displayProducts() {
  const productList = document.getElementById("product-list");

  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((doc) => {
    const data = doc.data();

    const productCard = `
      <div class="product-card">
        <img src="${data.image}" alt="${data.name}" class="product-image" />
        <h3 class="product-name">${data.name}</h3>
        <p class="product-price">₹${data.price}</p>
        <p class="product-category">${data.category}</p>
        <p class="product-desc">${data.description}</p>
      </div>
    `;

    productList.innerHTML += productCard;
  });
}

displayProducts();
