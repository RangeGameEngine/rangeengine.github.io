function updateClock() {
    var now = new Date();
    
    var competitionEnd = new Date('2025-01-11T00:00:00');
    var timeDiff = competitionEnd - now;

    var monthsLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    var daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    var hoursLeft = Math.floor(timeDiff / (1000 * 60 * 60)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    var hoursLeftDay = (hoursLeft % 24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    var minutesLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    var secondsLeft = Math.floor((timeDiff % (1000 * 60)) / 1000).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});

    var monthsParent = document.getElementById('months-left').parentNode;
    var daysParent = document.getElementById('days-left').parentNode;
    var hoursParent = document.getElementById('hours-left').parentNode;
    var minutesParent = document.getElementById('minutes-left').parentNode;
    var secParent = document.getElementById('seconds-left').parentNode;
    
    if (hoursLeft > 24) {
        if (monthsLeft >= 1) {
            document.getElementById('months-left').innerHTML = monthsLeft;
            document.getElementById('days-left').innerHTML = parseInt(daysLeft)-30;
            monthsParent.style.display = 'block';
            daysParent.style.display = 'block';
            hoursParent.style.display = 'none';
            minutesParent.style.display = 'none';
            secParent.style.display = 'none';
        }
        else {
            document.getElementById('days-left').innerHTML = daysLeft;
            document.getElementById('hours-left').innerHTML = hoursLeftDay;
            daysParent.style.display = 'block';
            hoursParent.style.display = 'block';
            monthsParent.style.display = 'none';
            minutesParent.style.display = 'none';
            secParent.style.display = 'none';
        }
    }
    else {
        document.getElementById('hours-left').innerHTML = hoursLeft;
        document.getElementById('minutes-left').innerHTML = minutesLeft;
        daysParent.style.display = 'none';
        hoursParent.style.display = 'block';
        minutesParent.style.display = 'block';
        secParent.style.display = 'none';
        if (hoursLeft < 1) {
            document.getElementById('seconds-left').innerHTML = secondsLeft;
            hoursParent.style.display = 'none';
            minutesParent.style.display = 'block';
            secParent.style.display = 'block';
        }
    }
}

setInterval(updateClock, 1000);