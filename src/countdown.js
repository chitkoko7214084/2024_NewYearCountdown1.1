export function startCountdown(targetDate, elementId) {
    const countdownElement = document.getElementById(elementId);
  
    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      countdownElement.innerHTML = `${days} DAYS | ${hours} HOURS | ${minutes} MINUTES | ${seconds} SECONDS`;
  
      if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = 'EXPIRED';
      }
    }, 1000);
  }
  