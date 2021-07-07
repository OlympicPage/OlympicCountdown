class Timer {
    constructor(day, hour, minute, second) {
        this.day = (23 - day <= 0) ? 0 : 23 - day
        this.hour = 8 - hour
        this.minute = 0 - minute
        this.second = 0 - second

        this.dayView = window.document.getElementById('day')
        this.hourView =  window.document.getElementById('hour')
        this.minuteView = window.document.getElementById('minute')
        this.secondView =  window.document.getElementById('second')
    }

    setTime() {
        this.day = (this.day >= 0) ? this.day : 0
        this.hour = (this.hour >= 0) ? this.hour : 0
        this.minute = (this.minute >= 0) ? this.minute : 0
        this.second = (this.second >= 0) ? this.second : 0
  

        this.dayView.innerText = (this.day >= 10) ? this.day : '0' + this.day
        this.hourView.innerText = (this.hour >= 10) ? this.hour : '0' + this.hour
        this.minuteView.innerText = (this.minute >= 10) ? this.minute : '0' + this.minute
        this.secondView.innerText = (this.second >= 10) ? this.second : '0' + this.second
    }

    getTime() {
      const timeCompare = setInterval(() => {
            if(this.day <= 0 && this.hour <= 0 && this.minute <= 0 && this.second <= 0) {
                clearInterval(timeCompare)
                this.end()
            }

            this.secondView.classList.add('drop')

            if(this.second <= 0) {
                if(this.minute > 0) {
                    this.minute--
                    this.second += 60

                    this.minuteView.classList.add('drop')
                }
                else {
                    if(this.hour > 0) {
                        this.hour--
                        this.minute += 59
                        this.second += 60

                        this.hourView.classList.add('drop')
                        this.minuteView.classList.add('drop')
                    }
                    else {
                        if(this.day > 0) {
                            this.day--
                            this.hour += 23
                            this.minute += 59
                            this.second += 60

                            this.minuteView.classList.add('drop')
                            this.hourView.classList.add('drop')
                            this.dayView.classList.add('drop')
                        }
                    }
                }
            }

            this.second--
            this.setTime()

        }, 1000) 
    }

    end() {
        const items = window.document.getElementsByClassName('no-broken')

        for(let i = 0; i < items.length; i++) {
            items[i].classList.add('broken')
        }

        setTimeout(() => {
            for(let i = 0; i < items.length; i++) {
                items[i].classList.add('none')
            }

            var now = document.createElement("div");
            var content = document.createTextNode("Começaram os jogos!");
            now.appendChild(content); 

            now.classList.add('now')

            var top = document.getElementById("top");
            document.body.insertBefore(now, top)
        }, 5000);  
    }
}

const date = new Date()
const timer = new Timer(date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds())
timer.getTime()