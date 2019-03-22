
let date = new Date();
let day = date.getDate();
let jam = date.getHours();


//=========================== list

  let urla = [
    'https://www.youtube.com/watch?v=HSOtku1j600',
    'https://www.dailymotion.com/video/x6cx43a',
    'https://www.youtube.com/watch?v=qTSFl5O4acE',
    'https://www.dailymotion.com/video/x749jzg',
    'https://www.youtube.com/watch?v=f9_VU28t7lg',
    'https://www.dailymotion.com/video/x5drrdx',
    'https://www.youtube.com/watch?v=ofdQdDRgNUk',
    'https://www.dailymotion.com/video/x3ltc0b',
    'https://www.youtube.com/watch?v=jj3GiN0q4Ow',
    'https://www.dailymotion.com/video/x2i9ke7'

            ];

  let urlb = [
    'https://www.youtube.com/watch?v=bg3OAbS-Yus',
    'https://www.youtube.com/watch?v=EnYSej4JEhM',
    'https://www.dailymotion.com/video/x28yhcg',
    'https://www.youtube.com/watch?v=3jWRrafhO7M',
    'https://www.dailymotion.com/video/x22sai3',
    'https://www.youtube.com/watch?v=QDr81GTND9Y',
    'https://www.dailymotion.com/video/x1trcym',
    'https://www.youtube.com/watch?v=8aLzmoeWFgI',
    'https://www.youtube.com/watch?v=x-A1ohpgdlM'

            ];

  let urlc = [
    'https://www.dailymotion.com/video/x7437hl',
    'https://www.youtube.com/watch?v=5DiMoehAeOU',
    'https://www.dailymotion.com/video/x2e7qy7',
    'https://www.youtube.com/watch?v=inzXkDyqnlY',
    'https://www.dailymotion.com/video/x17e702',
    'https://www.youtube.com/watch?v=pPFabRaQI-0',
    'https://www.dailymotion.com/video/x5bwxl2',
    'https://www.youtube.com/watch?v=jOY1sjlJ6A8',
    'https://www.dailymotion.com/video/x47bqk3',
    'https://www.youtube.com/watch?v=gmU9PBDS-0k'

            ];

    //==========================================================================

            if(day == 1  || day == 4 || day == 7 || day == 10 || day == 16 || day == 19 || day ==  22 || day == 25 || day == 28 ) {
              if(jam == 1 || jam == 2 || jam == 3 || jam == 4 ) {
               load = urla;
              //console.log(load[0])
            }
            }else if(day == 2 || day == 5 ||day == 8 || day == 11 || day == 14 || day == 17 || day == 20 || day == 23 || day == 26|| day == 29 ) {
               if(jam == 1 || jam == 2 || jam == 3 || jam == 4 ) {
                  load = urlb
                // console.log(load[0])
              }
            }else if (day == 3 || day == 6 || day == 9 || day == 12 ||day == 15 || day == 18 || day == 21 ||day == 24 || day == 27 || day == 30 ) {
              if(jam == 1 || jam == 2 || jam == 3 || jam == 4 ) {
               load = urlc
              // console.log(load[0])
              }
            }


//console.log(load[0])
  //===============================================================================
