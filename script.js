'use strict'
// 1行目に記載している 'use strict' は削除しないでください


      // ダミーデータ生成部（http://epochjs.github.io/epoch/js/data.js から切り出してきた）
      (function() {
        let RealTimeData = function(layers, ranges, bounds) {
          this.layers = layers;
          this.bounds = bounds || [];
          this.ranges = ranges || [];
          this.timestamp = ((new Date()).getTime() / 1000)|0;
        };
  
        RealTimeData.prototype.rand = function(bound) {
          bound = bound || 100;
          return parseInt(Math.random() * bound) + 50;
        };
  
        RealTimeData.prototype.history = function(entries) {
          if (typeof(entries) != 'number' || !entries) {
              entries = 60;
          }
  
          let history = [];
          for (let k = 0; k < this.layers; k++) {
              let config = { values: [] };
              if(this.ranges[k]) {
                  config.range = this.ranges[k];
              console.log(config);
              }
  
              history.push(config);
          }
  
          for (let i = 0; i < entries; i++) {
              for (let j = 0; j < this.layers; j++) {
                  history[j].values.push({time: this.timestamp, y: this.rand(this.bounds[j])});
              }
              this.timestamp++;
          }
  
          return history;
        };
  
        RealTimeData.prototype.next = function() {
          let entry = [];
          for (let i = 0; i < this.layers; i++) {
              entry.push({ time: this.timestamp, y: this.rand(this.bounds[i]) });
          }
          this.timestamp++;
          return entry;
        }
  
        window.RealTimeData = RealTimeData;
  
    })();
      // ダミーデータ生成はここまで
  
      // ここからが本体
      $(function() {
        let data = new RealTimeData(2);   // 偽のデータ系列の数
  
        let chart = $('#real-time-line').epoch({
          type: 'time.line',
          data: data.history(),
          axes: ['left', 'bottom', 'right']
        });
  
        setInterval(function() { chart.push(data.next()); }, 1000);  // １秒毎に偽のデータをpushしている
        chart.push(data.next());
      });

      $(function() {
        let data = new RealTimeData(2);   // 偽のデータ系列の数
  
        let chart = $('#real-time-line').epoch({
          type: 'time.line',
          data: data.history(),
          axes: ['left', 'bottom', 'right']
        });
  
        setInterval(function() { chart.push(data.next()); }, 1000);  // １秒毎に偽のデータをpushしている
        chart.push(data.next());
      });
    // </script>
