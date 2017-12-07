var clock = new Vue ({
  el: '#clock',
  data: {
    count: 0,
    timer: 0,
    miliseconds: '00',
    seconds: '00',
    minutes: '00',
    running: false,
    stopped: true,
    laps: []
  },
  methods: {
    start: function() {
      if (this.timer == 0) {
        this.timer = setInterval(function() { clock.updateTimer() }, 1);
        this.running = true;
        this.stopped = false;
      }
    },
    stop: function() {
      clearInterval(this.timer);
      this.timer = 0;
      this.running = false;
      this.stopped = true;
    },
    updateTimer: function() {
      this.count = this.count + 1;
      if (this.count >= 100) {
        this.count = 0;
        this.seconds = parseInt(this.seconds) + 1;
        if (this.seconds >= 60) {
          this.seconds = 0;
          this.minutes = parseInt(this.minutes) + 1;
          if (this.minutes >= 60) {
            this.minutes = 0;
          }
        }
      }
      this.miliseconds = this.count;
      this.miliseconds = ('00' + this.count.toString()).slice(-2);
      this.seconds = ('00' + this.seconds.toString()).slice(-2);
      this.minutes = ('00' + this.minutes.toString()).slice(-2);
    },
    reset: function() {
      this.count = 0;
      this.miliseconds = '00';
      this.seconds = '00';
      this.minutes = '00';
      this.laps = [];
    },
    lap: function() {
      var lap = { text: this.minutes + ":" + this.seconds + "." + this.miliseconds };
      this.laps.push(lap);
      console.log(lap['text']);
    }
  }
})
