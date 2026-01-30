function calculateGST() {
    const amount = parseFloat(document.getElementById('amount').value);
    const rate = parseFloat(document.getElementById('gstRate').value);
    const isInclusive = document.getElementById('inclusive').checked;

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    let gstAmount, netAmount, totalAmount;

    if (isInclusive) {
        // Amount already includes GST: Net = Total / (1 + rate/100)
        netAmount = amount / (1 + (rate / 100));
        gstAmount = amount - netAmount;
        totalAmount = amount;
    } else {
        // Adding GST to Net: Total = Net * (1 + rate/100)
        gstAmount = (amount * rate) / 100;
        netAmount = amount;
        totalAmount = amount + gstAmount;
    }

    document.getElementById('resNet').innerText = netAmount.toFixed(2);
    document.getElementById('resGST').innerText = gstAmount.toFixed(2);
    document.getElementById('resTotal').innerText = totalAmount.toFixed(2);
}
