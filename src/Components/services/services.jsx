const BASE_URL = "https://ads.planetmedia.app";
let headers = {
  "x-api-key": "73cc9b48-ad47-4967-a063-2a2f3b39f220",
  Authorization: `Bearer ${localStorage.getItem("jwt")}`,
};

// method get
export const fetchAdvertise = async () => {
  try {
    let response = await fetch(`${BASE_URL}/api/advertisements`, {
      method: "GET",
      headers
    });
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
};


// method get for fetchAdvertiseById
export const fetchAdvertiseById = async (id) => {
  try {
    let response = await fetch(`${BASE_URL}/api/advertisements/${id}`, {
      method: "GET",
      headers,
    });
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
};

// method DELETE
export const deleteAdvertiseById = async (id) => {
  try {
    let response = await fetch(`${BASE_URL}/api/advertisements/${id}`, {
      method: "DELETE",
      headers,
    });
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
};

// method POST
export const createAdvertise = async (obj) => {
  try {
    let payload = {
      title: obj?.title, 
      price: obj?.price, 
      description: obj?.description, 
      image: obj?.image, 
    };
    let response = await fetch(`${BASE_URL}/api/advertisements`, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
};

// method POST
export const createUser = async (obj) => {
  try {
    let payload = {
      username: obj.username, 
      email: obj.email, 
      password: obj.password, 
    };
    let response = await fetch(`${BASE_URL}/api/auth/local/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "73cc9b48-ad47-4967-a063-2a2f3b39f220",
      },
      body: JSON.stringify(payload),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
};

// method POST
export const loginUser = async (obj) => {
  try {
    let payload = {
      identifier: obj?.username, 
      password: obj?.password, 
    };
    let response = await fetch(`${BASE_URL}/api/auth/local`, {
      method: "POST",
      headers: {
        "x-api-key": "73cc9b48-ad47-4967-a063-2a2f3b39f220",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
};

// method GET
export const getUserProfile = async () => {
  try {
    let response = await fetch(`${BASE_URL}/api/profile`, {
      method: "GET",
      headers: {
        ...headers,
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
};

// method PUT
export const updateUserProfile = async (obj) => {
  try {
    let payload = {
      firstName: obj?.firstName,
      lastName: obj?.lastName,
      email: obj?.email,
      username: obj?.username,
      phone: obj?.phone,
      location: obj?.location,
    };
    let response = await fetch(`${BASE_URL}/api/profile`, {
      method: "PUT",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
};



// // For add to cart
// export const addToCart = async (productId) => {
//   try {
//     const response = await fetch(`${API_BASE}/api/cart/add`, {
//       method: "POST",
//       headers: {
//         ...headers,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ productId }),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to add product to cart");
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error adding to cart:", error);
//     throw error;
//   }
// };


// // For buy the product 
// export const buyProduct = async (productId) => {
//   try {
//     const response = await fetch(`${API_BASE}/api/cart/buy`, {
//       method: "POST",
//       headers: {
//         ...headers,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ productId }),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to buy product");
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error buying product:", error);
//     throw error;
//   }
// };


// // Get carts
// export const getCartItems = async () => {
//   const res = await fetch(`${API_BASE}/get`, {
//     method: "GET",
//     headers: {
//       ...headers,
//       "Content-Type": "application/json",
//     },
//   });
//   if (!res.ok) throw new Error("Failed to fetch cart");
//   return await res.json();
// };

// // remove cart
// export const removeCartItem = async (productId) => {
//   const res = await fetch(`${API_BASE}/remove`, {
//     method: "POST",
//     headers: {
//       ...headers,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ productId }),
//   });
//   if (!res.ok) throw new Error("Failed to remove item");
//   return await res.json();
// };
