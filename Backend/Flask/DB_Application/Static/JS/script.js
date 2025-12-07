const deleteCar = async (car_id) => {
  const TARGET_URL = "/delete/" + car_id;
  console.log(TARGET_URL);
  const response = await fetch(TARGET_URL, { method: "DELETE" });
  console.log(response);
  if (response.ok) window.location.reload();
  else console.error("Failed to delete Car with id = " + car_id);
};
