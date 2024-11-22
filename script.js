document.addEventListener("DOMContentLoaded", () => {
    const tourPrices = {
      cityTour: 50,
      mountainHike: 80,
      beachDay: 120,
      wineryTour: 70,
      historyTour: 40
    };
  
    const quantities = {
      cityTour: document.getElementById("cityTourQty"),
      mountainHike: document.getElementById("mountainHikeQty"),
      beachDay: document.getElementById("beachDayQty"),
      wineryTour: document.getElementById("wineryTourQty"),
      historyTour: document.getElementById("historyTourQty")
    };
  
    const totals = {
      cityTour: document.getElementById("cityTourTotal"),
      mountainHike: document.getElementById("mountainHikeTotal"),
      beachDay: document.getElementById("beachDayTotal"),
      wineryTour: document.getElementById("wineryTourTotal"),
      historyTour: document.getElementById("historyTourTotal")
    };
  
    const totalExpenseElem = document.getElementById("totalExpense");
  
    function calculateTotals() {
      let totalExpense = 0;
  
      for (let tour in quantities) {
        const qty = parseInt(quantities[tour].value) || 0;
        const price = tourPrices[tour];
        const total = qty * price;
  
        totals[tour].textContent = total.toFixed(2);
        totalExpense += total;
      }
  
      totalExpenseElem.textContent = totalExpense.toFixed(2);
    }
  
    for (let qtyInput in quantities) {
      quantities[qtyInput].addEventListener("input", calculateTotals);
    }
  
    document.getElementById("confirmBooking").addEventListener("click", () => {
      alert("Booking Confirmed!");
    });
  });
  