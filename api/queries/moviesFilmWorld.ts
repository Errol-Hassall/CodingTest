import axios from 'axios';

export default () =>
  axios('https://challenge.lexicondigital.com.au/api/v2/filmworld/movies', {
    headers: {
      'x-api-key': 'Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7',
    },
  });
