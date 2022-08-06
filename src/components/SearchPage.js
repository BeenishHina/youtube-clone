import React from 'react'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ChannelRow from './ChannelRow';
import './SearchPage.css';
import VideoRow from './VideoRow';
function SearchPage() {
  return (
    <div className='searchPage'>
      <div className="searchPage__filter">
        <TuneOutlinedIcon/>
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
      image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzC2ufbrSezrMQ_2XV2tX2si9ONO5kWCFQbA&usqp=CAU"
      channel="prooogramming"
      verified
      subs="660k"
      noOfVideos={300}
      description="yow can enjoy"
     />
     <VideoRow
     views="1M"
     subs="659k"
     description="Do u want a free course"
     timestamp= "59 seconds ago"
     channel="programmer"
     title="clone youtube"
     image="https://i2.wp.com/arabicmehndidesign.com/wp-content/uploads/2020/11/Download-100-Latest-Islamic-Dp-For-Girls-Best-Pics-6.png?ssl=1"
     />
    </div>
  )
}

export default SearchPage
