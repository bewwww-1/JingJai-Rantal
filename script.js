function openBookingForm(model, price) {
    document.getElementById("cameraModel").innerText = model;
    document.getElementById("cameraPrice").innerText = price;
    document.getElementById("bookingForm").style.display = "block";
}

function closeBookingForm() {
    document.getElementById("bookingForm").style.display = "none";
}

document.getElementById("bookingFormDetails").onsubmit = function(event) {
    event.preventDefault();
    const customerName = document.getElementById("customerName").value;
    const bookingDays = document.getElementById("bookingDays").value;
    const cameraModel = document.getElementById("cameraModel").innerText;
    const cameraPrice = document.getElementById("cameraPrice").innerText;

    const totalPrice = cameraPrice * bookingDays;
    alert(`คุณ ${customerName} ได้จองกล้องรุ่น ${cameraModel} เป็นจำนวน ${bookingDays} วัน รวมเป็นเงิน ฿${totalPrice}`);
    closeBookingForm();
};
