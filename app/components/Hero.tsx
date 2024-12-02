import React, { useRef, useState } from 'react'

const hero = () => {
  const [current, setcurrent] = useState(1);
  const [hasClicked, sethasClicked] = useState(false);
  const[ isLoading, setisLoading ] = useState(true);
  const [loadedVideos, setstate] = useState(1);
  const totalVideos = 4
  const nextVidRef = useRef(null)
  const handleMiniVideoClick = () => {
    sethasClicked(true)
    setcurrent((previousIndex)=>previousIndex +1)

  }
  return (
    <div className="main">
      <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden
      rounded-lg bg-blue-75">
        <div>
          <div className="mask-clip-path absolute-center absolute z-50
          size-64 cursor-pointer overflow-hidden rounded-lg">
            <div onClick={handleMiniVideoClick} className="origin-center">
              MiniVideoPlayer
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default hero
