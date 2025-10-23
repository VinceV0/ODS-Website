// T-Counter Countdown Timer
// Vince Vagay 30036567
// Reference used from w3schools JavaScript Tutorial: 
// https://www.w3schools.com/howto/howto_js_countdown.asp

document.addEventListener('DOMContentLoaded', function() {
    // Points toward the timer and status element in the HTML
    const timerElement = document.getElementById('timer');
    const statusElement = document.getElementById('status');

    // Set target date to 5 months and 25 days from now - This is just for example purposes
    // Whenever the page reloads it defaults to these values
    const now = new Date();
    const targetDate = new Date(now.getTime() + (5 * 30 * 24 * 60 * 60 * 1000) + (25 * 24 * 60 * 60 * 1000));

    // Updates the countdown timer display every second
    function updateTimer() {
        // Constant variables - Using the current date
        const now = new Date();
        // Calculate the difference in time
        const timeRemaining = targetDate - now;

        if (timeRemaining > 0) {
            // Calculate months, days, minutes, seconds
            const totalDays = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const months = Math.floor(totalDays / 30);
            const days = totalDays % 30;

            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            // Format as T-Xmonths Ydays HH:MM:SS
            // Update individual elements instead of single text content
            document.getElementById('months').textContent = months;
            document.getElementById('days').textContent = days;
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

            setTimeout(updateTimer, 1000);
        } 
        // Once the timer completes, it will show a Countdown comeplete! text in red
        // Every counter will finish at 0 or 00
        else {
            statusElement.textContent = 'Countdown complete!';
            timerElement.style.color = 'red';
            document.getElementById('months').textContent = 0;
            document.getElementById('days').textContent = 0;
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
        }
    }

    // Start the countdown
    updateTimer();
});
