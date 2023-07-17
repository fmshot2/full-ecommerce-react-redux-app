import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useNavigation } from "@react-navigation/core";

const Search = () => {
  let navigate = useNavigate()
  const [keyword, setKeyword] = useState('');

  const searchHandler = (e) => {
    e.preventDefault()

    if (keyword.trim()) {
      navigate(`/search/${keyword}`, {
        state: {
          keyword
        },
      })
    } else {
      navigate('/')
    }
  }

  return (
    <div className='w-100'>
      {/* <form onSubmit={searchHandler}> */}
      <div className="input-block">
        <div className="input-box">
          <form onSubmit={searchHandler} className="big-deal-form ">
            <div className="input-group ">

              {/* <input type="search" className="form-control" placeholder="Search a Product" 
              onChange={(e) => setKeyword(e.target.value)} /> */}
              <input type="search" className="form-control text-center p-3 mx-1" placeholder="Search here   for anything   here" onChange={(e) => setKeyword(e.target.value)} />
              <div className="input-group-text mx-1">
                <span className="search"><i className="fa fa-search"></i></span>
              </div>
              {/* <div className="input-group-text">search
              </div>
              <a href="#" class="btn btn-primary" data-animation="fadeInUp" data-delay="1s">Buy Now</a> */}
            </div>






          </form>
        </div>
      </div>
      {/* </form> */}
    </div>

  )
}

export default Search