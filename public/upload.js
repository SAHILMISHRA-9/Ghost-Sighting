const form = document.getElementById("form");
const formMessageText = document.getElementById("formMessageText");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  console.log("FORM SUBMITTED"); // debug

  const title = document.getElementById("title").value;
  const isoDateString = document.getElementById("datetime").value;
  const location = document.getElementById("location").value;
  const text = document.getElementById("details").value;

  if (!isoDateString) {
    formMessageText.textContent = "Please select date & time";
    return;
  }

  const date = new Date(isoDateString);

  const readableDate = date.toLocaleString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const formData = {
    title,
    location,
    text,
    timeStamp: readableDate,
  };

  try {
    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      formMessageText.textContent = "Uploaded successfully!";
      form.reset();
    } else {
      formMessageText.textContent = "Server error!";
    }
  } catch (err) {
    console.error(err);
    formMessageText.textContent = "Network error!";
  }
});