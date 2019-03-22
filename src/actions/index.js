

import { 
         FETCH_USER_BOOKINGS_SUCCESS,
         FETCH_USER_BOOKINGS_FAIL,
         FETCH_USER_BOOKINGS_INIT,
         } from './types';





// USER BOOKINGS ACTIONS ---------------------------

const fetchUserBookingsInit = () => {
  return {
    type: FETCH_USER_BOOKINGS_INIT
  }
}

const fetchUserBookingsSuccess = (userBookings) => {
 
  return {
    type: FETCH_USER_BOOKINGS_SUCCESS,
    userBookings
  }
}

const fetchUserBookingsFail = (errors) => {
  return {
    type: FETCH_USER_BOOKINGS_FAIL,
    errors
  }
}

export const fetchUserBookings = (data) => {
  return dispatch => {
    dispatch(fetchUserBookingsInit());
    dispatch( fetchUserBookingsSuccess(data))
    // axiosInstance.get('/bookings/manage')
    //   .then(res => res.data )
    //   .then(userBookings => dispatch(fetchUserBookingsSuccess(userBookings)))
    //   .catch(({response}) => dispatch(fetchUserBookingsFail(response.data.errors)))
  }
}





















