import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'
import EditMeetupDetailsDialog from './components/Meetup/Edit/EditMeetupDetailsDialog.vue'
import EditMeetupDateDialog from './components/Meetup/Edit/EditMeetupDateDialog.vue'
import EditMeetupTimeDialog from './components/Meetup/Edit/EditMeetupTimeDialog.vue'
import RegisterDialog from './components/Meetup/Registration/registerDialog.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)
Vue.component('app-edit-meetup-details-dialog', EditMeetupDetailsDialog)
Vue.component('app-edit-meetup-date-dialog', EditMeetupDateDialog)
Vue.component('app-edit-meetup-time-dialog', EditMeetupTimeDialog)
Vue.component('app-meetup-register-dialog', RegisterDialog)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyB8aB_CCn8Vycy2vOUjSATqpSLLZxH5C3Q',
      authDomain: 'disaster-recovery-8ce46.firebaseapp.com',
      databaseURL: 'https://disaster-recovery-8ce46.firebaseio.com',
      projectId: 'disaster-recovery-8ce46',
      storageBucket: 'gs://disaster-recovery-8ce46.appspot.com'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignin', user)
        this.$store.dispatch('fetchUserData')
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
