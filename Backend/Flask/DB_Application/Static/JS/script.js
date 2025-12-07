// script.js

// The global variable DELETE_URL_BASE is now available here.

const deleteCar = async (car_id) => {
  // 1. Use the .replace() method on the global template string.
  //    We replace the unique, fixed string 'PLACEHOLDER' with the actual
  //    dynamic variable car_id (e.g., 42).
  const TARGET_URL = DELETE_URL_BASE.replace("PLACEHOLDER", car_id);

  // Example: If car_id is 42, TARGET_URL becomes: "/delete/42"

  try {
    // 2. Execute the fetch request using the correct, dynamic URL
    const res = await fetch(TARGET_URL, {
      method: "DELETE",
    });

    if (res.ok) {
      console.log(`Car ID ${car_id} deleted.`);
      // Reload the page to show the updated list
      location.reload();
    } else {
      const errorData = await res.json();
      console.error(`Error deleting car: ${errorData.error}`);
    }
  } catch (e) {
    console.error("Network error:", e);
  }
};
