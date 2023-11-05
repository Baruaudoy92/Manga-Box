import React from 'react'
import "./banner.css";
import BannerCard from './BannerCard';

function Banner() {
  return (
    <div className='banner'>
        <div className='banner-1'>
            {/* left side */}
            <h2 className='details'>
                Read & <span className='span'> Sell </span>
            </h2>
            <p className='lorem'> 顧客がアディピシングのプロセスに注意を払うことは非常にです。結果、全体。彼は離婚の痛、時間と賢さの痛み、痛みを決して受け入れませんが、区別の結果は許しとそれです客がアデ がアディピシングのプロセスに を払うことはピシングのプロセスに注意を払うことは、彼が逃げるからすべては終わりです、そうでなければあなたはこれを見逃して泣き始 め結はるでしょう</p>
            <div>
            <input className='search' type="text" placeholder="Search.." name="search2"/>
            <button type="submit">
            <p1 className="btn-sea"> Search </p1>
            </button>

        </div>
        </div>
        {/* right side */}
        <div>
            <BannerCard />
        </div>
    </div>
  )
}

export default Banner;