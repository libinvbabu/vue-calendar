<template>
<div class="home">
    <div class="month">{{ month }} {{ year }}</div>
  <div class="calendar">
    <div>S</div>
    <div>M</div>
    <div>T</div>
    <div>W</div>
    <div>T</div>
    <div>F</div>
    <div>S</div>
    <div v-for="(day, index) in days" :key="index" :style="{ gridColumn: column(index) }" :class="{ today: today(day), weekend: weekend(day) }">
      {{ day.format('D') }}
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import moment from 'moment'

export default {
  name: 'Calendar',
  data () {
    return {
      days: [],
      month: '',
      year: ''
    }
  },
  mounted () {
    // load days

    let monthDate = moment().startOf('month')
    this.month = moment().format('MMMM')
    this.year = moment().year()
    this.days = [...Array(monthDate.daysInMonth())].map((_, i) => {
      return monthDate.clone().add(i, 'day')
    })
  },
  methods: {
    column (index) {
      if (index === 0) {
        return this.days[0].day() + 1
      }
    },
    today (day) {
      return moment().isSame(day, 'day')
    },
    weekend (day) {
      if ((parseInt(day.format('d')) === 6) || (parseInt(day.format('d')) === 0)) {
        return true
      }
    }
  }
}
</script>

<style>
.month {
    font-weight: bold;
    font-size: 25px;
    margin: 10px;
}
.calendar {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  max-width: 550px;
  width: 100%;
  background: #fbfbfb;
  margin: 0 auto;
}

.calendar>* {
  align-items: center;
  display: flex;
  justify-content: center;
}

.calendar>*::before {
  content: "";
  display: inline-block;
  height: 0;
  padding-bottom: 100%;
  width: 1px;
}

.calendar>*.today {
  border: 0.1em solid black;
  border-radius: 100%;
}

.calendar .weekend {
  background: #eee;
  color: red;
}
</style>
