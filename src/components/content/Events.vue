<template>
  <div class="col-sm-12 col-md-6 col-lg-4">
    <section class="events-small">
      <h2>Events</h2>
      <ul class="events-list">
        <li class="events-item">
          <div class="date-box">
            <div class="month">jan</div>
            <div class="day">18</div>
          </div>
          <div class="aside">
            <div class="date">
              <awesome :icon="['fas', 'file-alt']" class="i" />
              <p>01-18-2014</p>
            </div>
            <a href="#"
              >Conservatory Exhibit: The garden of india a country and culture
              revealed</a
            >
            <p>Matthaei Botanical Gardens</p>
          </div>
        </li>
        <li class="events-item">
          <div class="date-box">
            <div class="month">feb</div>
            <div class="day">01</div>
          </div>
          <div class="aside">
            <div class="date">
              <awesome :icon="['fas', 'file-alt']" class="i" />
              <p>02-01-2014</p>
            </div>
            <a href="#"
              >February Half-Term Activities: Big Stars and Little Secrets</a
            >
            <p>Pitt Rivers and Natural History Museums</p>
          </div>
        </li>
        <li class="events-item">
          <div class="date-box">
            <div class="month">mar</div>
            <div class="day">23</div>
          </div>
          <div class="aside">
            <div class="date">
              <awesome :icon="['fas', 'file-alt']" class="i" />
              <p>03-23-2014</p>
            </div>
            <a href="#"
              >The Orchestra of the Age of Enlightenment perform with Music</a
            >
            <p>Faculty of Music</p>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h2 {
  font-size: 24px;
  line-height: 26px;
  font-weight: 500;
  color: #252525;
  margin: 0 0 35px 0;
  position: relative;
}

h2::after {
  background-color: #c5c5c5;
  content: "";
  height: 2px;
  width: 30px;
  position: absolute;
  left: 0;
  bottom: -15px;
}

/* events-small */
.events-small .events-item {
  list-style: none;
  margin-bottom: 45px;
}

.events-small .events-item .date-box {
  height: 70px;
  width: 70px;
  color: #fff;
  background-color: #c5c5c5;
  float: left;
  overflow: hidden;
}

.events-small .events-item:nth-child(1) .date-box {
  background-color: #012951;
}

.events-small .events-item:nth-child(2) .date-box {
  background-color: #ea6645;
}

.events-small .events-item .date-box .month {
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  padding-top: 5px;
}

.events-small .events-item .date-box .day {
  font-size: 60px;
  font-weight: bold;
  position: relative;
  right: -12px;
  bottom: 15px;
}

.events-small .events-item .aside {
  padding-left: 80px;
}

.events-small .events-item .aside .date {
  display: none;
}

.events-small .events-item .aside a {
  display: block;
  text-decoration: none;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #024283;
  margin-bottom: 10px;
}

.events-small .events-item .aside > p {
  font-size: 12px;
  line-height: 17px;
  color: #767676;
  font-weight: 400;
  margin: 0;
}
/* end events-small */

/* Responsive */
@media (min-width: 768px) and (max-width: 991px) {
  .events-small .events-item {
    margin-bottom: 15px;
  }

  .events-small .events-item:nth-child(3) {
    margin-bottom: 50px;
  }

  .events-small .events-item .date-box {
    display: none;
  }

  .events-small .events-item .aside {
    padding-left: 0;
  }

  .events-small .events-item .aside .date {
    display: flex;
  }

  .events-small .events-item .aside a {
    margin-bottom: 5px;
  }
}
@media (max-width: 767px) {
}
/* end Responsive */
</style>